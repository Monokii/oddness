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

    block.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(moveBlock);
});
