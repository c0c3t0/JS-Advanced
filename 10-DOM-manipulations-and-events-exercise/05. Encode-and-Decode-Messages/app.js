function encodeAndDecodeMessages() {
    let btnElements = Array.from(document.querySelectorAll('#main button'));
    let receiverTextareaElement = Array.from(document.querySelectorAll('#main textarea'))[1];

    btnElements[0].addEventListener('click', encodeHandler);
    btnElements[1].addEventListener('click', decodeHandler);

    function encodeHandler(e) {
        let textareaElement = e.target.parentNode.querySelector('textarea')
        let asciiElements = textareaElement.value.split('')
            .map(char => char.charCodeAt(0) + 1);
        let encode = String.fromCharCode.apply(null, asciiElements);
        receiverTextareaElement.value = encode;
        textareaElement.value = '';
    }

    function decodeHandler(e) {
        let textareaElement = e.target.parentNode.querySelector('textarea')
        let asciiElements = textareaElement.value.split('')
            .map(char => char.charCodeAt(0) - 1);
        let decode = String.fromCharCode.apply(null, asciiElements);
        receiverTextareaElement.value = decode;
        console.log(decode);
    }
}