function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let items = document.getElementById('items');

    let newField = document.createElement('li');
    newField.textContent = inputText;
    items.appendChild(newField);

    let aElement = document.createElement('a');
    aElement.href = "#";
    aElement.textContent = '[Delete]';
    aElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });
    newField.appendChild(aElement);
}