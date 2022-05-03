// Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
// прочитанными из prompt (например: brand, model, resolution, color...), не используя
//  вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

let phone = {

};

phone.brand = prompt("What is your phone brand?", "");
phone.model = prompt("What is your phone model?", "");
phone.resolution = prompt("What is your phone resolution?", "");
phone.color = prompt("What is your phone color?", "");

console.log(JSON.stringify(phone));