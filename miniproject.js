let gameSeq = [];
let userSeq = [];

let btns = ["red", "orange", "green", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }

});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random()*3);
    let randomcolor = btns[random];
    let randbtn = document.querySelector(`.${randomcolor}`);
    console.log(randomcolor);
    console.log(randbtn);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    btnflash(randbtn);
     
};  

function checkans(idx){
    // console.log("curr level : ", level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            // console.log("same value");
            setTimeout(levelup, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score is <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    console.log(this);
    let btn = this;
    // btnflash(btn);
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    // console.log(usercolor);

    checkans(userSeq.length - 1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}