/*
Script for the troll.html document
Author: JMP
Date: July 10, 2019
Filename: script.js
*/

"use strict";

document.getElementById("button").addEventListener("click", trollBattle);

function trollBattle() {
    //Initial prompt question for the user stored in a variable
    var action = window.prompt("You're walking through a forest, minding your own business, and a troll appears! \nDo you FIGHT the troll? \nDo you BRIBE the troll? \nOr, RUN for your life?" ).toUpperCase();

    //Switch statement to handle the initial player choice

    switch(action) {
        case "FIGHT": 
            var strong = window.prompt("Wow, how brave! \nAre you strong? (YES or NO)").toUpperCase();
            var smart = window.prompt("Are you a cunning warrior? (YES or NO)").toUpperCase();

            //If statement that analyzes the user responses
            if(strong === "YES" || smart === "YES") {
                document.getElementById("result").innerHTML = "You can either be stronger or smarter than a troll to survive. <br /> <em> You live another day! </em>"; 
                document.getElementById("death").innerHTML = "";
            } else {
                document.getElementById("death").innerHTML = "You're not STRONG or SMART? <br /> Turns out you're just a punk! <br /> <em> You have died!</em>";
                document.getElementById("result").innerHTML = "";
            }
            break;

        case "BRIBE":
            var  money = window.prompt("You have to pay the TROLL TOLL! \nDo you have money? (YES or NO)").toUpperCase();

            //If statement that analyzes the user response
            if(money === "YES") {
                var dollars = window.prompt("How much money do you have? \n(Please enter a number value)");
                dollars = parseInt(dollars);
                if(dollars >= 50){
                    document.getElementById("result").innerHTML = "You are a wealthy traveler! <br /> You have paid the TROLL TOLL and <br /> <em> lived to tell about it! </em>";
                    document.getElementById("death").innerHTML = "";
                } else {
                    document.getElementById("death").innerHTML = "Sucks to be poor! The troll <em>eats your face as payment!</em>"
                    document.getElementById("result").innerHTML = "";
                }
            } else {
                document.getElementById("death").innerHTML = "What were you going to bribe with? <em> Your looks?</em> <br /> The troll is not impressed and eats your face for wasting his time!";
                document.getElementById("result").innerHTML = "";
            }
            break;
        
        case "RUN": 
            var speed = window.prompt("Are you fast? (YES or NO)").toUpperCase();
            if(speed === "YES") {
                document.getElementById("result").innerHTML = "Your speed has allowed you to survive! <br /> <em>But can you live with your cowardice?</em>";
                document.getElementById("death").innerHTML = "";
            } else {
                document.getElementById("death").innerHTML = "You coward! If you choose to run, at least be faster than the troll! <br /> <em>You have died!</em>";
                document.getElementById("result").innerHTML = "";
            }
            break;
        
        default: 
            window.alert("You need to select FIGHT, BRIBE, or RUN to attempt to escape the troll!");
            trollBattle();
            } //End of switch statement

}

