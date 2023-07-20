
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { incrementNum, decrementNum } from './Action/index'
function App() {
  
  const myState = useSelector((state) => state.changeTheNumber)
  const hello = useDispatch()


  return (
    <div className="App">
      <header className="App-header">

        <div className='my-outer'>
      <h3>Calculation in React Redux</h3>
      <div className='my-calcute'>

      
      
      <button onClick={() => hello(decrementNum())} className='decrebutt'>-</button>
    
      <input type='text' value={myState} className='myform'/>
          <button onClick={() => hello(incrementNum())} className='increbutt'>+</button>
          </div>
        </div>
      
        
      </header>
    </div>
  );
}

export default App;
