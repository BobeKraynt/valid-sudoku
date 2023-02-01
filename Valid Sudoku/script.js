function hasDuplicated(arr) {
    let numbers = arr.filter(el => el !== '.');
    return numbers.length === new Set(numbers).size;
}

let result = [];

let splitIntoSquares = (arr) => {
    let squareLength = Math.sqrt(arr.length);

    for (let i = 0; i < squareLength; i++) {
    let square = [];
    for (let j = 0; j < squareLength; j++) {
      square.push(arr[i * squareLength + j]);
    }
    result.push(square);
  }
  result =  result.flat(); 
}

var isValidSudoku = function(board) {
    let columns = [];

    for(let i = 0 ; i < board[0].length; i++){
        let column = [];
        for(let x = 0; x < board.length; x++) {
            column.push(board[x][i]);
        }
        columns.push(column);
    }

    splitIntoSquares(board);

    let sudoku = [columns, board, result]
    for(elements of sudoku) {
        for(element of elements) {
            if(hasDuplicated(element)){
                return true
            }
            else {
                return false
            }
        }
    }
};
isValidSudoku([["5","3",".",".","7",".",".",".","."],
               ["6",".",".","1","9","5",".",".","."],
               [".","9","8",".",".",".",".","6","."],
               ["8",".",".",".","6",".",".",".","3"],
               ["4",".",".","8",".","3",".",".","1"],
               ["7",".",".",".","2",".",".",".","6"],
               [".","6",".",".",".",".","2","8","."],
               [".",".",".","4","1","9",".",".","5"],
               [".",".",".",".","8",".",".","7","9"]]);