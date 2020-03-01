/* Напишите функцию daysAgo(dataObject),которая принимает объект Date и возвращает словесное описание произошедшего события - "N дн. назад". */
const genitive = (n, word) => {
    let res = word.many2;
    if (n % 100 < 5 || n % 100 > 20) {
        if (n % 10 == 1) res = word.singular;
        if (n % 10 > 1 && n % 10 < 5) res = word.many1;
    }
    return `${n} ${res}`;
};
const daysAgo = dataObject => {
    let diff = Math.round((dataObject - new Date()) / (1000 * 3600 * 24));
    return (
        genitive(diff, {
            singular: "день",
            many1: "дня",
            many2: "дней"
        }) + " назад"
    );
};
console.log(daysAgo(new Date(new Date().getTime() + 1000 * 3600 * 24 + 1000))); // 1day
console.log(
    daysAgo(new Date(new Date().getTime() + 1000 * 3600 * 24 * 20 + 1000))
); // 20 days