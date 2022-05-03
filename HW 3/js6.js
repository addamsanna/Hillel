// Создайте пустой массив. В цикле до n на каждой итерации запускайте 
// prompt для ввода любых символов, полученное значение добавляйте в конец
//  созданного массива. После выхода из цикла посчитайте сумму всех чисел
//   массива и выведите в alert полученный результат.
let allSymbol = [];
let sumNumb = 0;
for (let i = 0; i < 7; i++) {
    let anyNumnber = +prompt(" Enter any number", "");
    allSymbol.push(anyNumnber);
}

for (let i = 0; i < allSymbol.length; i++) {
    let result = +allSymbol[i];
    if (!isNaN(result)) {
        sumNumb = sumNumb + result;
    }
}
alert(sumNumb);