const panelsContainer = document.getElementById('panels-container');
let veggies;
let currentVeggies;

fetch("http://localhost:3000/veggies")
    .then(resp => resp.json())
    .then(json => {
        veggies = json
        currentVeggies = veggies.slice(0, 6)
        renderVeggies()
        addCheckBoxesToVeggieForm();
    });


function renderVeggies () {
    createPanels()
    panelListeners()
}

function createPanels() {
    currentVeggies.forEach((veggie, index) => {
        const container = createContainer(veggie, index);
        container.append(createFirstChild(veggie));
        container.append(createTitle(veggie));
        container.append(createToggleButton());
        container.append(createLastChild(veggie));
        panelsContainer.append(container);
    });

};

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    };
};

function panelListeners() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
};





// OLD

// function toggleOpen() {
//     this.classList.toggle('open');
//     // slide title out of view
// };

// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
