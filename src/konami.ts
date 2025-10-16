const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let currentIndex = 0;
addEventListener('keydown', (event: KeyboardEvent) => {
    const key = event.key;

    if (key === konamiCode[currentIndex]) {
        currentIndex++;

        if (currentIndex === konamiCode.length) {
            currentIndex = 0;
            dispatchEvent(new CustomEvent('konami-code'))
        }
    } else {
        currentIndex = 0;
    }
});