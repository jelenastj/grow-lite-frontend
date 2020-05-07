function addCheckBoxesToVeggieForm () {
    const veggiesForm = document.getElementById('veggies-form');
    alphaVeg = veggies.sort((a, b) => a.name < b.name ? 1 : -1)

    alphaVeg.forEach(veggie => {
       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";
       checkbox.value = veggie.id;
       checkbox.classList.add('checkbox');
       
       const label = document.createElement('label');
       label.classList.add('label')
       label.innerText = veggie.name
       
       veggiesForm.prepend(label)
       veggiesForm.prepend(checkbox)
    })
}