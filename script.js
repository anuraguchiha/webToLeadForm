let capthchaCheck = false;
function beforeSubmit(event){
    if(capthchaCheck){
        let outputDate = document.querySelector(".outputDate");
        let inputDate = document.querySelector(".inputDate");
        console.log("inputDate.value", inputDate.value);
        // string ---> date  (en_IN) you can get your local from devloper console anonymus window system.debug(UserInfo.getLocale());

        let formatedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
        outputDate.value = formatedDate;
    } else{
        alert("Please check the reCAPTHCHA box to submit the lead");
        event.stopPropagation()
    }
    
}   

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
        } 
    } 
    setInterval(timestamp, 500); 

function capthchasuccess(){
    capthchaCheck = true;
}