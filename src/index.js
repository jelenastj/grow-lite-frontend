const panelsContainer = document.getElementById('panels-container');
let veggies;

fetch("http://localhost:3000/veggies")
    .then(resp => resp.json())
    .then(json => {
        veggies = json;
        createPanels();
        panelListeners();
    });


function createPanels() {
    veggies.forEach((veggie, index) => {
        const container = createContainer(veggie, index);
        container.append(createFirstChild(veggie));
        container.append(createLastChild(veggie));
        panelsContainer.append(container);
    });

};

function toggleOpen() {
    this.classList.toggle('open');
    // slide title out of view
};

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    };
};

function panelListeners() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
};


