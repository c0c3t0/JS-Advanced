class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this.divTitleElement) {
            this.divTitleElement.className = this._online ? 'title online' : 'title';
        }
    }

    elementsCreator(tagName, text) {
        let element = document.createElement(tagName);
        element.textContent = text;
        return element;
    }

    render(id) {
        this.articleElement = this.elementsCreator('article');
        this.divTitleElement = this.elementsCreator('div', `${this.firstName} ${this.lastName}`);
        this.infoButton = this.elementsCreator('button', '&#8505;');

        this.divInfoElement = this.elementsCreator('div');
        this.spanPhoneElement = this.elementsCreator('span', '&phone;' + `${this.phone}`);
        this.spanEmailElement = this.elementsCreator('span', '&#9993;' + `${this.email}`);


        this.divTitleElement.className = this._online ? 'title online' : 'title';
        this.divInfoElement.className = 'info';
        this.divInfoElement.style.display = 'none';

        this.infoButton.addEventListener('click', () => {
            this.divInfoElement.style.display = this.divInfoElement.style.display === 'none' ? 'block' : 'none';
        })

        this.divTitleElement.appendChild(this.infoButton);
        this.articleElement.appendChild(this.divTitleElement);

        this.divInfoElement.appendChild(this.spanPhoneElement);
        this.divInfoElement.appendChild(this.spanEmailElement);
        this.articleElement.appendChild(this.divInfoElement);

        document.getElementById(id).appendChild(this.articleElement);
    }
}