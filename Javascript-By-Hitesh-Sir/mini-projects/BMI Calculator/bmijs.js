const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('result').style.display = "inherit"
    document.getElementById('result').style.display = "inherit"
    const height = parseFloat(document.querySelector('#height').value);
    console.log(height);
    const weight = parseFloat(document.querySelector('#weight').value);
    console.log(weight);
    const results = document.querySelector('#result');

    const BMI = weight / (height * height)

    if (isNaN(height) || height < 0 || height === "") {

        document.getElementById('result').style.color = "red"
        results.innerHTML = "Please enter a valid Height";
        console.log(results)
    }
    else if (isNaN(weight) || weight < 0 || weight === "") {

        document.getElementById('result').style.color = "red"
        results.innerHTML = "Please enter a valid weight";
        console.log(results)
    }

    console.log(BMI)

    if (BMI > 0 && BMI <= 18.6) {

        document.getElementById('result').style.color = "orange"
        results.innerHTML = `your bmi is ${BMI.toFixed(2)}`
    }
    else if (BMI > 18.6 && BMI <= 24.9) {

        document.getElementById('result').style.color = "green"
        results.innerHTML = `your bmi is ${BMI.toFixed(2)}`
    }
    else if (BMI > 24.9) {

        document.getElementById('result').style.color = "red"
        results.innerHTML = `your bmi is ${BMI.toFixed(2)}`
    }


});
