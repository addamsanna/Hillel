// Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4... 
for (let i = 1; i < 10; i++) {
    for (let k = 1; k < 10; k++) {
        console.log(`${i}*${k}=${i * k}`);
    }
}
