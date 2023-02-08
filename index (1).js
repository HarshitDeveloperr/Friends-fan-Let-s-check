var readlinesync = require("readline-sync");
var score =0;
var userName = readlinesync.question("What's your name? ");

console.log("\nWelcome " + userName + "! Let's see how much you know Friends");

function play(question,answer){

  var userAnswer = readlinesync.question(question);

  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("\nRight!")
    score++;
  }else{
    console.log("\nWrong!");
  }
  console.log("Your score: "+score);
}

var questionOne={
  question : "Joey was never roommate with \n1.Rachel\n2.Phoebe\n3.Monica\n->",
  answer: "Phoebe"
}

var questionTwo={
  question : "Joey had how many sisters \n1)Six\n2)Five\n3)Seven\n->",
  answer: "Seven"
}

var questionThree={
  question: "Phoebe gave birth to how many children \n1)One\n2)Twins\n3)Triplets\n->",
  answer: "Triplets"
}

var questions = [questionOne,questionTwo,questionThree];

for(var i=0;i<questions.length;i++){
  console.log("\n");
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("\nYour final Score: "+score);


