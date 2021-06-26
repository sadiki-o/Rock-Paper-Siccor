import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Scissor from './Scissor'
import Paper from './Paper'
import Rock from './Rock'
import { playAgain } from '../store/gameSlice'


const Results = () => {
    const states = useSelector(state => state.gameStates)
    const dispatch = useDispatch()


    return (
        <div 
        style={{visibility: states.hideShowResult}}
        id="results">
            
            <div className="computer-move">
                <p>Computer</p>
                {
                    states.computerMove === "scissor" ? <Scissor dis={true}/> :
                    states.computerMove === "rock" ? <Rock dis={true}/>:
                    states.computerMove === "paper" ? <Paper dis={true}/> : ""
                }
            </div>

            <div className="winner">
                {states.winner === "draft" ? "draft" : states.winner+" wins"}
                <button 
                onClick={() => {
                    dispatch(playAgain())
                }}
                className="playagain">
                    Play Again
                </button>
            </div>

            <div className="you-move">
                <p>Player</p>
                {
                    states.playerMove === "scissor" ? <Scissor dis={true}/> :
                    states.playerMove === "rock" ? <Rock dis={true}/>:
                    states.playerMove === "paper" ? <Paper dis={true}/> : ""
                    
                }
            </div>
            
        </div>
    )
}

export default Results
