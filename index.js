/*
 * オブジェクト型はconst型でも変更できる
 */
const human = {
    name:"A太郎",
    age:29
};

console.log(`${human.name}(${human.age})`)

human.name = "B太郎";
console.log(`${human.name}(${human.age})`)

human.address = 'Tokyo';
console.log(`${human.name}(${human.age} ) ${human.address}`);

/**
 * 配列もconstでは変更できる
 */
const arr = ['dog','cat'];
alert(arr);

arr.push('monkey');
alert(arr);
