
// Challenge 1
let imgURL = 'http://localhost:3000/games';
fetch(imgURL)
.then(resp => resp.json())
.then(data => {
    console.log(data);
    renderDetails(data[0])
    for (let games of data) {
    renderGame(games)
    }
})
// Challenge 2
function renderGame (games) {
    let gameList = document.querySelector('.game-list');
    let name = document.createElement('h5');
    name.textContent = `${games.name} (${games.manufacturer_name})`

    gameList.append(name)

//Challenge 3

    name.addEventListener('click', () => renderDetails(games))
}

function renderDetails (games) {

    let title = document.querySelector('#detail-title')
    title.textContent = games.name;

    let image = document.querySelector('#detail-image');
    image.src = games.image;

    let highScore = document.querySelector('#detail-high-score');
    highScore.textContent = games['high_score']

}
// Challenge 4

let form = document.querySelector('#high-score-form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

   let newScore = e.target["score-input"].value
   let highScore = document.querySelector('#detail-high-score')

    highScore.textContent = newScore
    // form.reset()
 })


