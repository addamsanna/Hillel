// Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1,
//  а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'.
let x = +prompt("Enter x value", "");
let y = +prompt("Enter y value", "");
if (x <= 1 && (y >= 3 || y < 0)) {
    alert(y + x);
} else if (x < -20 || x > 20) {
    alert("Неверно!");
} else if (y < -20 || y > 20) {
    alert("Неверно!");
} else {
    alert("Неверный ввод!")
};