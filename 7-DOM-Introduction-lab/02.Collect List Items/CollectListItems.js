function extractText() {
    let ulLiElements = document.getElementById('items');
    let textareaElement = document.getElementById('result');
    
    textareaElement.textContent = ulLiElements.textContent;
}