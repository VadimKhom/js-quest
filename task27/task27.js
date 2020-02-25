/*Реализуйте функцию days(), которая возвращает количество дней (полных суток) оставшихся до грядущего Нового года*/
const days = () => {
    let curr = new Date(),
        next = new Date(curr.getFullYear() + 1, 0),
        diff = next - curr;
    diff /= 1000 * 60 * 60 * 24;
    return Math.floor(diff);
};
console.log(new Date()); //дата в данный момент
console.log(days()); // осталось дней до НГ :)