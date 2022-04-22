// Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите.
//  Получите второе число из окна prompt. Сравните и отобразите в модальном окне:
//   первое число меньше второго или нет, а также оба значения.
let randomNumber = Math.round(Math.random() * 100);
let promptSecondNumber = +prompt("White the number", "");
console.log(randomNumber);
console.log(randomNumber > promptSecondNumber);