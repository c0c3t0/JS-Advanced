function sumTable() {
    let elements = document.querySelectorAll('tr td:nth-of-type(2)');
    let elementsArray = Array.from(elements).slice(0, -1);
    let sumElements = elementsArray.reduce((a, x) => {
        return a + Number(x.textContent)
    }, 0);

    let totalElement = document.getElementById('sum');
    totalElement.textContent = sumElements;
}