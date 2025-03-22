const ness = document.querySelector('.ness');
const pipe = document.querySelector('.pipe');

const jump = () => {
    ness.classList.add('jump');

    setTimeout(() => {
    ness.classList.remove('jump');
    },500);
}
const loop = setInterval(()=> {

    const nessPosition = +window.getComputedStyle(ness).bottom.replace('px', '');
    const pipePosition = pipe.offsetLeft;

    if(pipePosition <= 100 && pipePosition > 0 && nessPosition <80 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        ness.style.animation = 'none';
        ness.style.bottom = `${nessPosition}px`;

        ness.src = './images/ness-earthbound.gif';
        ness.style.width = '90px';
        ness.style.marginLeft = '10px';

        clearInterval(loop);

    }
},10);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        jump();
    }
});