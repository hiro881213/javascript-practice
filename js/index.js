//import "../css/styles.css"
// 追加ボタンクリック処理
const onClickAdd = () => {

    // テキストボックスの値を取得する
    const inputText = document.getElementById('add-text').value;

    // テキストボックスの値を初期化する
    document.getElementById('add-text').value = '';

    // 未完了リストに追加する
    createIncompleteList(inputText);

}

// 追加ボタンにクリックイベントを付与する
document.getElementById("add-button").addEventListener("click", () => onClickAdd());

/**
 * 
 * 未完了リスト生成処理
 * 
 * @param {*} text 
 */
const createIncompleteList = (text) => {

    // div生成
    const div = document.createElement("div");

    // クラス名を付与する
    div.className = "list-row";

    // liタグ生成
    const li = document.createElement("li");
    
    // buttonタグ(完了ボタン)を作成する
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    // 完了ボタンクリックイベント
    completeButton.addEventListener("click", () => {
        
        // 完了対象の親ノードを取得する
        deleteElement('incomplete-list',completeButton.parentNode.parentNode);

        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        // テキストを取得する
        const text = addTarget.firstElementChild.innerHTML;

        // DIVのみにする
        addTarget.textContent = null;

        // liタグを生成する
        const li = document.createElement("li");

        // labelタグを生成する
        const label = document.createElement("label");
        label.innerText = text;

        // 戻すボタンを生成する
        const backButton = document.createElement("button");

        // 戻すボタンクリック処理
        backButton.addEventListener("click", () => {

            // 削除対象のTODOを削除する
            deleteElement('complete-list',backButton.parentNode.parentNode);

            // 戻す対象のTODO取得する
            const text = backButton.parentNode.firstChild.innerText;
        
            // 未完了リストに追加する
            createIncompleteList(text);
        
        });

        backButton.innerText = '戻す';

        // TODO内容をセットする
        addTarget.appendChild(label);

        // 戻すボタンをセットする
        addTarget.appendChild(backButton);

        // li要素配下にdivをセットする
        li.appendChild(addTarget);

        document.getElementById('complete-list').appendChild(li);

    });

    // buttonタグ(完了ボタン)を作成する
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    // --------------------------------------------------
    // 削除ボタンクリックイベント
    // --------------------------------------------------

    deleteButton.addEventListener("click", () => {

        // 削除対象の親ノードを取得する
        deleteElement('incomplete-list',deleteButton.parentNode.parentNode);
   
    });
    // labelタグ生成
    const label = document.createElement("label");
    
    // divタグにテキストを挿入する
    label.innerText = text;

    // divタグの子要素に各要素を設定

    // Labelタグをセット
    div.appendChild(label);
    
    // 完了ボタンをセット
    div.appendChild(completeButton);
    
    // 削除ボタンをセット
    div.appendChild(deleteButton);

    // liの子要素にDIVをセット
    li.appendChild(div);
    
    // liをDOMに配置する
    document.getElementById('incomplete-list').appendChild(li);


}

/**
 * 
 * 対象の項目を削除する
 * 
 * @param {} target 対象要素
 * 
 */
const deleteElement = (targetID,targetElement) => {
    // 指定の要素を削除する
    document.getElementById(targetID).removeChild(targetElement);
}