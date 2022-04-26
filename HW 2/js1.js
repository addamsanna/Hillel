// В переменную x записывается число, введенное пользователем в диалоговое окно. 
// Проверить и вывести на экран, x – отрицательное число, положительное или ноль.

let x = +prompt("Еnter the number", "");
if (x === 0) {
    alert("It's zero");
} else if (x < 0) {
    alert("Is a negative number");
} else {
    alert("Is a positive number");
};

