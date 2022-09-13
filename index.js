let arr = ['scissors', 'spock', 'lizard', 'rock', 'paper'];
let section = document.querySelector('section');
let userSelected = document.querySelector('.user-selected');
let computerSelected = document.querySelector('.computer-selected');
let userSelectedImg = document.querySelector('.user-selected_img');
let computerSelectedImg = document.querySelector('.computer-selected_img');
let displayPickedSection = document.querySelector('.display-picked__section');
let winner = document.querySelector('.winner');
let counter = document.querySelector('.counter');
let playAgain = document.querySelector('.play-again');
let buttonDiv = document.querySelector('.button-div');
let overlay = document.querySelector('.overlay');
let Close = document.querySelector('.close');
let btn = document.querySelectorAll('.img');
let winnerCircle1 = document.querySelector('.winner-circle1');
let winnerCircle2 = document.querySelector('.winner-circle2');

let Name = '', compName = '';

btn.forEach(el =>
    el.addEventListener('click', (e) => {
        let randomImg = Math.round(4 * Math.random());
        Name = el.dataset.name;

        compName = arr[randomImg];
        section.style.display = 'none';
        userSelected.classList.add(Name);
        computerSelected.classList.add(`${compName}`);
        userSelectedImg.setAttribute('src', (`./images/icon-${Name}.svg`));
        computerSelectedImg.setAttribute('src', (`./images/icon-${compName}.svg`));
        displayPickedSection.style.display = 'grid';

        if (Name === arr[randomImg]) {
            winner.textContent = 'Tie!'
            winner.style.color = 'yellow'
             winnerCircle1.style.display = 'none'
            winnerCircle2.style.display = 'none'
        } else if ((Name === 'scissors' && arr[randomImg] === 'paper') ||
            (Name === 'rock' && arr[randomImg] === 'lizard') ||
            (Name === 'lizard' && arr[randomImg] === 'spock') ||
            (Name === 'spock' && arr[randomImg] === 'scissors') ||
            (Name === 'scissors' && arr[randomImg] === 'lizard') ||
            (Name === 'paper' && arr[randomImg] === 'spock') ||
            (Name === 'rock' && arr[randomImg] === 'scissors') ||
            (Name === 'lizard' && arr[randomImg] === 'paper') ||
            (Name === 'spock' && arr[randomImg] === 'rock')
        ) {
            winner.textContent = 'You Won!'
            winner.style.color = 'white'
            document.querySelector('.winner-circle1').style.display = 'block'
            document.querySelector('.winner-circle2').style.display = 'none'
        } else {
            winner.textContent = 'You Lose!'
            winner.style.color = 'red'
            document.querySelector('.winner-circle2').style.display = 'block'
            document.querySelector('.winner-circle1').style.display = 'none'
        }

        if (winner.textContent === 'You Won!') {
            counter.textContent =
                Number(counter.textContent) + 1
            setTimeout(() => {
                counter.classList.add('bump')
            }, 50);
            counter.classList.remove('bump')
        } else if (winner.textContent === 'You Lose!') {
            if (counter.textContent === '0') {
                counter.textContent = 0
            } else {
                counter.textContent =
                    (Number(counter.textContent) - 1)
            }
        }
    })
);


playAgain.addEventListener('click', () => {
    userSelected.classList.remove(Name);
    computerSelected.classList.remove(`${compName}`)
    displayPickedSection.style.display = 'none';
    section.style.display = 'block';
});

buttonDiv.addEventListener('click', () => {
    setInterval(() => {
        buttonDiv.classList.add('bump')
    }, 50);
    buttonDiv.classList.remove('bump');
    overlay.style.display = 'block';
});

Close.addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

