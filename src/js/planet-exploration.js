document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let spaceshipPosition = { top: 200, left: 200 };

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                spaceshipPosition.top -= 10;
                break;
            case 'ArrowDown':
                spaceshipPosition.top += 10;
                break;
            case 'ArrowLeft':
                spaceshipPosition.left -= 10;
                break;
            case 'ArrowRight':
                spaceshipPosition.left += 10;
                break;
        }
        updateSpaceshipPosition();
    });

    function updateSpaceshipPosition() {
        spaceship.style.top = spaceshipPosition.top + 'px';
        spaceship.style.left = spaceshipPosition.left + 'px';
    }
});
