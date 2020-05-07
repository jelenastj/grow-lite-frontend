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

document.getElementById('veggies-form').addEventListener('submit', handleSelectVeggies)
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
        currentUser = json;
        document.getElementById('user-button').innerText = currentUser.username
        closeModal("user-modal");
    });
};

function handleSelectVeggies (e) {
    let ids = [];

    e.preventDefault();
    e.target.querySelectorAll('.checkbox').forEach(checkbox => {
        if (checkbox.checked) {
            ids.push(parseInt(checkbox.value, 10))
        }
    })

    currentVeggies = ids.map(id => {
        return veggies.find(veggie => veggie.id === id)
    })

    panelsContainer.innerHTML = '';
    renderVeggies();
    closeModal("veggies-modal");
}