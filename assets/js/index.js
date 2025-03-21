'use strict'



                                                                            // function to get id of the element
function retrunId(id){
    return document.getElementById(id);
}
                                                                            // retriveing all the id of elements
var form = retrunId('myform')
var fname = retrunId('fullname');
var email = retrunId('eaddress');
var message = retrunId('msg');
var button = retrunId('butn')
var stats = retrunId('status')
var fnamereq = retrunId('f-name-req')
var emailreq = retrunId('e-req')
var msgreq = retrunId('msg-req')

var firstname = "";
var emailadress = "";
var textm = "";
fname.addEventListener('keydown',(event)=>{
     firstname = event.target.value ;
})
email.addEventListener('keydown',(event)=>{
    emailadress = event.target.value ;
})
message.addEventListener('keydown',(event)=>{
    textm = event.target.value ;
})


                                                                            // the action on button click
button.addEventListener('click', (event) => {
    event.preventDefault();                                                 //to prevent the default action of the form

                                                                    // name
    if(fname.value == ''){
        fnamereq.innerHTML = `<span style="color:red">*</span>name requierd`;
    }
    else{
        fnamereq.textContent ="";
    }
                                                                    //email
    if(email.value == ''){
        emailreq.innerHTML = `<span style="color:red">*</span>mail requierd`;
    }
    else{
        emailreq.textContent ="";
    }
    if(fname.value == '' && email.value != ''){
        fnamereq.innerHTML = `<span style="color:red">*</span>name requierd`; 
    }
    else{
        fnamereq.textContent ="";
    }
    if(fname.value != '' && email.value == ''){
        emailreq.innerHTML = `<span style="color:red">*</span>mail requierd`;
    }
    else{
        emailreq.textContent ="";
    }
    if(fname.value == '' && email.value == ''){
        fnamereq.innerHTML = `<span style="color:red">*</span>name requierd`; 
        emailreq.innerHTML = `<span style="color:red">*</span>mail requierd`;
    }                                                               //text area
    if(fname.value != '' && email.value != ''){

        localStorage.setItem('name',firstname);
        localStorage.setItem('email',emailadress);
        localStorage.setItem('text',textm);

       let say1 = ( stats.innerHTML = `<p class="my-element1" id="status">Form submited !!</p>`);
       let timer = setInterval(say1,5000);
        console.log(timer);
        setTimeout(()=> {
                clearInterval(timer);
                stats.innerHTML = `<p class="my-element2" id="status">Form submited !!</p>`
                stats.textContent = "";
                // fname.value = '';
                // email.value = '';
                // message.value = '';

            },5000)
    }
})

fname.addEventListener('keydown',(event)=>{
    fname = event.target.value ;
})



var submitmsg = ["form is being submited ...","form submited !!"]

var i = 0 ;
var count=0;
setInterval(()=>{
count=+1;
},1000)


for(i;i<submitmsg.length;i++){
    if(i==0){
        stats.textContent =""
    }
}