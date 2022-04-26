// С помощью цикла for с пустым телом сформируйте строку,
//  представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...  - (выполнять по желанию)
let string_fibo = '';
const finale = 13;

for (let i = 0, j = 1; i <= finale; string_fibo += i + ' ', [i, j] = [j, i + j]);

console.log(string_fibo);