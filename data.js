// import koma from "koma"
// var initTable = () => {
//     //table 内の td 要素をすべて取り出す。
//     const list = document.querySelectorAll("td");
//     //td にクリックイベントを付ける。
//     for (const td of list) {
//         td.onclick = () => onclickTd(td);  // ()=> はアロー関数
//     }
// }

// var onclickTd = (td) => {
//     //テーブルをクリックしたときの動作

// }

// window.onload = () => {
//     // 実行したい処理を書く
//     initTable();
// }

// function onClick(link) {
//     var tableId = $(link).attr('id') + $(link).attr('class');
//     alert(tableId);
// }



var pick = document.getElementById("pick");

document.addEventListener("click", function (e) {
    var sell = document.getElementById(e.target.id);

    // 駒ピックトグル
    if (pick.className !== "") {

        // 空白なら駒配置
        if (sell.className == "") {
            sell.className = pick.className;
            pick.className = "";
        } else {
            console.log("衝突")
        }
    } else {
        pick.className = sell.className;
        sell.className = "";
    }
});