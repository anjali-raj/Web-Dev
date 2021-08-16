    var num1 = Math.random();
    var num2 = Math.random();

    var state1 = Math.floor(num1 * 6)+1;
    var state2 = Math.floor(num2 * 6)+1;

    var randomImg1 = "dice"+state1+".png";
    var randomImg2 = "dice"+state2+".png";

    //document.querySelector(".img1").setAttribute("src",randomImg1);
    //document.querySelector(".img2").setAttribute("src",randomImg2);

    document.querySelector(".img1").setAttribute("src",
                "dice" + state1 + ".png");
    document.querySelector(".img2").setAttribute("src",
                "dice" + state2 + ".png");
    
    if(state1>state2){
        document.querySelector("h1").textContent="🚩Player 1 Wins!";
    }
    else if(state1<state2){;
        document.querySelector("h1").textContent="Player 2 Wins!🚩";
    }
    else{
        document.querySelector("h1").textContent="Draw!";
    }
