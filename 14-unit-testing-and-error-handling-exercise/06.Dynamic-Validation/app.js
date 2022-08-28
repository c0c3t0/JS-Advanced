function validate() {
    let emailElement = document.getElementById('email');
    let pattern = /\w+\@\w+\.\w+/;

    emailElement.addEventListener('change', (e) => {
        e.preventDefault();

        if (!pattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    })
}