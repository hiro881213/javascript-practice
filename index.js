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
const sayHello = (User='ゲスト') => console.log(`こんにちは${User}さん`);
sayHello();

/**
 * スプレット構文
 */
// 配列の展開
const arr1 = [1,2];
const sumFunk  = (num1,num2) => console.log(num1+num2);
sumFunk(...arr1);

// まとめる
const arr2 =[1,2,3,4,5];
const [num1,num2,...arr3] = arr2;

console.log(arr3);

// 配列のコピー、結合
const arr4 = [10,20];
const arr5 = [30,40];

const arr7 = [...arr4,...arr5];

console.log(arr7);

/**
 * mapとfilter
 */
const nameArr = ["A","B","C"];
const nameArr2 = nameArr.map((name) => {
    return name;
});

console.log(nameArr2);

nameArr2.map((name) => console.log(name));

// filter
const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => {
    return num % 2 ===1; // 出力条件を書く
});

console.log(newNumArr);

// 順番を取得する
nameArr2.map((name,index) => console.log(`${index+1}番目は${name}です。`));

/**
 * 三項演算子
 */

const val1 = 1 > 0 ? 'trueです': 'falseです';
console.log(val1);

const num = 'AAA';
// toLocaleString: カンマ区切りにしてくれる関数
const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';

console.log(formattedNum);

const checkSum = (num1,num2) => {
    return num1+num2 > 100 ? '100を超えています': '許容範囲内です';
}

alert(checkSum(10,20));
alert(checkSum(100,30));