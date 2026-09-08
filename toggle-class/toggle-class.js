const content = document.createElement('div');
content.id = 'content';
content.className = 'toggle-class';

const p = document.createElement('p');
document.body.appendChild(content);
p.textContent = 'code';
content.appendChild(p);

const buttonContainer = document.createElement('div');
buttonContainer.className = 'controls';
document.body.appendChild(buttonContainer);

const boldButton = document.createElement('button');
boldButton.id = 'bold';
boldButton.textContent = 'B';
buttonContainer.appendChild(boldButton);

const italicButton = document.createElement('button');
italicButton.id = 'italic';
italicButton.textContent = 'I';
buttonContainer.appendChild(italicButton);

const underlineButton = document.createElement('button');
underlineButton.id = 'underline';
underlineButton.textContent = 'U';
buttonContainer.appendChild(underlineButton);

const highlightButton = document.createElement('button');
highlightButton.id = 'highlight';
highlightButton.textContent = 'Highlight';
buttonContainer.appendChild(highlightButton);

boldButton.addEventListener('click', () => {
    p.classList.toggle('bold');
});

italicButton.addEventListener('click', () => {
    p.classList.toggle('italic');
});

underlineButton.addEventListener('click', () => {
    p.classList.toggle('underline');
});

highlightButton.addEventListener('click', () => {
    content.classList.toggle('highlight');
});
