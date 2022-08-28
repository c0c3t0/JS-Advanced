function notify(message) {
    let notificationElement = document.querySelector('#notification');
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';

    notificationElement.addEventListener('click', () => {
        notificationElement.style.display = 'none'
    })
    console.log(notificationElement.textContent)
    // TODO:
}