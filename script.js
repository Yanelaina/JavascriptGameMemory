const emojis = ["🥳","🥳","😍","😍","❤️","❤️","😁","😁","🤦‍♂️",
        "🤦‍♂️","😉","😉","🥶","🥶","😡","😡"];
        
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5)? 2 : -1);

let firstCardFlipped = false;
let moveCount = 0;
let seconds = 0;
let timerInterval;
const timerValue = document.getElementById('timerValue');
const moveCounter = document.getElementById('moveCounter');

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];


    box.onclick = function() {
        this.classList.add('boxOpen');
        moveCount++;
        moveCounter.textContent = `${moveCount} moves`;
        // console.log("moveCount : ", moveCount);
        
        if (!firstCardFlipped){
            timerInterval = setInterval(function() {
            seconds++;
            timerValue.textContent = `${seconds} sec`;
                }, 1000);

            firstCardFlipped = true;

            console.log('I"m here')
        }

        setTimeout(function() {
            
            if (document.querySelectorAll('.boxOpen').length > 1){
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == 
                document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    // console.log("bhjjhbcbh : ", document.querySelectorAll('.boxMatch').length);

                    if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                        // document.getElementById('win').innerHTML = "Congrats, you win 🥳🥳🥳🥳🥳🥳🥳🥳!";
                        alert(`Congrats, you win 🥳🥳🥳🥳🥳🥳🥳🥳! Vous avez gagné le jeu en ${moveCount} mouvements et en ${seconds} secondes.` );
                        clearInterval(timerInterval);
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }

            }
            

        }, 500)
    }
    document.querySelector('.game').appendChild(box);       
}
