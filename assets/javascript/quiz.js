// Initialize Firebase
var config = {
apiKey: "AIzaSyAvkwtQiKH25Mb6e9nlVmK1ZQbZ5bB96k4",
authDomain: "project1-6bbd9.firebaseapp.com",
databaseURL: "https://project1-6bbd9.firebaseio.com",
projectId: "project1-6bbd9",
storageBucket: "",
messagingSenderId: "977571791361"
};
firebase.initializeApp(config);
var database = firebase.database();

// create an object/variable to hold suvery questions and choices
var quiz =[{
question: "What was the first known purchase with bitcoin?",
answerList: ["Pizza", "Tacos", "More bitcoins"],
answer:0
},{
question: "Which cryptocurrency connects a network of 75 international banks?",
answerList: ["Bicoin Cash", "NEM","Ripple"],
answer:2	
},{
question: "Which cryptocurrency was the first to incorporate smart contracts?",
answerList: ["Litecoin", "Ethereum", "Bitcoin"],
answer:	1
},];

// variables to hold 
var yesCount = 0;
var currentQuiz = 0; 
var correctAnswer = 0;
var incorrectAnswer = 0; 
// var answered; 
var userSelect;
//object to hold messages
var messages = {
correct: "You're correct!",
incorrect: "Wrong...",
finished: "Thank you for your participation."
}
//function to hide yes/no/ buttons and the initial paragragh buttons
// increment yesCount when yes button is clicked and push it to firebase
$("#yes").on("click", function(){
    //do not use $("#quizBtn").empty() here
    $(this).hide();
    $("#no").hide();
    $("#p1").hide();
    $("#quizInitial-image").hide();
    yesCount++
    //console.log(yesCount);
    database.ref().set({
        count: yesCount
    });
    newGame();
 });
//this code needs to be global should not put in a function. 
//firebase data needs to be retrived first when the page is refreshed.
database.ref().on("value", function(snapshot) {
    var sv = snapshot.val();
    yesCount = sv.count;
});

function participant(){
    $("#participantNum").text("Total number of participants: "+ yesCount);
}

$("#no").on("click", function(){
    $("#yes").hide();
    $("#p1").hide();
    $("#quizInitial-image").hide();
    $(this).hide();
    var p2=$("<p class=p2>")
    p2.text("Good Bye!");
    $("#quizBtn").append(p2);
    $("#gif").html("<img src = 'assets/images/bye.gif' width = '150px'>")
    $("#startOverBtn").show();
    $("#startOverBtn").html("Reset");   
 });
    
$("#startOverBtn").on("click", function(){
    $("#startOverBtn").hide();
    //use remove instead of hide below. hide does not remove the text.
    $(".p2").remove();
    $("#resultMessage").empty();
    $("#correctAnswers").empty();
    $("#incorrectAnswers").empty();   
    $("#participantNum").empty();
    $("#gif").empty();
    $("#quizInitial-image").show();
    $("#yes").show();
    $("p").show();
    $("#no").show();
 });
function newGame(){
	$("#resultMessage").empty();
	$("#correctAnswers").empty();
    $("#incorrectAnswers").empty();
	currentQuiz = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	newQuiz();
}
//Setup a new Quiz
function newQuiz(){
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#participantNum").empty();
    $("#gif").empty();
    answered = true;
    
    //sets up new questions & answerList
    $("#currentQuiz").html("Quiz "+ (currentQuiz+1));
    $(".quiz").html("<h6>" + quiz[currentQuiz].question + "</h6>");
    for(var i = 0; i < 3; i++){
        var choices = $("<div>");
        choices.text(quiz[currentQuiz].answerList[i]);
        choices.attr({"data-index": i });
        choices.addClass("thisChoice");
        $(".answerList").append(choices);
    }
    $(".thisChoice").on("click",function(){
        userSelect = $(this).data("index");
        answerPage();
    });
}
function answerPage(){
	$("#currentQuiz").empty();
	$(".thisChoice").empty(); //Clears question page
    $(".quiz").empty();
    $("#participantNum").empty();

	var rightAnswerText = quiz[currentQuiz].answerList[quiz[currentQuiz].answer];
	var rightAnswerIndex = quiz[currentQuiz].answer;
	//$("#gif").html("<img src = " + imageArray[currentQuestion]+ " width = '400px'>");
	
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
        $("#message").html(messages.correct);
        $("#gif").html("<img src = 'assets/images/correct.gif' width = '150px'>")
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$("#message").html(messages.incorrect);
        $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
        $("#gif").html("<img src = 'assets/images/wrong.gif' width = '150px'>")
    } 
    else{
		unanswered++;
		$("#message").html(messages.endTime);
		$("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
		answered = true;
	}
	
	if(currentQuiz == (quiz.length-1)){
		setTimeout(resultPage, 1500)
	} else{
		currentQuiz++;
		setTimeout(newQuiz, 1000);
	}	
}
function resultPage(){
	$("#message").empty();
    $("#correctedAnswer").empty();
    $("#gif").empty();
	$("#resultMessage").html(messages.finished);
	$("#correctAnswers").html("Correct Answers: " + correctAnswer);
	$("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswer);
	$("#startOverBtn").addClass("reset");
	$("#startOverBtn").show();
    $("#startOverBtn").html("Reset");
    participant();
    
} 


//dataDiv initial image
$("#dataDiv-image").html("<img src = 'assets/images/coin.png' height= '175px'>");
//articleDiv initial image
$("#articleDiv").html("<img src = 'assets/images/articlepng.png' height= '230px'width = '680'>");
//quizBtn initial image
$("#quizInitial-image").html("<img src = 'assets/images/quiz.png' height= '120px'width = '180'>");
