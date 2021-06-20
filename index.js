// /*
//  * オブジェクト型はconst型でも変更できる
//  */
// const human = {
//     name:"A太郎",
//     age:29
// };

// console.log(`${human.name}(${human.age})`)

// human.name = "B太郎";
// console.log(`${human.name}(${human.age})`)

// human.address = 'Tokyo';
// console.log(`${human.name}(${human.age} ) ${human.address}`);

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
console.log(func3(3,2));

/**
 * 分割代入
 */
const myProfile ={
    name:'Hiro',
    age:32
};

const {name, age} = myProfile;
console.log(`私の名前は${name}です。${age}歳です`);

// 配列の分割代入
const arrMyProfile = ['Sam',23];
const [user, ages] = arrMyProfile;

console.log(`私の名前は${user}です。${ages}歳です`);

/**
 * デフォルト値
 */
const sayHello = (User='ゲスト') => alert(`こんにちは${User}さん`);
sayHello();