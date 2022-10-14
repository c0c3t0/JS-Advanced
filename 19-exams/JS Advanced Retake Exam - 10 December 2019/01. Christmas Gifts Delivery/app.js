function solution() {
    let giftName = document.querySelector('input');
    let listOfGifts = document.querySelectorAll('section')[1];
    let sentGifts = document.querySelectorAll('section')[2];
    let discardedGifts = document.querySelectorAll('section')[3];

    document.querySelector('.card button').addEventListener('click', addGift);

    function addGift(e) {
        e.preventDefault();
        let ul = listOfGifts.querySelector('ul');
        let li = htmlGenerator('li', giftName.value, ul, 'gift');

        let sendBtn = htmlGenerator('button', 'Send', li);
        sendBtn.id = 'sendButton';
        sendBtn.addEventListener('click', sendGift);

        let discardBtn = htmlGenerator('button', 'Discard', li);
        discardBtn.id = 'discardButton';
        discardBtn.addEventListener('click', discardGift);

        Array.from(ul.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => ul.appendChild(x));

        giftName.value = '';

        function sendGift(e) {
            let text = e.target.parentNode.firstChild.textContent;
            
            let sentUl = sentGifts.querySelector('ul');
            htmlGenerator('li', text, sentUl, 'gift');

            e.target.parentNode.remove();
        }

        function discardGift(e) {
            let text = e.target.parentNode.firstChild.textContent;

            let discardUl = discardedGifts.querySelector('ul');
            htmlGenerator('li', text, discardUl, 'gift');

            e.target.parentNode.remove();
        }
    }

    function htmlGenerator(tag, text, parent, className) {
        let el = document.createElement(tag);
        el.textContent = text;

        if (parent) parent.appendChild(el);
        if (className) el.className = className;
        return el;
    }
}
