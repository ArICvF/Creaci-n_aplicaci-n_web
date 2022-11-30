 function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answer = [];
            for(letter in currentQuestion.answer){
                answer.push(
                    <label>
                        <input type= "radio" name="question${questionNumber}" value="${letter}" class="rad_butn"></input> 
                         ${letter}:
                         ${currentQuestion.answer[letter]}
                    </label>
                );
            }
            output.push(
                <div class="slide">
                    <div class="question">${(questionNumber+1)}. ${currentQuestion.question}
                    </div>
                    <div class="answer">${answer.join("")}</div>
                </div>
            );
        }
    ) ;
    quizBox.innerHTML= output.join('');
    <script src="js/countdown.js"></script>
 }
 function showResults(){
    const answerBoxs = quizBox.querySelectorAll('.answer');
    let numCorrect= 0;
    myQuestions.forEach( ( currentQuestion, questionNumber) => {
        const answerBox = answerBoxs[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerBox.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerBoxs[questionNumber].style.color = 'green';
        }
        else{
            answerBoxs[questionNumber].style.color = 'red';
        }
    });
    resultBox.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
 }

    const quizBox = document.getElementById('quiz');
    const resultBox = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const myQuestions = [];
    for(i=0; i < DataTransfer.length; i++){
        myQuestions.push(data[i]);
    }
    buildQuiz();
    submitButton.addEventListener('click', showResults);

    function showSlide(n){
        slides[currentSlide].ClassList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currenSlide = n;
        if(currentSlide === 0){
            previousButton.style.display = 'none';
        }
        else{
            previousButton.style.display = 'inline-block';
        }
        if(currentSlide === slides.lenght-1){
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else{
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }

        function showNextSlide(){
            showSlide(currentSlide + 1);
        }

        function showPreviousSlide(){
            showSlide(currentSlide - 1);
        }
    buildQuiz()
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currenSlide = 0;

    showSlide(currentSlide);
    
    submitButton.addEventListener('clic', showResults);

    previousButton.addEventListener("click", showPreviousSlide);
    netxButton.addEventListener("Click", showNextSlide);

    function resetQuiz(){
        location.reload();
    }

    document.getElementById('quizzzLength').innerHTML = data.lenght;

    const myQuestions = [];
    for(i=0; i< data.lenght; i++){
        myQuestions.push(data[i]);
    }
    const deadline = new Date(Date.parse(new Date()) + 3 * 60 *100);
    initializeClock('clockdiv', deadline);
    
    }