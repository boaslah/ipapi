//decleartion of global varables
var ans;
var score_count = 0;
var score = 0;
var user_selected_option;
var counter = 0;


//get elements from the dom
var question_body = document.getElementById("question");
var option_body = document.getElementById("options");
var welcome_view = document.getElementById("welcome-view");
var question_option_view = document.getElementById("question-option-view");
var score_view = document.getElementById("score-view");
var user_score = document.getElementById("user-score");
var result = document.getElementById("result");

var questions = {
    "questions": [
        {
            "question": "Who was born in Bethlehem and became a prophet?",
            "category": "History",
            "answer": "Jesus",
            "answers": [
                "ceaser",
                "John the baptist",
                "Jesus"
            ]
        },
        {
            "question": "What was Gandhi's first name?",
            "category": "History",
            "answer": "Mohandas",
            "answers": [
                "Mohammed",
                "Mohandas",
                "Muhammad"
            ]
        },
        {
            "question": "What year was JFK assassinated?",
            "category": "History",
            "answer": "1965",
            "answers": [
                "1964",
                "1965",
                "1966",
                "1963"
            ]
        },
        {
            "question": "Who was Julius Caesar's grand-nephew?",
            "category": "History",
            "answer": "Augustus",
            "answers": [
                "Marc Anthony",
                "Flavius",
                "Augustus"
            ]
        },
        {
            "question": "What was Albert Einstein famous for?",
            "category": "History",
            "answer": "",
            "answers": [
                "Inventions",
                "Religious leader",
                "Theorist"
            ]
        },
        {
            "question": "Which is greater than 4",
            "category": "Math",
            "answer": "5",
            "answers": [
                "5",
                "-5",
                "-1/2",
                "-25"
            ]
        },
        {
            "question": "Who was the author of the famous storybook 'Alice's Adventures in Wonderland'?",
            "category": "Literature",
            "answer": "Lewis Carroll",
            "answers": [
                "Rudyard Kipling",
                "John Keats",
                "Lewis Carroll",
                "H G Wells"
            ]
        },
        {
            "question": "Who wrote the famous 1855 poem 'The Charge of the Light Brigade'?",
            "category": "",
            "answer": "Lord Alfred Tennyson",
            "answers": [
                "Lord Alfred Tennyson",
                "Christopher Marlowe",
                "Johannes Gutenberg",
                "René Descartes"
            ]
        },
        {
            "question": "Who wrote 'Where ignorance is bliss, it is folly to be wise'?",
            "category": "",
            "answer": "Shakespeare",
            "answers": [
                " Browning",
                "Marx",
                "Shakespeare",
                "Kipling"
            ]
        },
        {
            "question": "Combine terms: 12a + 26b -4b – 16a.",
            "category": "Math",
            "answer": " -4a + 22b",
            "answers": [
                " -4a + 22b",
                "4a + 22b",
                "28a + 30b",
                "-28a + 30b"
            ]
        },
        {
            "question": " Which is the smallest?",
            "category": "Math",
            "answer": "-1",
            "answers": [
                "-1",
                "2",
                "3",
                "4"
            ]
        },
        {
            "question": "A card is selected at random from a standard 52 card deck. Assuming all cards are equally likely to be selected, what is the probability that a red card was selected given that a king was selected?",
            "category": "",
            "answer": "1/2",
            "answers": [
                "1/26",
                "1/4",
                "1/2",
                "1/13"
            ]
        },
        {
            "question": "A card is selected at random from a standard 52 card deck. Assuming all cards are equally likely to be selected, what is the probability that a red card or a king was selected?",
            "category": "Math",
            "answer": "7/13",
            "answers": [
                "15/26",
                "17/26",
                "7/13",
                "1/2"
            ]
        },
        {
            "question": "A card is selected at random from a standard 52 card deck. Assuming all cards are equally likely to be selected, what is the probability that a red king was selected?",
            "category": "Math",
            "answer": "1/26",
            "answers": [
                "1/26",
                "1/52",
                "1/13",
                "15/26"
            ]
        }
    ]
}

//get new question function
const getNewQuestion = () => {
    var random_num = Math.floor(Math.random() * 14);
    result.innerHTML = "";
    result.style.backgroundColor = "white";
    ans = questions.questions[random_num].answer;
    question_body.innerHTML = counter+1 + ".     "+ questions.questions[random_num].question;
    option_body.innerHTML = `
        <ul>
            A<li><a href="#"  class = "list" id="a">${questions.questions[random_num].answers[0]}</a></li>
            B<li><a href="#"  class = "list" id="b">${questions.questions[random_num].answers[1]}</a></li>
            C<li><a href="#"  class = "list" id="c">${questions.questions[random_num].answers[2]}</a></li>
        </ul>
    `
    counter ++;
    if(counter === 6){
        question_option_view.style.display = "none";
        welcome_view.style.display = "none";
        score_view.style.display = "block";
        calculateScore();
        user_score.innerHTML = score + "%";
    }
}

score_view.addEventListener("click", function() {
    location.reload();
    welcome_view.style.display = "none";
    question_option_view.style.display = "block";
})

const getNewQuiz = () => {
    counter = 0;
    score_count = 0;
    getNewQuestion();
    console.log(score_count);
}

// display welcome view
document.getElementById("welcome-view-button").addEventListener('click', function(){
    welcome_view.style.display = "none";
    question_option_view.style.display = "block";
})

const goHome = () => {
    welcome_view.style.display = "block";
    question_option_view.style.display = "none";
    score_view.style.display = "none";
}

// display question and answer view
document.getElementById("quiz-view-button").addEventListener('click', function(){
    if(counter != 6){
        score_view.style.display = "none";
    }
    welcome_view.style.display = "none";
})

// display score view
document.getElementById("score-view-button").addEventListener('click', function(){
    question_option_view.style.display = "block";
    welcome_view.style.display = "none";
    score_view.style.display = "none";
    
})

// add event listener to the the dom
document.addEventListener('click', function(event){
    if(event.target.className === "list"){
        user_selected_option = event.target.textContent;
        checkUserOption(); 
    }
})

//check if user option is correct
const checkUserOption = () => {
    if(ans === user_selected_option)
    {
        result.innerHTML = "Correct";
        score_count += 1;
        result.style.backgroundColor = "green";
        result.style.padding = "15px"
    }
    else{
        result.style.padding = "15px"
        result.style.backgroundColor = "red";
        result.innerHTML = "Worng";
    }
}


const calculateScore = () => {
    if(score_count  === 1){  
        score = 20;
    }
    else if(score_count  === 2)
    {
        score = 40;
    }
    else if(score_count  === 3)
    {
        score = 60;
    }
    else if(score_count  === 4)
    {
        score = 80;
    }
    else if(score_count  === 5)
    {
        score = 100;
    }
    else if(score_count === 0)
    {
        score = 0;
    }
}

