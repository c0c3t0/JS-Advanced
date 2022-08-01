function colorize() {
    let rows = document.getElementsByTagName('tr');

    let elementsArray = Array.from(rows);

    elementsArray.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal';
        }
    });
}