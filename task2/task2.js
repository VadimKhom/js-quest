/*Реализуйте функцию autoReplace*/
function autoReplace(needles,change,haystack){
    if(!needles||!change||!haystack) return false;
    return haystack.replace(new RegExp(needles.join("|"),"gi"),change);
}

let arr=['салат', 'помидоры'], str = 'свежие помидоры пошли в салат';
console.log(autoReplace(arr,'еда', str)); //'свежие еда пошли в еда'