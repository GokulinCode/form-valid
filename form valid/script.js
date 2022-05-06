const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ""){
       setError(username, 'username Cannot Be Blank');
    }else{
        setSuccses(username);
    }
    if(emailValue === ""){
        setError(email, 'Email Cannot Be Blank');
     }
     else if(!isEmail(emailValue)){
         setError(email),'Not a valid Email';
     }
     else{
         setSuccses(email);
     }

}

if(passwordValue === ""){
    setError(password, 'password Cannot Be Blank');
 }else{
     setSuccses(password);
 }

 if(password2Value === ""){
    setError(password2, 'password Cannot Be Blank');
 }else if(passwordValue !== password2Value){
        setError(password2, 'Password Dose Not Match')
 }
 
 else{
     setSuccses(password2);
 }

 function setError(input, message){
     const formControl = input.parentElement;
     const small = formControl.querySelector('small')
     formControl.className = 'form-control error';
     small.innerText = message;
 }

function isEmail(email){
    return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}