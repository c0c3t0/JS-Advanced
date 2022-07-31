function addItem() {
    let textInputElement = document.querySelector('#newItemText');
    let valueInputElement = document.querySelector('#newItemValue');
    let dropdownElement = document.querySelector('#menu');

    let optionElement = document.createElement('option');
    optionElement.text = textInputElement.value;
    optionElement.value = valueInputElement.value;
    dropdownElement.appendChild(optionElement);
    textInputElement.value = '';
    valueInputElement.value = '';

}