initial_value = [2, 2, 3, 0.5, 2, 1, 1, 1, 1]

function calculate(factor) {
    let value = +document.getElementById('multiplier').value;
    if (value < 0) {
        alert('Bitte mindestens eine Portion angeben.');
        value = factor;
    }
    for (let i = 1; i < 9; i++) {
        document.getElementById(`${i}`).innerHTML = Math.round(initial_value[i - 1] * (value) / factor * 100) / 100;
    }
}