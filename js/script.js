const ness = document.querySelector('.ness');

const jump = () => {
    ness.classList.add('jump');

    setTimeout(() => {
    ness.classList.remove('jump');
    },500);
}

document.addEventListener('keydown', jump);