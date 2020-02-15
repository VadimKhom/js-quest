/*Реализуйте функцию getPhraseByNum(n)*/
const genitive = (n, word) => {
    let res = word.many2;
    if (n % 100 < 5 || n % 100 > 20) {
        if (n % 10 == 1) res = word.singular;
        if (n % 10 > 1 && n % 10 < 5) res = word.many1;
    }
    return `${res}`;
}
const getPhraseByNum = (n) => {
    let res = "";
    if (n > 999) {
        let t = +n.toString()[0];
        switch (t) {
            case 1:
                res += "одна ";
                break;
            case 2:
                res += "две ";
                break;
            case 3:
                res += "три ";
                break;
            case 4:
                res += "четыре ";
                break;
            case 5:
                res += "пять ";
                break;
            case 6:
                res += "шесть ";
                break;
            case 7:
                res += "семь ";
                break;
            case 8:
                res += "восемь ";
                break;
            case 9:
                res += "девять ";
                break;
        }
        res += genitive(t, {
            singular: "тысяча ",
            many1: "тысячи ",
            many2: "тысяч "
        }) + '';
    }
    if (n % 1000 > 99) {
        let t = +n.toString().slice(-3, -2);
        switch (t) {
            case 1:
                res += "сто ";
                break;
            case 2:
                res += "двести";
                break;
            case 3:
                res += "триста ";
                break;
            case 4:
                res += "четыреста ";
                break;
            case 5:
                res += "пятьсот ";
                break;
            case 6:
                res += "шестьсот ";
                break;
            case 7:
                res += "семьсот ";
                break;
            case 8:
                res += "восемьсот ";
                break;
            case 9:
                res += "девятьсот ";
                break;
        }
    }
    if (n % 100 > 19) {
        let t = +n.toString().slice(-2, -1);
        switch (t) {
            case 2:
                res += "двадцать ";
                break;
            case 3:
                res += "тридцать ";
                break;
            case 4:
                res += "сорок ";
                break;
            case 5:
                res += "пятьдесят ";
                break;
            case 6:
                res += "шестьдесят ";
                break;
            case 7:
                res += "семьдесят ";
                break;
            case 8:
                res += "восемьдесят ";
                break;
            case 9:
                res += "девяносто ";
                break;
        }
    }
    if (n % 100 > 9 && n % 100 < 20) {
        let t = +n.toString().slice(-2);
        switch (t) {
            case 10:
                res += "десять ";
                break;
            case 11:
                res += "одинадцать ";
                break;
            case 12:
                res += "двенадцать ";
                break;
            case 13:
                res += "тринадцать ";
                break;
            case 14:
                res += "четырнадцать ";
                break;
            case 15:
                res += "пятнадцать ";
                break;
            case 16:
                res += "шестнадцать ";
                break;
            case 17:
                res += "семьнадцать ";
                break;
            case 18:
                res += "восемьнадцать ";
                break;
            case 19:
                res += "девятнадцать ";
                break;
        }
    } else
        switch (n % 10) {
            case 1:
                res += "один ";
                break;
            case 2:
                res += "два ";
                break;
            case 3:
                res += "три ";
                break;
            case 4:
                res += "четыре ";
                break;
            case 5:
                res += "пять ";
                break;
            case 6:
                res += "шесть ";
                break;
            case 7:
                res += "семь ";
                break;
            case 8:
                res += "восемь ";
                break;
            case 9:
                res += "девять ";
                break;
        }
    if (!n) res = "ноль";
    return res.slice(0, -1);
}
console.log(getPhraseByNum(2310)); // "две тысячи триста десять"