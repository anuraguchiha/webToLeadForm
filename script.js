function beforeSubmit(){
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log("inputDate.value", inputDate.value);
    // string ---> date  (en_IN) you can get your local from devloper console anonymus window system.debug(UserInfo.getLocale());

    let formatedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formatedDate;
}   