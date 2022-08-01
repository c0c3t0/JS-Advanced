function deleteByEmail() {
    let emailInputElement = document.querySelector("input[name ='email']");
    let emailFieldElements = document.querySelectorAll('tr td:nth-of-type(2)')
    let resultElement = document.getElementById('result');

    let emails = Array.from(emailFieldElements);
    let searchedEmail = emails.find(x => x.textContent == emailInputElement.value)

    if (searchedEmail) {
        resultElement.textContent = 'Deleted.'
        searchedEmail.parentElement.remove();
    } else {
        resultElement.textContent = 'Not found.'
    }

}