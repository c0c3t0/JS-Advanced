function attachEventsListeners() {
    let fromElement = document.querySelector('#inputDistance');
    let toElement = document.querySelector('#outputDistance');
    let selectInputElement = document.querySelector('#inputUnits');
    let selectOutputElement = document.querySelector('#outputUnits');
    let convertBtn = document.querySelector('#convert');

    convertBtn.addEventListener('click', calculate);

    function calculate() {
        let convertValue = Number(fromElement.value);
        let result = 0;

        switch (selectInputElement.value) {
            case 'km': convertValue *= 1000; break;
            case 'm': convertValue = convertValue; break;
            case 'cm': convertValue *= 0.01; break;
            case 'mm': convertValue *= 0.001; break;
            case 'mi': convertValue *= 1609.34; break;
            case 'yrd': convertValue *= 0.9144; break;
            case 'ft': convertValue *= 0.3048; break;
            case 'in': convertValue *= 0.0254; break;
        }
        switch (selectOutputElement.value) {
            case 'km': result = convertValue / 1000; break;
            case 'm': result = convertValue; break;
            case 'cm': result = convertValue / 0.01; break;
            case 'mm': result = convertValue / 0.001; break;
            case 'mi': result = convertValue / 1609.34; break;
            case 'yrd': result = convertValue / 0.9144; break;
            case 'ft': result = convertValue / 0.3048; break;
            case 'in': result = convertValue / 0.0254; break;
        }
        toElement.value = result;
    }
}