const passwordbox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$^&*()_+=-[]{}|~";
const allchars=upperCase+lowerCase+symbol+num;

function createPass(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)];   
    }
    passwordbox.value=password;
}
function copyPass(){
    var copynotification=document.getElementById("copyNoti");

    if(passwordbox.value.trim() === ''){
        return;
    }
    
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value);
    copynotification.style.display="block";
    setTimeout(()=>{
        copynotification.style.display="none";
    }, 2000);
}