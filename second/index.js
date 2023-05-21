
function Square() {
    const number = document.getElementById('number').value;
    console.log(1, number);
    const square = number*number;
    console.log(2, square);
    let summ = document.getElementById('summ');
    summ.value = square;
    console.log(3, summ.value);
     
}
