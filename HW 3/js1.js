// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
//  Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
let mixedArray = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sumNumbers = 0;
for (let i = 0; i < mixedArray.length; i++) {
  let element = +mixedArray[i];
  if (!isNaN(element)) {
    sumNumbers = sumNumbers + element;
  }
}
alert(sumNumbers);


