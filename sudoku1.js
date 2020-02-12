var puzzle = [
	[0, 0, 0, 2, 6, 0, 7, 0, 1],
	[6, 8, 0, 0, 7, 0, 0, 9, 0],
	[1, 9, 0, 0, 0, 4, 5, 0, 0],
	[8, 2, 0, 1, 0, 0, 0, 4, 0],
	[0, 0, 4, 6, 0, 2, 9, 0, 0],
	[0, 5, 0, 0, 0, 3, 0, 2, 8],
	[0, 0, 9, 3, 0, 0, 0, 7, 4],
	[0, 4, 0, 0, 5, 0, 0, 3, 6],
	[7, 0, 3, 0, 1, 8, 0, 0, 0]
];
console.log("input of sudoku puzzle:-\n", puzzle);

// puzzle solver start from here.
function sudokuPuzzle(puzzle) {
	var zeropossiblities = {};
	var possiblityNumber = {};
	// this loop going for whole 81 boxes.
	do {
		var emptyCell = 0;
		// this loop for rows
		for (var row = 0; row < puzzle.length; row++) {
			// this loop for columns
			for (var col = 0; col < puzzle.length; col++) {
				// this line checking in whole puzzle zero value.
				if ((puzzle[row][col]) === 0) {
					// this is variable storing the impossible value.
					zeropossiblities = {};
					// this loop for store the impossiable value in object.
					for (let i = 0; i < puzzle.length; i++) {
						// this condition checking rows.
						if (puzzle[row][i] > 0) {
							// this object storing the possiable keys and value.
							zeropossiblities[puzzle[row][i]] = true;
						}
						// this condition checking columns and storing a value inside the object.
						if (puzzle[i][col] > 0) {
							zeropossiblities[puzzle[i][col]] = true;
						}
					}
					// this loop for rows 3*3 grid.
					for (let gridrow = Math.floor(row / 3) * 3; gridrow < Math.floor(row / 3) * 3 + 3; gridrow++) {
						// this loop for columns 3*3 grid.
						for (let gridcol = Math.floor(col / 3) * 3; gridcol < Math.floor(col / 3) * 3 + 3; gridcol++) {
							if (puzzle[gridrow][gridcol]) {
								// here stroing all the grids data in object.
								zeropossiblities[puzzle[gridrow][gridcol]] = true;
							}
						}
					}
					//  in this line getting all the keys from object.
					possiblityNumber = Object.keys(zeropossiblities);
					if (possiblityNumber.length === 8) {
						// this loop is working for replacing value from puzzle.
						for (let num = 1; num < 10; num++) {
							if (possiblityNumber.indexOf(num.toString())< 0) {
								puzzle[row][col] = num;
							}
						}

					} else {
						emptyCell++;
					}
				}
			}
		}


	}while(emptyCell>0)
	return puzzle;

}
let funCall = sudokuPuzzle(puzzle);
console.log("solved Puzzle :-\n", funCall);