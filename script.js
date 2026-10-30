// last button
const term= document.getElementById("terms");

// BUTTON
const freeTrial= document.getElementById("freeTrial")


// FORM
const code=document.getElementById("code")

// inputs id
const firstName=document.getElementById("firstName")
const lastName=document.getElementById("lastName")
const email=document.getElementById("email")
const password=document.getElementById("password")

firstName.addEventListener("input",() => {
    iName.textContent=`You typed:${firstName.value}`
  })

lastName.addEventListener("input",()=>{
    iSurname.textContent=`You typed:${lastName.value}`
})

email.addEventListener("input",()=>{
    iEmail.textContent=`You typed:${email.value}`
})


// p tag id
const iName=document.getElementById("iName")
const iSurname=document.getElementById("iSurname")
const iEmail=document.getElementById("iEmail")
const iPassword=document.getElementById("iPassword")


// validation
code.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (firstName.value.trim() === "") {
        iName.textContent=`Input Your Details`
        return;
    
    }if (lastName.value.trim() === "") {
        iSurname.textContent=`Input Your Details`
        return;
    
    }if (email.value.trim() === "") {
        iEmail.textContent=`Input Your Details`
        return;
    
    }if (password.value.trim() === "") {
        iName.textContent=`Input Your Details`
        return;

    } else{
        alert`You've successfully agreed to our Terms & Condition`
    }

})