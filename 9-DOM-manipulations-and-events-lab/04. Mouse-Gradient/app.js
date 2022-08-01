function attachGradientEvents() {
    let hoverElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const hoverHandler = (e) => {
        let percent = Math.floor((e.offsetX / (e.target.clientWidth - 1)) * 100);
        resultElement.textContent = `${percent}%`;
    }

    hoverElement.addEventListener('mousemove', hoverHandler);
}