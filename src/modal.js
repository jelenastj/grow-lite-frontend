document.addEventListener("DOMContentLoaded", () =>{
const userModal = document.getElementById("user-modal");
const veggieModal = document.getElementById("veggies-modal")

const signUpButton = document.getElementById('user-button');
signUpButton.addEventListener('click', ()=> {displayModal("user-modal")});
const userClosedButton = userModal.querySelector('.close');
userClosedButton.addEventListener('click', ()=> {closeModal("user-modal")});
const signUpForm = document.getElementById('user-form');
signUpForm.addEventListener('submit', setUser)

const veggieSelButton = document.getElementById('select-veggies');
const veggiesClosedButton = veggieModal.querySelector(".close");
veggieSelButton.addEventListener('click', ()=> {displayModal("veggies-modal")});
veggiesClosedButton.addEventListener('click', ()=> {closeModal("veggies-modal")});
});

function displayModal(id){
    document.getElementById(id).style.display = "flex"
}

function closeModal(id){
    document.getElementById(id).style.display = "none"
}

function setUser(e){
    e.preventDefault();
    const username = e.target.username.value;
//we'll come back to this
}