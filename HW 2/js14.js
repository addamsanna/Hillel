// В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона,
//  введенного пользователем. Результат отобразите в окне alert.
let enterTheNumber = +prompt("Enter the number", "");
let sum = 0;
for (let i = 0; i <= enterTheNumber; i++) {
    if (i % 2 == 1) {
        sum += i;
    }
}
alert(sum);