// Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.
const isItNumber = +prompt("Write the number, please", "");
if (isNaN(isItNumber)) {
    console.log("It isn`t number")
} else {
    console.log("100 points to Gryffindor")
};