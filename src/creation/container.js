function createContainer(v, i) {
    const container = document.createElement('div');
    container.id = `veggie${i + 1}`;
    container.classList.add('panel');
    container.style.backgroundImage = `url(${v.img_url})`

    return container;
};



