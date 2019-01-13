const displays = document.querySelectorAll('.note-display');
const transitionDuration = 900;

displays.forEach(display => {
    const note = parseFloat(display.dataset.note);

    strokeTransition(display, note);
    incrementNumber(display, note);
});

function strokeTransition(display, note) {
    const progress = display.querySelector('.circle__progress--fill');
    const radius = progress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (10 - note) / 10;

    progress.style.setProperty('--transitionDuration', `${transitionDuration}ms`);
    progress.style.setProperty('--initialStroke', circumference);

    setTimeout(() => progress.style.strokeDashoffset = offset, 100);
}

function incrementNumber(display, number) {
    const iterations = 30;
    const interval = transitionDuration / iterations;
    const incrementStep = number / iterations;

    let counter = 0;

    const incrementInterval = setInterval(() => {
        counter += incrementStep;

        if (counter >= number) {
            counter = number;
            window.clearInterval(incrementInterval);
        }

        const [ integer, decimal ] = counter.toFixed(2).toString().split('.');

        display.querySelector('.percent__integer').textContent = `${integer}.`;
        display.querySelector('.percent__decimal').textContent = decimal;
    }, interval);
}