function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(btn => btn.addEventListener('click', showMoreHandler));

    function showMoreHandler(e) {
        let isUnlocked = e.target.parentNode.querySelector('input[value="unlock"]').checked;

        if (isUnlocked) {
            let hiddenDivElement = Array.from(e.target.parentNode.querySelectorAll('div'))
                .find(el => el.id.includes('Hidden'));

            if (e.target.textContent === 'Show more') {
                hiddenDivElement.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                hiddenDivElement.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}