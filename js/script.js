const cards = document.querySelectorAll('.card');
const imageCard = document.getElementsByClassName('card-back');
const moves = document.getElementById('move-count');
const restart = document.getElementById('restart');
const Win = document.getElementById('win')
let newCards = []
let move = 0;
let winCount = 0;

const Image = [
    {
        
        img: 'image/img (1).png'
    },
    {
        
        img: 'image/img (2).png'
    },
    {
        
        img: 'image/img (3).png'
    },
    {
        
        img: 'image/img (4).png'
    },
    {
        
        img: 'image/img (1).png'
    },
    {
        
        img: 'image/img (2).png'
    },
    {
        
        img: 'image/img (3).png'
    },
    {
        
        img: 'image/img (4).png'
    }
];

// Image fliped function
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("fliped");

        // store recently click card
        newCards.push(this);

        let lastImageflip = newCards[newCards.length - 2].querySelector('.card-back').src;
        let recentImageflip = this.querySelector('.card-back').src;
        
        if(lastImageflip !== recentImageflip)
        {
            newCards.forEach(function (event) {
                setTimeout(() => {
                    event.classList.remove("fliped");
                },500)
            })
            newCards.length = 0;
            move++;
        }
        else
        {
            newCards.length = 0;
            move++;
            winCount++;
        }
        moves.innerText = `Moves: ${move}`;

        // win counter
        if(winCount === 4)
        {
            Win.innerHTML = `Congratulations!!! You won the game in ${move} moves.`;
        }
    })
}

// restart function
const restartGame = () => {
    let flipedCard = document.getElementsByClassName('card fliped');

    // random image generate
    Image.sort(() => Math.random() - 0.5);

    Object.values(flipedCard).forEach(function (event) {
        setTimeout(() => {
            event.classList.remove("fliped");
        }, 0);
    })
    newCards.length = 0;
    move = 0;
    winCount=0;
    Win.innerHTML = '';
    moves.innerText = `Moves: ${move}`;
    let images = document.getElementsByClassName('card-back')
    Object.values(images).forEach((event, index)=>{
        event.src = Image[index].img;
    })

}
restart.addEventListener('click', restartGame);




