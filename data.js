var ban = [
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,]
];
var initTable = () => {
    b_count = 0;                            //2次元配列盤のためのカウント
    //table 内の td 要素をすべて取り出す。
    const list = document.querySelectorAll("td");
    //td にクリックイベントを付ける。
    for (const td of list) {
        td.onclick = () => onclickTd(td);  // ()=> はアロー関数
        ban[Math.floor(b_count/9][b_count%9] = classid(getclass(td));               //tdのクラスをとってくる
        b_count++;
    }
}

var getclass = (e_koma) => {        //e_komaの部分にelementを入れる
    var g_koma = e_koma.className;  //e_komaのクラス名の取得
    return g_koma;                  //g_komaにはクラス名が入っているので戻り値にはクラス名が入る
}

var classid = (g_class) => {       //g_classにはclass名が入る
    switch(g_class){
        case "":
            return 0;
            break;
        case "enemy kyousha":
            return 1;
            break;
        case "enemy keima":
            return 2;
            break;
        case "enemy gin":
            return 3;
            break;
        case "enemy kin":
            return 4;
            break;
        case "enemy ousyou":
            return 5;
            break;
        case "enemy hisya":
            return 6;
            break;
        case "enemy kaku":
            return 7;
            break;
        case "enemy huhyou":
            return 8;
            break;
        case "huhyou":
            return 9;
            break;
        case "kaku":
            return 10;
            break;
        case "hisya":
            return 11;
            break;
        case "kyousha":
            return 12;
            break;
        case "keima":
            return 13;
            break;
        case "gin":
            return 14;
            break;
        case "kin":
            return 15;
            break;
        case "gyokusyo":
            return 16;
            break;
    }
}

var onclickTd = (td) => {
    //テーブルをクリックしたときの動作

}

window.onload = () => {
    // 実行したい処理を書く
    initTable();
}