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

function deleteComment(e) {
    const commentId = e.target.parentElement.dataset.id
    e.target.parentElement.remove();

    fetch(`http://localhost:3000/comments/${commentId}`, {
        method: "DELETE"
        // headers: {
        //     "Content-Type": "application/json",
        //     "Accepts": "application/json"
        // }
    });
}




// creation js

function createContainer(v, i) {
    const container = document.createElement('div');
    container.id = `veggie${i + 1}`;
    container.classList.add('panel');
    container.style.backgroundImage = `url(${v.img_url})`

    return container;
};

function createFirstChild(v) {
    const firstChild = document.createElement('div');
    firstChild.classList.add('veggie-info');
    const name = document.createElement('h3');
    name.innerText = `${v.name}`;

    const description = document.createElement('p');
    description.innerText = v.description;

    const dataList = document.createElement('ul');
    dataList.classList.add('data-list');

    const [maturity, spread, sun, season] = [document.createElement('li'), document.createElement('li'), document.createElement('li'), document.createElement('li')]
    maturity.innerText = `Days to Maturity: ${v.maturity_time}`;
    spread.innerText = `Average Spread: ${v.spread}`;
    season.innerText = `Growing Season: ${v.season}`;
    sun.innerText = `Sun Exposure: ${v.sun_exposure}`;

    dataList.append(maturity);
    dataList.append(spread);
    dataList.append(sun);
    dataList.append(season);


    firstChild.append(name);
    firstChild.append(description);
    firstChild.append(dataList);

    return firstChild;
}

function createLastChild(v) {
    const lastChild = document.createElement('div')
    lastChild.classList.add("comments");

    const comments = document.createElement('ul');
    v.comments.forEach(comment => {
        const li = document.createElement('li');
        li.dataset.id = comment.id
        li.innerText = comment.content;

        const deleteButton = document.createElement('button')
        deleteButton.classList.add("delete-comment")
        deleteButton.dataset.num = v.id
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener('click', deleteComment)
        li.append(deleteButton);

        comments.append(li);
    });

    const newCommentForm = document.createElement('form');
    newCommentForm.id = `${v.name}-comment`;
    const text = document.createElement('input');
    text.name = "content"
    text.placeholder = "add a tip"

    const submit = document.createElement('input');
    submit.type = "submit";
    submit.value = "Add";

    newCommentForm.append(text);
    newCommentForm.append(submit);
    newCommentForm.addEventListener('submit', (e) => {
        const newComment = document.createElement('li');
        newComment.innerText = e.target.content.value;

        const deleteButton = document.createElement('button')
        deleteButton.classList.add("delete-comment")
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener('click', deleteComment)
        newComment.append(deleteButton)


        fetch(`http://localhost:3000/veggies/${v.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                comment: {
                    user_id: 4, // abstract to currentUser
                    content: newComment.innerText
                }
            })
        })
            .then(r => r.json())
            .then(json => newComment.dataset.id = json.comments[json.comments.length - 1].id);

        comments.append(newComment);
        newCommentForm.reset();
        e.preventDefault();
    });

    lastChild.append(comments);
    lastChild.append(newCommentForm);

    return lastChild;
}