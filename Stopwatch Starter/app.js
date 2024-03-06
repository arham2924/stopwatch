const timerMillis = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')

let cancelId 
let startTime
let savedTime = 0


function startTimer() {
    startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)

    
}
function stopTimer() {
    savedTime = savedTime + Date.now() - startTime
    console.log(savedTime)
    cancelAnimationFrame(cancelId)
    
}
function resetTimer() {
    savedTime = 0
    startTime = Date.now()
    
    timerMillis.innerHTML = '000'
    timerSeconds.innerHTML = '00'
    timerMinutes.innerHTML = '00'
    
}

function updateTimer() {
    let millisElapsed = savedTime + Date.now() - startTime
    let secondsElapsed = millisElapsed / 1000
    let minutesElapsed = secondsElapsed / 60

   let minutesText = Math.floor(minutesElapsed)
   let secondsText = Math.floor(secondsElapsed % 60)
   let milliesText = millisElapsed & 1000

if (minutesText.toString().length === 1) {
    minutesText = '0' + minutesText
}
if (secondsText.toString().length === 1) {
    secondsText = '0' + secondsText
}
if (milliesText.toString().length === 3) {
    milliesText = milliesText.toString().padStart(3, '0')
}

    timerMillis.innerHTML = milliesText
    timerSeconds.innerHTML = secondsText
    timerMinutes.innerHTML = minutesText
    cancelId = requestAnimationFrame(updateTimer)

}