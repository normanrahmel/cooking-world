inital_value = [150, 6, 1, 200, 250, 50]

function calculate(factor) {
    let value = +document.getElementById('multiplier').value;
    if (value < 0) {
        alert('Bitte mindestens eine Portion angeben.');
        value = factor;
    }
    for (let i = 1; i < 9; i++) {
        document.getElementById(`${i}`).innerHTML = inital_value[i - 1] * (value) / factor;
    }
}