
function getTimeRenaining(endtime) {
    //open function to get the renaining time with a paraneter of 'endtine' so that we can return the result and use it outside of this function

    const total = Date.parse(endtime) - Date.parse(new Date());

    const seconds = Math.floor((total / 1000) % 60);

    const minutes = Math.floor((total / 1000 / 60)% 60);
    return { //This then returns the results
        total,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime){
    const clock = document.getElementById(id);
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
        const t = gettimeRenaining(endtime);

        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        
        if(t.total <= 0){
            clearInterval(timeinterval);
            showResults();
            submitButton.style.display ='none';
            previusButton.style.display='none';
            nextButton.style.display='none';
            tryAgainButton.style.display='inline-block';
        }else{
            tryAgainButton.style.display='none';
        }
    }
    updateClock();

    const timeinterval = setInterval(updateClock, 1000);
}
function resetQuiz(){
    location.reload();
}

const deadline = new Date(Date.parse(new Date()) + 3 * 60 *100);
initializeClock('clockdiv', deadline);

const tryAgainButton = document.getElementById("tryAgain");

tryAgainButton.addEventListener("click", resetQuiz);
//