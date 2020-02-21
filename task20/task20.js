/*Реализуйте функцию getWordStat(str)*/
const getWordStat = str => {
    let res = {};
    str.split(/[,. :!?]/g).forEach(e => {
        if (!e) return;
        if (!(e in res)) res[e] = 0;
        res[e]++;
    });
    return res;
};
console.log(getWordStat('Ехал Грека,через реку реку реку'));// { Ехал: 1, Грека: 1, через: 1, реку: 3 }