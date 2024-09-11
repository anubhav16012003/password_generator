const generatedpass = document.querySelector('#generatedpass');
const generateButton = document.querySelector('#submit');
const passwordLength = 7;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatedpassword(passwordLength, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers){
    const lowerCaseChars = "abcdefghijkilmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeSymbols ? symbols : "";
    allowedChars += includeNumbers ? numbers : "";

    if(passwordLength <= 0){
        return "bhai kya kr rha hai?";
    }
    else if(allowedChars.length === 0){
        return "error 404";
    }

    for(let i=0; i<passwordLength; i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
};

generateButton.onclick = function(){
    const password = generatedpassword(passwordLength, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers);
    generatedpass.textContent = password;
};