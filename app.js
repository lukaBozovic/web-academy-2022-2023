const questions = [
    {
        text : "Koji od navedenih odgovora predstavlja ime programskog jezika?",
        answers : {
            a : "HTML",
            b : "JS",
            c : "CSS"
        },
        correctAnswer : "b"
    },
    {
        text : "Izbaci uljeza: ",
        answers : {
            a : "Laravel",
            b : "Spring Boot",
            c : "React"
        },
        correctAnswer : "c"
    },
    {
        text : "Koji je glavni grad Crne Gore?",
        answers : {
            a : "Cetinje",
            b : "Budva",
            c : "Podgorica"
        },
        correctAnswer : "c"
    }
]

var contentDiv = document.getElementById('contentDiv');
var accordionDiv = document.getElementById('accordion');
var resultDiv = document.getElementById('result');
var tryAgain = document.getElementById('tryAgain');

function start(){
    let questionsHtml = [];

    questions.forEach((question, index) => {

        let answersHtml = [];

        for(let letter in question.answers){
            let answerHtml = `<div>
                                <label>
                                        <input type="radio" name="question${index}" value="${letter}"> ${letter} : ${question.answers[letter]}
                                </label>
                              </div>
            `;
            answersHtml.push(answerHtml);
        }
        questionsHtml.push(`<div class="accordion-item">
                                 <h2 class="accordion-header" id="flush-heading${index}">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapseOne">
                                        ${question.text}
                                    </button>
                                 </h2>
                                 
                                <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordion">
                                     <div class="accordion-body">
                                     ${answersHtml.join("")}
                                     </div>
                                </div>
                             </div>
                
                              
                                
                        `)
    })
    accordionDiv.innerHTML = questionsHtml.join("");
}


function finish(){
    let points = 0;
    questions.forEach((question, index) => {
        let selector = `input[name=question${index}]:checked`;
        let playerAnswer = document.querySelector(selector)?.value

        if (playerAnswer === question.correctAnswer)
            points++;
    })
    var resultClass = '';
    if (points === 3)
        resultClass = 'alert-success';
    else if(points === 2)
        resultClass = 'alert-warning';
    else 
        resultClass = 'alert-danger';

    resultDiv.innerHTML = `Osvojili ste: ${points} poena`;
    resultDiv.classList.add(resultClass);
    tryAgain.classList.remove('d-none');
}

function tryAgain(){
    window.location.reload();
}
start();