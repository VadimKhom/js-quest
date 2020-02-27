/*Реализуйте функцию differenceTimes(d1,d2), которая возвращает строку в формате "hhh:mm:ss" соответствующую разнице между двумя датами в часах,минутах и секундах. Если количество минут или секунд задается не двузначным числом, нужно предварять их нулем.
Например, вызов*/
const differenceTimes = (d1, d2) => {
    let diff = (d2 - d1) / 1000,
        str = "",
        hours,
        minutes;
    hours = Math.floor(diff / 3600);
    str += hours;
    diff -= hours * 3600;

    minutes = Math.floor(diff / 60);
    if (minutes < 10) minutes = "0" + minutes;
    str += ":" + minutes;
    diff -= minutes * 60;

    if (diff < 10) diff = "0" + diff;
    str += ":" + diff;

    return str;
};
console.log(
    differenceTimes(
        new Date(2020, 9, 7, 10, 10, 20),
        new Date(2020, 9, 7, 12, 13, 24)
    )
);
console.log(
    differenceTimes(
        new Date(2020, 9, 7, 10, 10, 20),
        new Date(2020, 9, 10, 12, 13, 24)
    )
);