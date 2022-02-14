function insert(num) {
    document.getElementById('screen').value = document.getElementById('screen').value + num;
}

function equal() {
    let exp = document.getElementById('screen').value;
    if (exp) {
        document.getElementById('screen').value = eval(exp);
    }
}

function clean() {
    document.getElementById('screen').value = '';
}

function back() {
    exp = document.getElementById('screen').value;
    document.getElementById('screen').value = exp.substring(0, exp.length - 1); 
}