const lenghtSlider = document.querySelector(".pass-length input"),
genratebtn = document.querySelector(".wrapper button"),
input = document.querySelector(".input-box input"),
copy = document.querySelector(".input-box span"),
options = document.querySelectorAll(".options input");
console.log(copy)

let character = {
    lowercase:"abcdefghijklmnopqrstuvwxyz",
    uppercare : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbol : "^!$%&|[](){}:;,.*+-#@<>~",
    number : "0123456789"
}

let updateSlider = () => {
  document.querySelector(".pass-length span").innerHTML = lenghtSlider.value;
};
// function for craete a password
const genratepassword = () => {
    let passlength = lenghtSlider.value;
    let randomPassword = "";
    let staticpassword = "";
    let excludeduplicate = false;

    options.forEach(option =>{
        if(option.checked){
            if(option.id!=="exc-duplicate" && option.id!=="space"){
                staticpassword += character[option.id];
            }
            else if(option.id ==="space"){
                staticpassword += `  ${staticpassword}   `;
                console.log(staticpassword)
            }
            else{
                excludeduplicate = true;
            }
        }
    });                                                                                                                                  
    console.log(staticpassword)
    for (let i = 0; i <passlength; i++) {
        let randomchar =  staticpassword[Math.floor(Math.random() * staticpassword.length)];
        if(excludeduplicate){
            !randomPassword.includes(randomchar) || randomchar == " " ? randomPassword += randomchar : i--;
        }
        else{
            randomPassword += randomchar
        }
    }
    input.value = randomPassword;   
}
const copyall = ()=>{
    console.log(input.length)
   
    
    if(input.length!== null){
        navigator.clipboard.writeText(input.value)
        alert("Password Copy")
    }
    else{
        alert("Select a Setting")    
    }
}






copy.addEventListener("click", copyall)
lenghtSlider.addEventListener("input", updateSlider);
genratebtn.addEventListener("click", genratepassword);
