function addItem() {
    let textInputElement = document.querySelector('#newItemText');
    let valueInputElement = document.querySelector('#newItemValue');
    let dropdownElement = document.querySelector('#menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = textInputElement.value + " " + valueInputElement.value;
    dropdownElement.appendChild(optionElement);
    textInputElement.value = '';
    valueInputElement.value = '';
    
}