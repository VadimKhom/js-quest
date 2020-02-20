/*Реализуйте функцию search(n)*/
const search = n => {
    let res = {},
        tmp,
        par = [5000, 2000, 1000, 200, 100];
    par.forEach(e => {
        tmp = n % e;
        if (n - tmp / e) res[`${e}`] = (n - tmp) / e;
        n = tmp;
    });
    return res;
};
console.log(search(12100)); //{ 100: 1, 200: 0, 1000: 0, 2000: 1, 5000: 2 }