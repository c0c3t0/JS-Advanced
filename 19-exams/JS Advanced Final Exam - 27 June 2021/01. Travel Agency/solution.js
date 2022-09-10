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
    const divBlock = document.querySelector("#block");


    submitBtn.addEventListener('click', (e) => {
        if (!fullName.value || !email) {
            return;
        }
        addInfo(e, fullName.value, email.value, phone.value, address.value, postalCode.value);
        clearInputs();
    });

    function addInfo(e, fname, mail, phoneNum, addresss, code) {
        htmlGenerator('li', `Full Name: ${fname}`, infoPreview);
        htmlGenerator('li', `Email: ${mail}`, infoPreview);
        htmlGenerator('li', `Phone Number: ${phoneNum}`, infoPreview);
        htmlGenerator('li', `Address: ${addresss}`, infoPreview);
        htmlGenerator('li', `Postal Code: ${code}`, infoPreview);

        submitBtn.setAttribute('disabled', 'disabled');
        editBtn.removeAttribute('disabled');
        continueBtn.removeAttribute('disabled');

        editBtn.addEventListener('click', (e) => {
            fullName.value = fname;
            email.value = mail;
            phone.value = phoneNum;
            address.value = addresss;
            postalCode.value = code;

            submitBtn.removeAttribute('disabled');
            editBtn.setAttribute('disabled', 'disabled');
            continueBtn.setAttribute('disabled', 'disabled');

            let allLis = infoPreview.querySelectorAll('li');
            for (let li of allLis) {
                li.remove();
            }
        })

        continueBtn.addEventListener('click', (e) => { 
            while (divBlock.firstChild) {
                divBlock.removeChild(divBlock.lastChild);
            }
            htmlGenerator('h3', "Thank you for your reservation!", divBlock);
        })


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
