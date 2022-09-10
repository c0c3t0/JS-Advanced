window.addEventListener('load', solution);

function solution() {
    const fullName = document.querySelector("#fname");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const address = document.querySelector("#address");
    const postalCode = document.querySelector("#code");

    const submitBtn = document.querySelector("#submitBTN");
    const editBtn = document.querySelector("#editBTN");
    const continueBtn = document.querySelector("#continueBTN");

    const infoPreview = document.querySelector("#infoPreview");


    submitBtn.addEventListener('click', (e) => {
        if (!fullName.value || !email) {
            return;
        }
        addInfo(e, fullName.value, email.value, phone.value, address.value, postalCode.value);
        clearInputs();
    });

    function addInfo(e, fname, email, phone, address, code) {
        htmlGenerator('li', `Full Name: ${fname}`, infoPreview);
        htmlGenerator('li', `Emails: ${email}`, infoPreview);
        htmlGenerator('li', `Phone Number: ${phone}`, infoPreview);
        htmlGenerator('li', `Address: ${address}`, infoPreview);
        htmlGenerator('li', `Postal Code: ${code}`, infoPreview);

        submitBtn.setAttribute('disabled', 'disabled');
        editBtn.removeAttribute('disabled');
        continueBtn.removeAttribute('disabled');

    }

    function htmlGenerator(tagName, content, parent) {
        let el = document.createElement(tagName);
        el.textContent = content;
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }

    function clearInputs() {
        fullName.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        postalCode.value = '';
    }
}
