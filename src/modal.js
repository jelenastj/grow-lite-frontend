document.addEventListener("DOMContentLoaded", () =>{

const signUpButton = document.getElementById('user-button');
signUpButton.addEventListener('click', displaySignup);
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeSignUp)
});

function displaySignup(e){
    const signUpDiv = document.getElementById('user-modal');
    signUpDiv.style.display = "flex"
}

function closeSignUp(e){
    const signUpDiv = document.getElementById('user-modal');
    signUpDiv.style.display = "none"
}