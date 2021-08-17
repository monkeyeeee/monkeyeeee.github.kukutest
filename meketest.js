
//テスト紙面の作成（問題番号回数のループで作成した問を出題する。）
function allcheck(){
    for (let i = 0; i < document.getElementsByName("testrange").length; i++){
        document.getElementsByName("testrange")[i].checked = true
    }
}

//九九表を作成する
function make(){
    const arr1 = document.getElementsByName("testrange");
    const arr2 = [];
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i].checked){
            arr2.push(parseInt(arr1[i].value));
        }
    }
    const testrange = [];
    for (let i = 0; i<arr2.length; i++){
        for (let j = 1; j <= 9; j++){
            testrange.push([arr2[i],j,arr2[i] * j]);
        }
    }
    return testrange;
}
//0~MAX未満の整数をランダムで返す
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//テスト画面の作成
function kukuTest(){
    const testrange = make();
    var num = document.getElementById("testnum").value;
    var title = document.getElementById("title");
    var prob = document.getElementById("textMsg");
    //入力チェック
    if (Number.isNaN(Number(num))){
        alert("入力は数値にしてください")
        return 0;
    }
    if (testrange.length==0){
        alert("1つ以上のチェックが無いと問題が作成できません");
    } else if (num > testrange.length){
        alert("出題数は(チェックの数×９)問までです");
    } else {
    //表題部分を作成
        //https://freesozaixtrain.web.fc2.com/gif-catdog.html
        const txt = '<h2>  九九テスト&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp名前_______________________</h2>';
        title.innerHTML=txt;
    //問題部分を作成
        var len = testrange.length;
        var probs = "";
        for (let i = 0; i < num; i++){
            ran=getRandomInt(len);
            probs = probs + setFormat(i+1, testrange[ran][0], testrange[ran][1]);
            testrange.splice(ran,1);
            len=len-1;
        }
        prob.innerHTML=probs + "<img src='cat.png' class='cat'>";
    }
    function setFormat(n,i,j){
        return "&nbsp;&nbsp;&nbsp;<h3>      " + n + "  :  " + i + " × " + j + " =" + "____________" + "</3><br>";
    }
    

}