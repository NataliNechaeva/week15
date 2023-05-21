const items1 = document.querySelector('#price1');
const price1 = +items1.textContent;
console.log(price1);
const items2 = document.querySelector('#price2');
const price2 = +items2.textContent;
const items3 = document.querySelector('#price3');
const price3 = +items3.textContent;
const items4 = document.querySelector('#price4');
const price4 = +items4.textContent;
const summ = price1+price2+price3+price4;
console.log(summ);
document.getElementById('totalsum').innerHTML = `Итого заказ составляет ${summ} руб.`;
function Sale () {
 const sale = summ * 0.8;
 document.getElementById('sum20').innerHTML = `Итого заказ c учетом скидки составляет ${sale} руб.`;
}