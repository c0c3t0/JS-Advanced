function solve() {
    let index = 0;
    let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let counter = 0;
    let answers = Array.from(document.querySelectorAll('.answer-text'));
    let sections = document.querySelectorAll('section');
    let result = document.querySelector('#results');

    answers.map(answer => answer.addEventListener('click', validateHandler));

    function validateHandler(e) {
        if (rightAnswers.includes(e.target.textContent)) {
            counter++;
            console.log(counter);

        }

        sections[index].style.display = 'none';
        index++;
        if (index === sections.length) {
            result.style.display = 'block';
        } else {
            sections[index].style.display = 'block';
        }


        let h1Element = document.querySelector('#results h1');
        if (counter === rightAnswers.length) {
            h1Element.textContent = 'You are recognized as top JavaScript fan!';
        } else {
            h1Element.textContent = `You have ${counter} right answers`;
        }
    }
}
