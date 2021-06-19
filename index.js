/*
 * オブジェクト型はconst型でも変更できる
 */
const human = {
    name:"A太郎",
    age:29
};

alert(`${human.name}(${human.age})`);

human.name = "B太郎";
alert(`${human.name}(${human.age})`);

human.address = 'Tokyo';
alert(`${human.name}(${human.age} ) ${human.address}`);


