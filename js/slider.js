

const img2 = document.querySelector('.img-2');


window.addEventListener('mousemove', e => {
    img2.style.left = e.clientX + 'px';
})