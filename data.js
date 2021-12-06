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