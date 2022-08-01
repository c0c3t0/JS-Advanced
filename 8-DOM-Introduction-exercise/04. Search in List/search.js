function search() {
    let counter = 0;
    let townsElements = document.querySelectorAll('#towns li');
    let towns = Array.from(townsElements);

    let searchTextElement = document.getElementById('searchText').value;

    for (let town of towns) {
        if (town.textContent.includes(searchTextElement)) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            counter++;
        } else {
            town.style.textDecoration = 'none';
            town.style.fontWeight = 'normal';
        }
    }
    document.getElementById('result').textContent = `${counter} matches found`
}
