inital_value = [1, 2, 500, 2, 200, 1, 1, 125]
function calculate(){
    for(let i = 1; i < 9; i++){
        document.getElementById(`${i}`).innerHTML = inital_value[i-1]*(+document.getElementById('multiplier').value)/4;
    }
}