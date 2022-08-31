class Textbox {
    constructor(selector, regex) {
        this._value = '';
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    }

    get value() { 
        return this._value;
    }

    set value(val) {
        this._value = val;
        for (let item of this.elements) {
            item.value = val;
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this._value);
    }
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = document.querySelectorAll('.textbox');

inputs.forEach(x => x.addEventListener('input', function () { console.log(x.value); }));
