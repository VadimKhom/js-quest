/*Реализуйте функцию myReplace(s1,s2,s3)*/
const myReplace = (s, k, m) => s.split(k).join(m);
console.log(myReplace("Ехал Грека, через реку", "р", "л")); //"Ехал Глека, челез леку"