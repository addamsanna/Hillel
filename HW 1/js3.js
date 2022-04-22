// Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. 
// Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно
//  отобразите в модальном окне.
const x = +prompt("What`s your first number?", "");
const y = +prompt("What`s your second nunber?", "");
if (isNaN(x) || isNaN(y)) {
    alert("It isn`t number (((")
} else {
    alert(x + y);
    alert(x - y);
    alert(x * y);
    if (y === 0) {
        alert("learn mathematics")
    } else {
        alert(x / y);
    }
};