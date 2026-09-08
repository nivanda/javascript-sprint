const initializeChessboard = () => {
  const board = document.createElement('div');
  board.classList.add('chessboard');
  document.body.appendChild(board);

  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.id = `square-${row}-${col}`;

        if ((row + col) % 2 === 0) {
            square.classList.add('light');
        } else {
            square.classList.add('dark');
        }

        square.addEventListener('click', () => {
            if (square.classList.contains('red')) {
                square.classList.remove('red');
            } else {
                document.querySelectorAll('.square').forEach(sq => sq.classList.remove('red'));
                square.classList.add('red');
            }
        });

        board.appendChild(square);
    }
  }
}

initializeChessboard();
