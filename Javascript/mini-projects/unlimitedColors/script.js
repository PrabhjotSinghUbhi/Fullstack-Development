const start = document.getElementById('start')
const end = document.getElementById('end')

let RandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        RandomHex = (Math.floor(Math.random() * 16)).toString(16)
        color += RandomHex;
    }
    return color;
}

console.log(RandomColor());

let changed;

const changeColor = () => {
    let cc = () => document.querySelector('body').style.background = RandomColor();
    changed = setInterval(cc, 1000)
}

const StopColor = function () {
    clearInterval(changed)
    changed = null;
}

start.addEventListener('click', changeColor)
end.addEventListener('click', StopColor)