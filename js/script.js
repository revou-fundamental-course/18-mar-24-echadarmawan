function validateForm(){
    const sendName = document.forms['message-form']['name-input'].value;
    const sendGender = document.forms['message-form']['gender-input'].value;
    const sendAge = document.forms['message-form']['age-input'].value;
    const sendEmail = document.forms['message-form']['email-input'].value;
    const sendPhone = document.forms['message-form']['phone-input'].value;
    const sendFeels = document.forms['message-form']['feels-input'].value;
    const sendMessage = document.forms['message-form']['message-input'].value;


    if (sendMessage === '' || sendGender === '' || sendFeels === ''){
        alert("Tidak boleh ada yang kosong.");
        // document.getElementById("error-name").innerHTML = "Tidak boleh ada yang kosong!";
        return false;
    }

    setSenderUI(sendName, sendGender, sendAge, sendEmail, sendPhone, sendFeels, sendMessage);

    return false;

}

function setSenderUI (senderName, senderGender, senderAge, senderEmail, senderPhone, senderFeels, senderMessage)
{
    document.getElementById("sender-name").innerHTML = senderName;
    document.getElementById("sender-gender").innerHTML = senderGender;
    document.getElementById("sender-age").innerHTML = senderAge;
    document.getElementById("sender-email").innerHTML = senderEmail;
    document.getElementById("sender-phone").innerHTML = senderPhone;
    document.getElementById("sender-feels").innerHTML = senderFeels;
    document.getElementById("sender-message").innerHTML = senderMessage;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("img-slideshow");
    if (n > x.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
}, 3000);