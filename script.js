document.addEventListener('DOMContentLoaded', function() {
    const block = document.querySelector('.block');
    let direction = 1;

    function moveBlock() {
        const maxWidth = window.innerWidth - block.clientWidth;
        const maxHeight = window.innerHeight - block.clientHeight;
        let posX = Math.random() * maxWidth;
        let posY = Math.random() * maxHeight;

        block.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    setInterval(moveBlock, 2000);
});
