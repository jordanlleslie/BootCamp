const p1ScoreHolder = document.querySelector('#p1')
const p2ScoreHolder = document.querySelector('#p2')
const playingToDropdown = document.querySelector('#playingTo')
let playingTo = parseInt(playingToDropdown.innerText)


const addP1 = document.querySelector('#addP1')
const addP2 = document.querySelector('#addP2')
const reset = document.querySelector('#reset')

let active = true;

function endGame() {
    p1ScoreHolder.style.color = '#f76c5e'
    p2ScoreHolder.style.color = '#4ce0b3'
    active = false
    addP1.classList.add('noClick')
    addP2.classList.add('noClick')
}

function resetGame(){
    active = true;
    p1ScoreHolder.innerText = 0
    p2ScoreHolder.innerText = 0
    p1ScoreHolder.style.color = '#000'
    p2ScoreHolder.style.color = '#000'
    addP1.classList.remove('noClick')
    addP2.classList.remove('noClick')
}

addP1.addEventListener('click', function () {
    if (active) {
        let p1Score = parseInt(p1ScoreHolder.innerText)
        p1ScoreHolder.innerText = p1Score + 1
        if (p1Score + 1 >= playingTo) {
            endGame()
        }
    }
})



addP2.addEventListener('click', function () {
    if (active) {
        let p2Score = parseInt(p2ScoreHolder.innerText)
        p2ScoreHolder.innerText = p2Score + 1
        if (p2Score + 1 >= playingTo) {
            endGame()
        }
    }
})

reset.addEventListener('click', () => {
    resetGame()
})

playingToDropdown.addEventListener('change', () => {
    playingTo = playingToDropdown.value
})