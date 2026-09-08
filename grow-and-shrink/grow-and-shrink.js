const letterContainer = document.createElement('div');
letterContainer.className = 'letter-container';
document.body.appendChild(letterContainer);

const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
document.body.appendChild(buttonContainer);
const prevButton = document.createElement('button');
prevButton.id = 'prev';
prevButton.textContent = '<';
buttonContainer.appendChild(prevButton);
const nextButton = document.createElement('button');
nextButton.id = 'next';
nextButton.textContent = '>';
buttonContainer.appendChild(nextButton);
const decreaseButton = document.createElement('button');
decreaseButton.id = 'decrease';
decreaseButton.textContent = '-';
buttonContainer.appendChild(decreaseButton);
const increaseButton = document.createElement('button');
increaseButton.id = 'increase';
increaseButton.textContent = '+';
buttonContainer.appendChild(increaseButton);


let selectedIndex = 0; /*marks that the index is at 0 which means it is on A*/

increaseButton.addEventListener('click', () => {
    const selected = document.querySelector('.letter.selected');
    let currentSize = parseInt(selected.dataset.fontSize);
    if (currentSize < 26) {
        currentSize += 2;
        selected.dataset.fontSize = currentSize;
        selected.style.fontSize = `${currentSize}px`;
    }
});

decreaseButton.addEventListener('click', () => {
    const selected = document.querySelector('.letter.selected');
    let currentSize = parseInt(selected.dataset.fontSize);
    if (currentSize > 10) {
        currentSize -= 2;
        selected.dataset.fontSize = currentSize;
        selected.style.fontSize = `${currentSize}px`;
    }
});

function updateSelectedLetter() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.classList.toggle('selected', index === selectedIndex);
    });
}

nextButton.addEventListener('click', () => {
    selectedIndex = (selectedIndex + 1) % 26;
    updateSelectedLetter();
});

prevButton.addEventListener('click', () => {
    selectedIndex = (selectedIndex - 1 + 26) % 26;
    updateSelectedLetter();
});

for (let i = 0; i < 26; i++) {
    const letter = document.createElement('div'); /*we create div for .letter with js*/
    letter.classList.add('letter');
    letter.textContent = String.fromCharCode(65 + i); /* ascii code stuff, A is basically 65 and makes sure its uppercase*/
    letter.id = String.fromCharCode(97 + i); /* lowercase ascii code, a is 97*/
    letter.dataset.fontSize = 14; /* each letter remembers its own size */
    letterContainer.appendChild(letter);
    letter.addEventListener('click', () => {
        document.querySelectorAll('.letter').forEach(l => l.classList.remove('selected'));
        letter.classList.add('selected');
        selectedIndex = i;
    });
}

letterContainer.children[0].classList.add('selected');
