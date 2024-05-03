
import { useState } from "react";
const initialBoard = () => Array(9).fill(null);
const useTictactoe = () => {
    const [board ,setBoard] = useState(initialBoard());
    const [isXnext , setIsNext] = useState(true);
    const WINNING_PATTERNS = [
       [0 ,1,2 ],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6],
    ];
    const calculateWinner = (currentBoard) =>{
        for(let i =0 ;i<WINNING_PATTERNS.length;i++){
            const[a,b,c] = WINNING_PATTERNS[i];
            if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]){
                return currentBoard[a];
            }

        }
        return null;
    

    }
    const handleClick = (index) =>{
        //check the winner
        const winner = calculateWinner(board)
        if(winner || board[index])
        return
    const newboard =[...board]
    newboard[index] = isXnext?"X" :"O"
    setBoard(newboard);
    setIsNext(!isXnext);


    }
    const getStatusMessage = () =>{
        const winner = calculateWinner(board);
        if(winner) return `Player ${winner} wins!`;
        if(!board.includes(null)) return `It's a draw!`;
        return `Player ${isXnext ? "X" :"O"} turn`;

    }
    const resetGame = () => {
        setBoard(initialBoard());
        setIsNext(true);
    };
    return {board , handleClick , calculateWinner , getStatusMessage ,resetGame};

}
export  default useTictactoe;