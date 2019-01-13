const displays = document.querySelectorAll('.note-display');
const transitionDuration = 900;

displays.forEach(display => {
    const progress = display.querySelector('.circle__progress--fill');
    const radius = progress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    progress.style.setProperty('--transitionDuration', `${transitionDuration}ms`);
    progress.style.setProperty('--initialStroke', circumference);

    setTimeout(() => progress.style.strokeDashoffset = 50, 100);
});