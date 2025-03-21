const mario = document.querySelector('.ness');

const jump = () => {
    mario.classList.add('jump');
}

document.addEventListener('keydown', jump);