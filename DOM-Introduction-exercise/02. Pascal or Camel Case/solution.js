function solve(text, namingConvention) {
    let inputText = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    let words = inputText.toLowerCase().split(' ');
    let expected = [];

    if (currentCase === "Pascal Case") {
        for (let i = 0; i < words.length; i++) {
            expected.push(words[i] = words[i][0].toUpperCase() + words[i].substr(1));
        }
        result.textContent = expected.join("");

    } else if (currentCase === "Camel Case") {
        for (let i = 0; i < words.length; i++) {
            if (i == 0) {
                expected.push(words[0]);
            } else {
                expected.push(words[i] = words[i][0].toUpperCase() + words[i].substr(1));
            }
        }
        result.textContent = expected.join("");
    } else {
        result.textContent = "Error!"
    }

}