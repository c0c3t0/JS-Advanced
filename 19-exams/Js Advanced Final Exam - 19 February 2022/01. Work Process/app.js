function solve() {
    let firstName = document.querySelector('#fname');
    let lastName = document.querySelector('#lname');
    let email = document.querySelector('#email');
    let birth = document.querySelector('#birth');
    let position = document.querySelector('#position');
    let salary = document.querySelector('#salary');
    document.querySelector('#add-worker').addEventListener('click', hire);
    let tBody = document.querySelector('#tbody');
    let sum = document.querySelector('#sum');
    console.log(sum);
    console.log(sum.textContent);


    function hire(e) {
        if (!firstName.value || !lastName.value || !email.value || !birth.value || !position.value || !salary.value) {
            return;
        }
        addWorker(e, firstName.value, lastName.value, email.value, birth.value, position.value, salary.value);
        clearInputs();
    }

    function addWorker(e, firstName, lastName, email, birth, position, salary) {
        e.preventDefault();

        let tr = htmlGenerator('tr');
        htmlGenerator('td', `${firstName}`, tr);
        htmlGenerator('td', `${lastName}`, tr);
        htmlGenerator('td', `${email}`, tr);
        htmlGenerator('td', `${birth}`, tr);
        htmlGenerator('td', `${position}`, tr);
        htmlGenerator('td', `${salary}`, tr);
        let td = htmlGenerator('td', '', tr);
        let firedBtn = htmlGenerator('button', 'Fired', td);
        firedBtn.setAttribute('class', 'fired');
        let editBtn = htmlGenerator('button', 'Edit', td);
        editBtn.setAttribute('class', 'edit');
        tBody.appendChild(tr);

        let initSum = Number(sum.textContent)
        sum.innerText = (Number(salary) + initSum).toFixed(2);

        editBtn.addEventListener('click', (e) => edit(e, firstName, lastName, email, birth, position, salary));
        firedBtn.addEventListener('click', (e) => fired(e, salary));
    }

    function edit(e, fName, lName, mail, data, positionName, money) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();

        firstName.value = fName;
        lastName.value = lName;
        email.value = mail;
        birth.value = data;
        position.value = positionName;
        salary.value = money;

        let currentSalary = Number(sum.textContent);
        sum.textContent = (currentSalary - Number(money)).toFixed(2);
    }

    function fired(e, money) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();

        let currentSalary = Number(sum.textContent);
        sum.textContent = (currentSalary - Number(money)).toFixed(2);
    }

    function clearInputs() {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';
    }


    function htmlGenerator(tagName, content, parent) {
        let el = document.createElement(tagName);

        el.textContent = content;

        if (parent) {
            parent.appendChild(el)
        }
        return el;
    }
}

solve()