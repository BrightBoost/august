window.onload = function() {
    const btn = document.getElementById("clickme");
    btn.onclick = onClickBtn;
}

function onClickBtn() {
    alert("Hey!");
}