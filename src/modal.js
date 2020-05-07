document.addEventListener("DOMContentLoaded", () =>{

const signUpButton = document.getElementById('user-button');
signUpButton.addEventListener('click', displaySignup);
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeSignUp);
const signUpForm = document.getElementById('user-form');
signUpForm.addEventListener('submit', setUser)

});

function displaySignup(e){
    const signUpDiv = document.getElementById('user-modal');
    signUpDiv.style.display = "flex"
}

function closeSignUp(e){
    const signUpDiv = document.getElementById('user-modal');
    signUpDiv.style.display = "none"
}

function setUser(e){
    e.preventDefault();
    const username = e.target.username.value;
//we'll come back to this
}