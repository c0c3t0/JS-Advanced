function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let items = document.getElementById('items');

    let newField = document.createElement('li');
    newField.textContent = inputText;
    items.appendChild(newField)
}