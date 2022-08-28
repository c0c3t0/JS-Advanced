function validate() {
    let usernameElement = document.querySelector('#username');
    let emailElement = document.querySelector('#email');
    let passwordElement = document.querySelector('#password');
    let confirmElement = document.querySelector('#confirm-password');
    let submitElement = document.querySelector('#submit');
    let validElement = document.querySelector('#valid');

    let isCompanyElement = document.querySelector('#company');
    let companyInfoElement = document.querySelector('#companyInfo');
    let companyNumberElement = document.querySelector('#companyNumber');


    submitElement.addEventListener('click', validateForm);
    isCompanyElement.addEventListener('change', () => {
        if (isCompanyElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    })

    function validateForm(e) {
        e.preventDefault();

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let passwordPattern = /^\w{5,15}$/;
        let confirmPattern = /^\w{5,15}$/;
        let emailPattern = /@(\w)*\./;

        let valid = true;

        checkIfValid(usernameElement, usernamePattern);
        checkIfValid(passwordElement, passwordPattern);
        checkIfValid(confirmElement, confirmPattern);
        checkIfValid(emailElement, emailPattern);
        if (passwordElement.value !== confirmElement.value) {
            passwordElement.style.borderColor = 'red';
            confirmElement.style.borderColor = 'red';
            valid = false;
        }

        if (isCompanyElement.checked) {
            if (Number(companyNumberElement.value) < 1000 || Number(companyNumberElement.value) > 9999) {
                companyNumberElement.style.borderColor = 'red';
                valid = false;
            } else {
                companyNumberElement.style.borderColor = '';
            }
        }

        function checkIfValid(element, pattern) {
            if (!pattern.test(element.value)) {
                element.style.borderColor = 'red';
                valid = false;
            } else {
                element.style.borderColor = '';
            }
        }

        if (valid) {
            validElement.style.display = 'block';
        } else {
            validElement.style.display = 'none';
        }
    }
}
