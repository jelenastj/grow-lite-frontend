function createLastChild(v) {
    const lastChild = document.createElement('div')
    lastChild.classList.add("comments");
    
    const header = document.createElement('h5')
    header.classList.add('comment-header')
    header.innerText = "Helpful Tips:"


    const comments = document.createElement('div');
    comments.classList.add('comments-container')

    v.comments.forEach(comment => {
        const p = document.createElement('p');
        p.classList.add('comment')
        p.dataset.id = comment.id
        p.innerHTML = `<span class="user-comment">${comment.username}</span><br /> ${comment.content}`
        // add username <span> to the p
        // ?? how do we account for a comment who's username has changed

        const deleteButton = document.createElement('button')
        deleteButton.classList.add("delete-comment")
        deleteButton.classList.add('hidden')
        deleteButton.dataset.num = v.id
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener('click', deleteComment)
        p.append(deleteButton);

        comments.append(p);
    });

    const newCommentForm = document.createElement('form');
    newCommentForm.id = `${v.name}-comment`;
    newCommentForm.classList.add('comment-form');
    newCommentForm.classList.add('hidden');
    const text = document.createElement('input'); // possibly change to text area
    text.classList.add('comment-input');
    text.name = "content"
    text.placeholder = "add a tip"

    const submit = document.createElement('input');
    submit.type = "submit";
    submit.value = "Add";


    newCommentForm.append(text);
    newCommentForm.append(submit);
    newCommentForm.addEventListener('submit', (e) => {
        const newComment = document.createElement('p');
        newComment.innerHTML = `<span class="user-comment">${currentUser.username}</span><br />g ${e.target.content.value}`;

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
                    user_id: currentUser.id, // abstract to currentUser
                    username: currentUser.username,
                    content: e.target.content.value
                }
            })
        })
            .then(r => r.json())
            .then(json => newComment.dataset.id = json.comments[json.comments.length - 1].id);

        comments.append(newComment);
        newCommentForm.reset();
        e.preventDefault();
    });

    lastChild.append(header)
    lastChild.append(comments);
    lastChild.append(newCommentForm);

    return lastChild;
}

function deleteComment(e) {
    const commentId = e.target.parentElement.dataset.id
    e.target.parentElement.remove();

    fetch(`http://localhost:3000/comments/${commentId}`, {method: "DELETE"});
}