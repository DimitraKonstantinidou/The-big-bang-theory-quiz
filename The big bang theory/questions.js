if (performance.getEntriesByType("navigation")[0].type === "reload") {
    window.location.href = 'index.html';
}


let correctAnswers = 0;

function submitAnswer() {    
    let quizContainers = $(".quiz-container:visible");
    let radioButtons = quizContainers.find('input[type="radio"]:checked');

    if (radioButtons.length === 0) {                
        alert("Please answer the question before proceeding.");
            return; 
    }  

    let selectedAnswer = radioButtons.val();
    let correctAnswer = getCorrectAnswer();

    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
    }
   
    quizContainers.addClass("hidden");

    let nextContainer = quizContainers.next(".quiz-container");
    
    if (nextContainer.length > 0) {
        nextContainer.removeClass("hidden");
    } else {
        if (correctAnswers <= 3){
            window.location.href = "results/result1.html?score=" + correctAnswers;            
        }
        else if (correctAnswers > 3 && correctAnswers <= 7){
            window.location.href = "results/result2.html?score=" + correctAnswers; 
        }
        else {
            window.location.href = "results/result3.html?score=" + correctAnswers;
        }
    }
}

function getCorrectAnswer() {
    const correctAnswersArray = [
        "Leonard", "Right side", "Debbie", "Social situations with women",
        "Kurt", "Stuart's Comic Book Store", "Harp", "Jimmy Speckerman", "Amy Farrah Fowler", "Pasadena Towers"
    ];

    let currentQuestionIndex = $(".quiz-container:visible").index();
        return correctAnswersArray[currentQuestionIndex];
} 