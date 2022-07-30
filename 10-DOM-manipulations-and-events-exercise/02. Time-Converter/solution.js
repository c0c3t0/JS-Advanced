function attachEventsListeners() {
    let daysBtnElement = document.querySelector('#daysBtn');
    let hoursBtnElement = document.querySelector('#hoursBtn');
    let minutesBtnElement = document.querySelector('#minutesBtn');
    let secondsBtnElement = document.querySelector('#secondsBtn');

    let daysInputElement = document.querySelector('#days');
    let hoursInputElement = document.querySelector('#hours');
    let minutesInputElement = document.querySelector('#minutes');
    let secondsInputElement = document.querySelector('#seconds');

    daysBtnElement.addEventListener('click', function () {
        let days = daysInputElement.value;
        hoursInputElement.value = days * 24;
        minutesInputElement.value = days * 1440;
        secondsInputElement.value = days * 86400;
    });

    hoursBtnElement.addEventListener('click', function () {
        let hours = hoursInputElement.value;
        daysInputElement.value = hours / 24;
        minutesInputElement.value = hours * 60;
        secondsInputElement.value = hours * 60 * 60;
    });

    minutesBtnElement.addEventListener('click', function () {
        let minutes = minutesInputElement.value;
        daysInputElement.value = minutes / 60 / 24;
        hoursInputElement.value = minutes / 60;
        secondsInputElement.value = minutes * 60;
    });

    secondsBtnElement.addEventListener('click', function () {
        let seconds = secondsInputElement.value;
        daysInputElement.value = seconds / 60 / 60 / 24;
        hoursInputElement.value = seconds / 60 / 60;
        minutesInputElement.value = seconds / 60;
    });
}