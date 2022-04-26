// Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать 
// три значения: ‘ua’, 'en', 'de' (например, из prompt). Если она имеет значение ‘ua’, то в переменную greeting 
// запишите приветствие на украинском, если имеет значение 'en' – то на английском, если 'de' – на немецком.
// Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и 
// через switch-case.
let greeting = "";
let lang = prompt("Choose language", "ua/en/de");
switch (lang) {
    case "ua":
        greeting = "Доброго вечора, ми з України ";
        alert(greeting);
        break;
    case "en":
        greeting = "Hello";
        alert(greeting);
        break;
    case "de":
        greeting = "Guten Tag";
        alert(greeting);
        break;
    default:
        alert("You have not selected a language")
        };
        
        //через if
        let greeting = "";
        let lang = prompt("Choose language", "ua/en/de");
        if (lang === "ua") {
            greeting = "Доброго вечора, ми з України ";
            alert(greeting);
        } else if (lang === "en") {
            greeting = "Hello";
            alert(greeting);
        } else if (lang === "de") {
            greeting = "Guten Tag";
            alert(greeting);
        } else {
            alert("You have not selected a language")
        };