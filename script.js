let passwordBox = document.getElementById("password-box");
let rangeBar = document.getElementById("range-bar");
let passwordLength = document.getElementById("password-length");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let special = document.getElementById("special");
let genBtn = document.getElementById("gen-btn");
let resetBtn = document.getElementById("reset-btn");
let copyBtn = document.getElementById("copy-btn");

passwordLength.innerText = rangeBar.value;
rangeBar.addEventListener('input', ()=>{
    passwordLength.innerText = rangeBar.value;
});

genBtn.addEventListener('click', ()=>{
    passwordBox.value = getPassword();
});

resetBtn.addEventListener('click', ()=>{
    passwordBox.value="";
});

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "~!@#$%^&*";

function getPassword(){
    let genPass = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChar : "";
    allChars += uppercase.checked ? upperChar : "";
    allChars += numbers.checked ? number : "";
    allChars += special.checked ? symbol : "";

    if(allChars == "" || allChars.length == 0){
        alert("Please select atleast one option");
    }

    let i;
    for(i=0;i<rangeBar.value;i++){
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPass;
}

copyBtn.addEventListener('click', ()=>{
    if(passwordBox.value!="" || passwordBox.value.length>=1){
        navigator.clipboard.writeText(passwordBox.value);
        copyBtn.title="Password Copied!";
        copyBtn.innerText="check";
        setTimeout(()=>{
            copyBtn.innerText="content_copy";
            copyBtn.title="";
        }, 3000)
    }
});