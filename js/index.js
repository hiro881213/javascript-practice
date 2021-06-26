//import "../css/styles.css"
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

    // buttonタグ(完了ボタン)を作成する
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    // 完了ボタンクリックイベント
    completeButton.addEventListener("click", () => {
        alert();
    });

    // buttonタグ(完了ボタン)を作成する
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    // 削除ボタンクリックイベント
    deleteButton.addEventListener("click", () => {
        alert();
    })

    // divタグの子要素に各要素を設定
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    div.appendChild(li);

    document.getElementById('incomplete-list').appendChild(div);
}



// 追加ボタンにクリックイベントを付与する
document.getElementById("add-button").addEventListener("click", () => onClickAdd());