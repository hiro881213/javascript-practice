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
console.log(arr);

arr.push('monkey');
console.log(arr);

/**
 * アロー関数
 */

const func1 = (str) => {
    return str;
}

console.log(func1("TEST"));

// アロー関数省略系
const func2 = str => str;
console.log(func2("TEST2"));

const func3 = (num1,num2) => num1+num2;
alert(func3(3,2));