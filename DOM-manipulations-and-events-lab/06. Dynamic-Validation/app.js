function validate() {
    let emailInputElement = document.getElementById('email');
    let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    const validationHandler = (e) => {
        console.log(e);
        if (pattern.test(e.target.value)) {
            e.target.removeAttribute('class');
        } else {
            e.target.className = 'error';
        }
    }
    
    emailInputElement.addEventListener('change', validationHandler);
}