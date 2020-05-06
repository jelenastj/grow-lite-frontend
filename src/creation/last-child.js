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