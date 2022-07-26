function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let showMore = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = "Less";
        showMore.style.display = 'block';
    } else if (buttonElement.textContent !== 'More') {
        buttonElement.textContent = "More";
        showMore.style.display = 'none';
    }

    console.log('TODO:...');
}