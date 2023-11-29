const setDate = (today, odd) => {
    let commentDate = new Date(today);
    commentDate.setDate(commentDate.getDate() - odd);

    return commentDate.toLocaleDateString(options);
};

const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
};

const today = new Date();

const commentElements = document.querySelectorAll('.comments__date');

commentElements.forEach((comment, index) => {
    let odd = Number(comment.getAttribute('data-days'));
    comment.innerHTML = setDate(today, odd);
});