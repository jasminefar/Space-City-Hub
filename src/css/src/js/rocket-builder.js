document.addEventListener('DOMContentLoaded', () => {
    const applyColorButton = document.getElementById('apply-color');
    const colorPicker = document.getElementById('color');

    applyColorButton.addEventListener('click', () => {
        const color = colorPicker.value;
        document.getElementById('rocket-body').style.backgroundColor = color;
        document.getElementById('rocket-fin').style.backgroundColor = color;
        document.getElementById('rocket-nose').style.backgroundColor = color;
    });
});
