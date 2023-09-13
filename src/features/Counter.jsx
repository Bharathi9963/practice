
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice';


function Counter() {
    const x= useSelector((state) => state.counter)
    const dispatch= useDispatch()
   
  return (
    
     <div style={{border:'2px solid'}}>
      <h1>Counter:{x.counter}</h1>
      <button onClick={(state,action)=>{dispatch(increment())}}>Increment</button>
      <button onClick={(state,action)=>{dispatch(decrement())}}>Decrement</button>
    </div>
   
   
  );
}

export default Counter;