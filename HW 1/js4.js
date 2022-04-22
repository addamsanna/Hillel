// Напишите в переменных формулу для расчета з/п за июль с учетом,
//  что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные 
//  значения и читаются из prompt.(Просчитывать какой это месяц, 30 или 31 день не нужно).
const workDays = +prompt("How many working days did you have in July?", ""); //я поставила количество рабочих дней в месяц 
const workHours = +prompt("How many working hours did you have in July?", "");
const howMuchOneHour = +prompt("How much is your working hour?", "");
console.log(workDays * workHours * howMuchOneHour);