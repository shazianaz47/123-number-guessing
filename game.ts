import inquirer from "inquirer";
//1) computer will genrate random number
//2) user input for guessing number
//3) compare user input with computer genrated to show result

let guess= Math.floor(Math.random()*6+1);


let guessNumber= await inquirer.prompt(
    
        {
            message:"Enter Your Number Between 1-6:",
            type:"number",
            name:"Yourguess",

        }

);
if(guessNumber.Yourguess===guess){
    console.log("Congratulation!!!! Your Guess is Right....................");
}else{
console.log("!!!oops!!! Your Guess is Wrong.");
}

