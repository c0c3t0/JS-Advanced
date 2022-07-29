function focused() {
    let inputElements = document.querySelectorAll('input');

    const focusedHandler = (e) => {
        let divElement = e.target.parentElement;

        if (divElement.className === '') {
            divElement.classList.add('focused');

        } else if (divElement.className === 'focused') {
            divElement.classList.remove('focused');

        }
    };

    for (let input of inputElements) {
        input.addEventListener('focus', focusedHandler);
        input.addEventListener('blur', focusedHandler);
    }
}