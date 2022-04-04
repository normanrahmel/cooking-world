let initial_value = [1, 2, 500, 2, 200, 1, 1, 125]
// let currentSite;
// if ('http://127.0.0.1:5500/kochwelt/homepage.html' == window.location.href) {
//     currentSite = ;
// }
// if ('http://127.0.0.1:5500/kochwelt/recipetim.html' == window.location.href) {
//     currentSite = 'linktim';
// }
// function addHeaderStyling(){
//     console.log('Wird ausgeführt');
//     document.getElementById(currentSite).classList.add('links-styled');
// }


function calculate(factor) {
    let value = +document.getElementById('multiplier').value;
    if (value < 0) {
        alert('Bitte mindestens eine Portion angeben.');
        value = factor;
    }
    for (let i = 1; i < 9; i++) {
        document.getElementById(`${i}`).innerHTML = initial_value[i - 1] * (value) / factor;
    }
}

// function styleCurrentPage(currentSite) {
//     console.log('halklo');
//     setTimeout(() => {
//         document.getElementById(currentSite).classList.add('links-styled');
//     }, 100);
// }

// function removeOldStyle(id) {
//     document.getElementById(id).classList.remove('links-styled');
// }

// function changePage(id) {
//     removeOldStyle(currentSite);
//     currentSite = id;
//     styleCurrentPage(currentSite);
// }

// window.addEventListener('load', styleCurrentPage);