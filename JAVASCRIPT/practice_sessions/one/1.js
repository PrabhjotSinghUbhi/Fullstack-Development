
const allInputs = document.querySelectorAll('input')
const submit_btn = this.document.querySelector('div')

submit_btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (allInputs[0].checked) {
        console.log(`you are subscribed`);
    } else {
        console.log('you are not subscribed');
    }
    let i = 1;
    allInputs.forEach(element => {
        if (element[i].checked) {
            console.log(`${element[i].outerHTML} is checked`)
        }
        i = i + 1;
    });
})



