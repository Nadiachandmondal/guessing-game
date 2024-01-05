const max = prompt("enter the max number:");
const random=Math.floor(Math.random() * max) + 1;
console.log(random);
let guess=prompt("guess the number");
while(true){
    if(guess=='quiet'){
    console.log("user quiet");
    break;
}
if(guess==random){
    console.log("wow your guess is correct");
    break;
}
else if(guess < random){
    guess=prompt("hint:your guess is too small , please try again")
}
else{
    guess = prompt("hint:your guess is  large , please try again");
}
}