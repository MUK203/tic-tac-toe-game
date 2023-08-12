var moves=0;
function check()
{
     const winning_Combination =[
        [document.getElementById("bt1"), document.getElementById("bt2"), document.getElementById("bt3")],
        [document.getElementById("bt4"), document.getElementById("bt5"), document.getElementById("bt6")],
        [document.getElementById("bt7"), document.getElementById("bt8"), document.getElementById("bt9")],
        [document.getElementById("bt1"), document.getElementById("bt4"), document.getElementById("bt7")],
        [document.getElementById("bt2"), document.getElementById("bt5"), document.getElementById("bt8")],
        [document.getElementById("bt3"), document.getElementById("bt6"), document.getElementById("bt9")],
        [document.getElementById("bt1"), document.getElementById("bt5"), document.getElementById("bt9")],
        [document.getElementById("bt3"), document.getElementById("bt5"), document.getElementById("bt7")],
    ]

    for (var comb of winning_Combination) {
        if (comb[0].textContent === comb[1].textContent && comb[1].textContent === comb[2].textContent && comb[0].textContent !== "") {
            
            for(var button of comb)
            {
                button.style.backgroundColor= "cyan";
            }
            return comb[0].textContent; // Returns the winning player's symbol ('X' or 'O')
        }
        
    }

    return null; // No winner found
}

var user="user1";
var winner =null;
function btn_click(button){
    if (button.textContent === "X" || button.textContent === "O") {
        // Button already has a character, do nothing
        return;
    }

    var clickSound = new Audio('pop.wav');
    clickSound.play();


    // var winner=check();
    if(winner)
    {
       clickSound.pause();
       clickSound.currentTime =0;
       
       // document.getElementById("win").innerHTML="winner is:" + winner
        return;
    }

     else if (user==="user1")
    {
        button.innerHTML="X";
        user = "user2";
    }
    else if(user==="user2")
    {
        button.innerHTML="O";
        user="user1";
    }
    moves +=1
     button.setAttribute("data-clicked", "true");
    checkDisplaWinner()
    
}


function checkDisplaWinner()
{
    winner =check()
    if(winner)
    {
        document.getElementById("win").innerHTML="winner is:" + winner
        var winSound = new Audio('win.wav')
       winSound.play();
       
    }
    else if(moves==9)
    {
        document.getElementById("win").innerHTML="It's a Tie"
        var tieSound = new Audio('tie.m4a')
        tieSound.play();
    }

    if(winner==="X")
    {
        var currentValueX = parseInt(document.getElementById("forX").value)
        var newValueX =currentValueX+1
        document.getElementById("forX").value = (newValueX);
        applyPopAnimation(document.getElementById("forX"));
    }
    else if(winner==="O")
    {
        var currentValueO = parseInt(document.getElementById("forO").value)
        var newValueO =currentValueO+1
        document.getElementById("forO").value = (newValueO);
        applyPopAnimation(document.getElementById("forO"));

      
    }
}




function replay(){
    const btns =[
        [document.getElementById("bt1"), document.getElementById("bt2"), document.getElementById("bt3")],
        [document.getElementById("bt4"), document.getElementById("bt5"), document.getElementById("bt6")],
        [document.getElementById("bt7"), document.getElementById("bt8"), document.getElementById("bt9")],
        [document.getElementById("bt1"), document.getElementById("bt4"), document.getElementById("bt7")],
        [document.getElementById("bt2"), document.getElementById("bt5"), document.getElementById("bt8")],
        [document.getElementById("bt3"), document.getElementById("bt6"), document.getElementById("bt9")],
        [document.getElementById("bt1"), document.getElementById("bt5"), document.getElementById("bt9")],
        [document.getElementById("bt3"), document.getElementById("bt5"), document.getElementById("bt7")],
    ]
    for (var i = 0; i < btns.length; i++) {
        for (var j = 0; j < btns[i].length; j++) {
            btns[i][j].textContent = "";
            btns[i][j].removeAttribute("data-clicked"); // Enable the button
            btns[i][j].style.backgroundColor=""
        }
    }

    document.getElementById("win").textContent = "";
    winner=null;
    user="user1";
    moves=0;

    var replaySound= new Audio('replay.mp3')
    replaySound.play();
}

function applyPopAnimation(element) {
    element.classList.add("pop");

    setTimeout(function() {
        element.classList.remove("pop");
    }, 200); // Adjust the delay (milliseconds) as needed
}

function clrScore(){
    const btns =[
        [document.getElementById("bt1"), document.getElementById("bt2"), document.getElementById("bt3")],
        [document.getElementById("bt4"), document.getElementById("bt5"), document.getElementById("bt6")],
        [document.getElementById("bt7"), document.getElementById("bt8"), document.getElementById("bt9")],
        [document.getElementById("bt1"), document.getElementById("bt4"), document.getElementById("bt7")],
        [document.getElementById("bt2"), document.getElementById("bt5"), document.getElementById("bt8")],
        [document.getElementById("bt3"), document.getElementById("bt6"), document.getElementById("bt9")],
        [document.getElementById("bt1"), document.getElementById("bt5"), document.getElementById("bt9")],
        [document.getElementById("bt3"), document.getElementById("bt5"), document.getElementById("bt7")],
    ]
    for (var i = 0; i < btns.length; i++) {
        for (var j = 0; j < btns[i].length; j++) {
            btns[i][j].textContent = "";
            btns[i][j].removeAttribute("data-clicked"); // Enable the button
            btns[i][j].style.backgroundColor=""
        }
    }

    document.getElementById("win").textContent = "";
    winner=null;
    user="user1";
    moves=0;
    document.getElementById("forX").value=0
    document.getElementById("forO").value=0
    applyPopAnimation(document.getElementById("forX"));
    applyPopAnimation(document.getElementById("forO"));
    
    var newPlayer=new Audio("newPlayer.wav");
    newPlayer.play();

}
