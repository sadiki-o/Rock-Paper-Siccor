import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
    name: "gameStates",
    initialState: {
        winner: "",
        playerMove:"",
        computerMove:"",
        computerScore:0,
        youScore:0,
        hideShowMove: 'visible',
        hideShowResult: 'hidden'
    },
    reducers: {
        playMove: (state=this.initialState, action) => {
            let moves = ["rock", "paper", "scissor"];
            let choice = Math.floor(Math.random()*3);

            //handle winner
            if(action.payload === "paper" && moves[choice] === "rock"){
                
                state.playerMove = "paper"
                state.computerMove = "rock"
                state.winner = "player"
                state.youScore += 1
                state.hideShowMove = 'hidden'
                state.hideShowResult = 'visible'

            }else if(action.payload === "paper" && moves[choice] === "scissor"){
                
                state.playerMove = "paper"
                state.computerMove = "scissor"
                state.winner = "computer"
                state.computerScore += 1
                state.hideShowMove = 'hidden'
                state.hideShowResult = 'visible'

            }else if(action.payload === "scissor" && moves[choice] === "rock"){

                state.playerMove = "scissor"
                state.computerMove = "rock"
                state.winner = "computer"
                state.computerScore += 1
                state.hideShowMove = 'hidden'
                state.hideShowResult = 'visible'

            }else if(action.payload === "scissor" && moves[choice] === "paper"){

                state.playerMove = "scissor"
                state.computerMove = "paper"
                state.winner = "player"
                state.youScore += 1
                state.hideShowMove = 'hidden'
                state.hideShowResult = 'visible'

            }else if(action.payload === "rock" && moves[choice] === "paper"){
                
                state.playerMove = "rock"
                state.computerMove = "paper"
                state.winner = "computer"
                state.computerScore += 1
                state.hideShowMove = 'hidden'
                state.hideShowResult = 'visible'

            }else if(action.payload === "rock" && moves[choice] === "scissor"){
                
                state.playerMove = "rock"
                state.computerMove = "scissor"
                state.winner = "player"
                state.youScore += 1
                state.hideShowMove = 'hidden'
                state.hideShowResult = 'visible'

            }else {
                
                state.playerMove = action.payload
                state.computerMove = action.payload
                state.winner = "draft"
                state.hideShowMove = 'hidden'
                state.hideShowResult = 'visible'
                
            }
            
        },
        playAgain: (state=this.initialState) => {
            return { ...state, winner: "",playerMove:"", computerMove:"", hideShowMove: 'visible', hideShowResult: 'hidden' }
        },
        resetAll: (state=this.initialState) => {
            return {
                winner: "",
                computerScore:0,
                youScore:0,
                hideShowMove: 'visible',
                hideShowResult: 'hidden'
            };
        }
    }
})

export const { playAgain, playMove, resetAll } = gameSlice.actions;
export default gameSlice.reducer

