import React from 'react';
import Score from './components/Score.js';
import Paper from './components/Paper';
import Rock from './components/Rock';
import Scissor from './components/Scissor';
import Rules from './components/Rules';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Results from './components/Results';
import { resetAll } from './store/gameSlice.js';


function App() {
  const [rulesV, setRulesV] = useState('hidden');
  const states = useSelector((state) => state.gameStates)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button
        onClick={() => {
          rulesV === 'hidden' ? setRulesV('visible') : setRulesV('hidden');
          rulesV === 'hidden' ? document.querySelector('.rules').style.opacity = 1 : document.querySelector('.rules').style.opacity = 0;
        }} className="show-hide"
        >
          Rules
      </button>
      <button 
      onClick={() => {
        dispatch(resetAll())
      }}
      className="reset">
        Reset Scores
      </button>
      <Rules visib={rulesV} />
      <Score />
      <div id="f">
        <div 
        style={{
          visibility: states.hideShowMove,
          transformOrigin: '50% 50%'
        }}
        id="choose-move">
          <Paper dis={false}/>
          <Rock dis={false}/>
          <Scissor dis={false}/>
        </div>
        <Results/>
      </div>
    </div>
  );
}

export default App;
