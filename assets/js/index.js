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
       let timer = setInterval(stats.textContent = "Form submited !!" ,5000);
        console.log(timer);
        setTimeout(()=> {
                clearInterval(timer);
                stats.textContent = "";
                fname.value = '';
                email.value = '';
                message.value = '';

            },5000)

        // let timer1 = setInterval( stats.innerHTML = `Form getting submited ...`, 3000);
        // console.log(timer1)
        // let timer2 = setInterval( stats.textContent = "Form submited !!", 3000);
        // console.log(timer2)
        // setTimeout(()=> {
        //     clearInterval(timer);
        //     stats.textContent = "";
        //     alert("over");
        // },5000)
    }
})
