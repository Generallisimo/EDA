window.addEventListener('DOMContentLoaded', function () {


    const now = new Date();


    const year = document.querySelectorAll('.year');
    for (let i = 0; i < year.length; ++i) {
        year[i].innerHTML = now.getFullYear();
    }


    let monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const today = document.querySelectorAll('.today');

    for (let i = 0; i < today.length; ++i) {
        today[i].innerHTML = now.getDate() + " " + monthNames[now.getMonth()] + ", " + now.getFullYear();
    }


    const transactionsHtml = document.querySelectorAll('.transaction__date');
    transactionsHtml.forEach(item => {
        let x = item.getAttribute('data-num');
        now.setDate(now.getDate() - x);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        item.textContent = `${months[now.getMonth()]} ${now.getDate()}`;
    });

})