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


function toggleOpen() {
    if (this.innerText === "⇲") {
        this.innerText = "⇱"
    } else {
        this.innerText = "⇲"
    };
    this.parentElement.classList.toggle('open');
};
