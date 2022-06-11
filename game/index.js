//x or o turn and function which can change x and o, game ended or not
//declare 
let player= "X";
let gameOver=false;
let c=0;

const changePlayer = () => {
    return player==="X"?"0":"X";
}

const checkWon = () => {
    let boxTexts= document.querySelectorAll(".boxText");
    let winPos= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
     winPos.forEach(ele => {
        if(boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText  && boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText && boxTexts[ele[0]].innerText !==""){
            document.getElementById("result").innerText = boxTexts[ele[0]].innerText + " won";
            gameOver=true;
            
            document.querySelector("img").style.width= "150px";

        }
     })
     if(c===9 && gameOver==false){
            gameOver=true;
            document.getElementById("result").innerText = "It's a draw!!!";
     }
};

let boxes = document.getElementsByClassName("box");
// convert this boxes to actual array
Array.from(boxes).forEach((box) => {
    let boxText = box.querySelector(".boxText");
    box.addEventListener("click", ()=>{
        if( boxText.innerText === "" && !gameOver){
            c+=1;
        boxText.innerText = player;
        player=changePlayer();
        checkWon();
        document.getElementsByClassName("player")[0].innerText = player;
    }
    })
})
//reset button

let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", ()=>{
    let boxTexts= document.querySelectorAll(".boxText");
    boxTexts.forEach((boxText) => {
        boxText.innerText="";
    })
    document.querySelector("img").style.width= "0";
    document.getElementById("result").innerText="";
    gameOver=false;
    player="X";
    document.getElementsByClassName("player")[0].innerText = player;
    c=0;
});
