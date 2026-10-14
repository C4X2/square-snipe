export function applyShakeAnimation(id: string): void {
    const elem = document.getElementById(id);
    if (!elem) { return; }

    let counter = 1;
    const numberOfShakes = 15;
    let magnitude = 16;
    const startX = 0;
    const startY = 0;
    const magnitudeUnit = magnitude / numberOfShakes;

    function innerShake() {
        if (!elem) return;
        if (counter < numberOfShakes) {
            elem.style.transform = `translate(${startX}px, ${startY}px)`;
            magnitude -= magnitudeUnit;
            const randomX = randomInt(-magnitude, magnitude);
            const randomY = randomInt(-magnitude, magnitude);
            elem.style.transform = `translate(${randomX}px, ${randomY}px)`;
            counter += 1;
            requestAnimationFrame(innerShake);
        } else {
            elem.style.transform = `translate(${startX}px, ${startY}px)`;
        }
    }

    requestAnimationFrame(innerShake);
}

export function defaultShake(id: string) {
    shake(id, 0, 10);
}

function shake(id: string, time: number, coefficient: number) {
    const elem = document.getElementById(id);
    if (elem === null || elem === undefined) { return }
    elem.style.transition = "0.1s";

    const intvNum: number = setInterval(function () {
        const randomInt1 = Math.floor((Math.random() * 3) + 1);
        const randomInt2 = Math.floor((Math.random() * 3) + 1);
        const randomInt3 = Math.floor((Math.random() * 2) + 1);

        const phase1 = (randomInt1 % 2) == 0 ? 1 : -1;
        const phase2 = (randomInt2 % 2) == 0 ? 1 : -1;
        const phase3 = (randomInt3 % 2) == 0 ? 1 : -1;


        const transitionX = ((phase1 * randomInt1) * (coefficient / 10)) + "px";
        const transitionY = ((phase2 * randomInt2) * (coefficient / 10)) + "px";
        const rotate = ((phase3 * randomInt3) * (coefficient / 10)) + "deg";

        elem.style.webkitTransform = "translate(" + transitionX + "," + transitionY + ")";
        elem.style.rotate = rotate;
        elem.dataset.shaking = "true";
    }, time);
    setTimeout(() => {
        clearInterval(intvNum);
        resetTransform(id);
    }, 2000);
    
}

function resetTransform(id: string) {
    const elem = document.getElementById(id);
    if (elem === null || elem === undefined) { return }
    elem.style.transition = "";
    elem.style.webkitTransform = "";
    elem.style.rotate = "";
    elem.dataset.shaking = "false";
}



function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}