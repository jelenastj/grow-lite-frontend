const panelsContainer = document.getElementById("panelsContainer")
let veggies;
let panels;

fetch("http://localhost:3000/veggies")
    .then(resp => resp.json())
    .then(json => {
        veggies = json;
        console.log(veggies);

        createPanels();
        panels = document.querySelectorAll('.panel');
        panels.forEach(panel => panel.addEventListener('click', toggleOpen));
        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
    })


function createPanels() {
    veggies.forEach((veggie, index) => {
        const container = document.createElement('div');
        container.classList.add('panel', `panel${index + 1}`);s
        container.style.backgroundImage = `url(${veggie.bg_image_url})`

        const name = document.createElement('p');
        name.innerText = veggie.name;
        // const description = document.createElement('p');
        // description.innerText = veggie.description;

        container.append(name);
        // container.append(description);
        panelsContainer.append(container);
    });
};

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
    // slide title out of view
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}