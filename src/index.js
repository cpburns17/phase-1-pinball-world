
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

function renderGame (games) {
    let gameList = document.querySelector('.game-list');
    let name = document.createElement('h5');
    name.textContent = `${games.name} (${games.manufacturer_name})`

    gameList.append(name)

}

function renderDetails (games) {

    let image = document.querySelector('#detail-image');
    image.src = games.image;

    let name = document.querySelector('#detail-title')
    name.textContent = games.name;

    let highScore = document.querySelector('#detail-high-score');
    highScore = games['high_score']

}

// name.addEventListneer('click', (e) => {
    // e.preventDefault
//     renderDetails(games)
// })
