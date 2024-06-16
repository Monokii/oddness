document.addEventListener('DOMContentLoaded', function() {
    const block = document.querySelector('.block');
    let posX = Math.random() * (window.innerWidth - block.clientWidth);
    let posY = Math.random() * (window.innerHeight - block.clientHeight);
    let velocityX = 2;
    let velocityY = 2;

    function moveBlock() {
        posX += velocityX;
        posY += velocityY;

        if (posX <= 0 || posX >= window.innerWidth - block.clientWidth) {
            velocityX = -velocityX;
        }
        if (posY <= 0 || posY >= window.innerHeight - block.clientHeight) {
            velocityY = -velocityY;
        }

        block.style.transform = `translate(${posX}px, ${posY}px)`;
        requestAnimationFrame(moveBlock);
    }

    window.addEventListener('resize', () => {
        if (posX > window.innerWidth - block.clientWidth) {
            posX = window.innerWidth - block.clientWidth;
        }
        if (posY > window.innerHeight - block.clientHeight) {
            posY = window.innerHeight - block.clientHeight;
        }
    });

    block.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(moveBlock);
});
