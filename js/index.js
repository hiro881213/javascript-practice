
// 追加ボタンクリック処理
const onClickAdd = () => {

    // テキストボックスの値を取得する
    const inputText = document.getElementById('add-text').value;

    // テキストボックスの値を初期化する
    document.getElementById('add-text').value = '';

    // div生成
    const div = document.createElement("div");

    // クラス名を付与する
    div.className = "list-row";

    // liタグ生成
    const li = document.createElement("li");
    
    // liタグにテキストを挿入する
    li.innerText = inputText;

    // divタグの子要素に各要素を設定
    div.appendChild(li);

    document.getElementById('incomplete-list').appendChild(div);
}



// 追加ボタンにクリックイベントを付与する
document.getElementById("add-button").addEventListener("click", () => onClickAdd());