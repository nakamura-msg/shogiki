var initTable = () =>{
    //table 内の td 要素をすべて取り出す。
    const list = document.querySelectorAll("td");
    //td にクリックイベントを付ける。
    for (const td of list){
        td.onclick = ()=> onclickTd(td);  // ()=> はアロー関数
    }
}

var onclickTd = (td) =>{
	//テーブルをクリックしたときの動作
	
}

window.onload = () => {
	// 実行したい処理を書く
	initTable();
}