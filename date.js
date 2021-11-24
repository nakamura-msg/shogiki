function initTable(){
    //table 内の td 要素をすべて取り出す。
    const list = document.querySelectorAll("#TABLE1 td");
    //td にクリックイベントを付ける。
    for (const td of list){
        td.onclick = ()=> onclickTd(td);  // ()=> はアロー関数
    }
}

function onclickTd(td){
	println("this="+this);
	const column = td.cellIndex;
	const tr = td.parentNode;
	const row = tr.sectionRowIndex;
	const text = td.textContent;
	println("行row="+row+"\t列column="+column + "\t"+text);
	//クリックしたセルの色を青にする。
	td.style.background = "#66f";
}