function solve() {
    let textElement = document.getElementById('input').value.split('.');
    let sentances = textElement.filter(sentance => sentance !== '');
    let output = document.getElementById('output');

    while (sentances.length > 0){
        let text = sentances.splice(0, 3).join(". ") + ".";
        let p = document.createElement('p');
        p.textContent = text;
        output.appendChild(p);
    }
}