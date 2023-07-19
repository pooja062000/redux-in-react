
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { incrementNumber, decrementNumber } from './Action/index'
function App() {
  
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <header className="App-header">

        <div className='my-outer'>
      <h3>Calculation in React Redux</h3>
      <div className='my-calcute'>

        
      <input type='text' value={myState} className='myform'/>

      <div className='main-buttonsbox'>
      
      <button onClick={() => dispatch(decrementNumber())} className='decrebutt'>-</button>
    
          <button onClick={() => dispatch(incrementNumber())} className='increbutt'>+</button>
          </div>
        </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
