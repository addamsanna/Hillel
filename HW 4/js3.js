// Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), 
// каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции(методы) массивов:	
// 	•	Отфильтруйте пользователей младше 18 лет
// 	•	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// 	•	Сформируйте новый массив, который содержит только полное имя пользователей

let objectsArray = [
    { firstname: "An", lastname: "Loy", age: 30 },
    { firstname: "Dave", lastname: "Flat", age: 10 },
    { firstname: "Vera", lastname: "Smirnova", age: 20 },
    { firstname: "Ala", lastname: "Blabla", age: 12 },
    { firstname: "John", lastname: "Doy", age: 16 },
    { firstname: "Alex", lastname: "Black", age: 29 },
    { firstname: "Adam", lastname: "Idontknow", age: 19 },
    { firstname: "Aley", lastname: "Bla", age: 21 },
    { firstname: "Berry", lastname: "Cherry", age: 37 },
    { firstname: "Sam", lastname: "Smith", age: 35 }
];

let objectsAge = objectsArray.filter(user => user.age < 18);
console.log(objectsAge);

objectsArray.forEach(function (item) {
    item.fullName = item.firstname + " " + item.lastname;
});
console.log(objectsArray);

let fullName = objectsArray.map(item => item.firstname + " " + item.lastname);
console.log(fullName);