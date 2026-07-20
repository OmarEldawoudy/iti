var PlayerOneChoice = prompt("enter your choice");
var PlayerTwoChoice = prompt("enter your choice");

if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper")
{
    console.log("The Player Who Chose Paper Win.");
}

else if( PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors")
{
    console.log("The Player Who Chose Rock Win.");
}

else {
    console.log("it is a tie.");
}

