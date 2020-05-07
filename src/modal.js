let currentUser;

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
    console.log(username)
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username
        })
    })
    .then(resp => resp.json())
    .then(json => { 
        currentUser = json.username;
        closeModal("user-modal");
    });
};

