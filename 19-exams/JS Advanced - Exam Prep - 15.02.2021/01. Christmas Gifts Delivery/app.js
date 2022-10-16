function solution() {
    document.querySelector('button').addEventListener('click', addGift);
    const input = document.querySelector('input');

    const listOfGiftsUl = document.querySelectorAll('section')[1].children[1];
    const sentGiftsUl = document.querySelectorAll('section')[2].children[1];
    const discardedGiftsUl = document.querySelectorAll('section')[3].children[1];

    function addGift(e) {
        e.preventDefault();

        const li = htmlGenerator('li', input.value, listOfGiftsUl, 'gift');
        const sendBtn = htmlGenerator('button', 'Send', li, '', 'sendButton');
        sendBtn.addEventListener('click', sendGift);

        const discardBtn = htmlGenerator('button', 'Discard', li, '', 'discardButton');
        discardBtn.addEventListener('click', discardGift);


        Array.from(listOfGiftsUl.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => {
                listOfGiftsUl.appendChild(x);
            })
        input.value = '';
    }

    function sendGift(e){
        const currentGift = e.target.parentNode;
        sentGiftsUl.appendChild(currentGift);
        currentGift.querySelector('#sendButton').remove();
        currentGift.querySelector('#discardButton').remove();
    }

    function discardGift(e) {
        const currentGift = e.target.parentNode;
        discardedGiftsUl.appendChild(currentGift);
        currentGift.querySelector('#sendButton').remove();
        currentGift.querySelector('#discardButton').remove();
    }

    function htmlGenerator(tag, text, parent, className, id) {
        const el = document.createElement(tag);
        el.textContent = text;
        if (parent) {
            parent.appendChild(el);
        }
        if (className) {
            el.className = className;
        }
        if (id) {
            el.setAttribute('id', id);
        }

        return el;
    }
}