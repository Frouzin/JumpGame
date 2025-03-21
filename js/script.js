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
    if(pipePosition <= 100){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

    }
},10);

document.addEventListener('keydown', jump);