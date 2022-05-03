// Используя вложенные циклы, сформируйте двумерный массив, 
// содержащий таблицу умножения - (задача со звездочкой)
let multiply = [];
for (let i = 1; i < 11; i++) {
    let numbers = [];
    for (let k = 1; k < 11; k++) {
        numbers.push(i * k);
    }
    multiply.push(numbers);
}
console.log(JSON.stringify(multiply));