// app.js
document.addEventListener('DOMContentLoaded', () => {
    const bulb = document.getElementById('bulb');
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        bulb.classList.toggle('on');
        body.classList.toggle('bright');

        if (bulb.classList.contains('on')) {
            toggleButton.textContent = 'Turn Off';
        } else {
            toggleButton.textContent = 'Turn On';
        }
    });
});
