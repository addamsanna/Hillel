// Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление.
//  Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you
let happyBirthday = '';
let namePerson = prompt("What is your name?", "");
for (i = 1; i <= 4; i++) {
    if (i == 3) happyBirthday += `Happy birthday, dear ${namePerson}\n`
    else happyBirthday += 'Happy birthday to you \n';
}
alert(happyBirthday);