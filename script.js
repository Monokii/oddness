document.addEventListener('DOMContentLoaded', () => {
    const block = document.querySelector('.block');

    function animateBlock() {
        block.style.opacity = '1';
        block.style.transform = 'scale(1)';
        block.style.transition = 'none'; // 이전 트랜지션 효과를 초기화

        setTimeout(() => {
            block.style.transition = 'transform 7s cubic-bezier(0.16, 0.69, 0.52, 0.83), opacity 7s ease-in-out';
            block.classList.add('boom');
        }, 100);

        setTimeout(() => {
            block.classList.remove('boom');
        }, 7100);

        setTimeout(animateBlock, 14000); // 반복을 위해 14초 후에 다시 실행
    }

    animateBlock();
});
