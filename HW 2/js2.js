// Создайте три переменные с любыми числовыми значениями. Используя условный оператор 
//  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение.
let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;
if (firstNumber < secondNumber) {
    if (firstNumber < thirdNumber) {
        console.log(firstNumber)
    } else {
        console.log(thirdNumber)
    }
} else {
    if (secondNumber < thirdNumber) {
        console.log(secondNumber)
    } else {
        console.log(thirdNumber)
    }
};