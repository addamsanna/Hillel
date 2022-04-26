// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена.
//  После выхода из цикла распечатайте количество введенных чисел, их общую сумму.

let numIterations = 0;
let sum = 0;
while (true) {
    let enterNum = confirm("Do you want enter the number")
    if (enterNum === true) {
        let currentNumber = +prompt("Enter the number", "");
        numIterations++;
        sum += currentNumber;
    } else {
        alert(`Amount of numbers ${numIterations}, Sum of numbers ${sum}`)
        break;
    }
};