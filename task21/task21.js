/*Реализуйте функцию extractProps(arrObjects,prop)*/
const extractProps = (arrObjects, prop) => {
    let res = [];
    arrObjects.forEach(e => { prop in e ? res.push(e[prop]) : 0; });
    return res;
}
console.log(
    extractProps([
        { name: "Василий", age: 34 },
        { name: "Наталья", age: 27 },
        { name: "Джон", age: 19 }
    ], "name")
); //[ "Василий", "Наталья", "Джон" ]