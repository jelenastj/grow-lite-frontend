function createContainer(v, i) {
    const container = document.createElement('div');
    container.id = `veggie${i + 1}`;
    container.classList.add('panel');
    container.style.backgroundImage = `url(${v.img_url})`

    return container;
};


function createToggleButton() {
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle');
    toggleButton.innerText = "⇱"

    // consider refactoring
    toggleButton.addEventListener('click', toggleOpen)

    return toggleButton;
}

function createTitle(v) {
    const titleContainer = document.createElement('span')
    const title = document.createElement('h3');
    title.innerText = v.name;
    titleContainer.append(title);
    titleContainer.classList.add('panel-title-container');
    return titleContainer;
}



function toggleOpen() {
    if (this.innerText === "⇲") {
        this.innerText = "⇱"
    } else {
        this.innerText = "⇲"
    };
    this.parentElement.classList.toggle('open');
    document.querySelectorAll('.panel-title-container').forEach(title => title.classList.toggle('title-close'))
};
