const box = document.querySelectorAll('.box')
const body = document.querySelector('body')
box.forEach((boxes) => {
    boxes.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target)
        if (event.target.classList.contains('box1')) {
            body.style.backgroundColor = "grey"
        }
        if (event.target.classList.contains('box2')) {
            body.style.backgroundColor = "white"
        }
        if (event.target.classList.contains('box3')) {
            body.style.backgroundColor = "blue"
        }
        if (event.target.classList.contains('box4')) {
            body.style.backgroundColor = "yellow"
        }
    })
})