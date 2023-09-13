import React from 'react'
import { connect } from 'react-redux';
import store from './store/Store';
import {increment, decrement } from './Actions';

function Counter(props) {
  return (
   
     <div style={{border:'2px solid'}}>
     <h1>Counter:{props.counter}</h1>
     <button onClick={()=>{props.increm()}}>Increment</button>
     <button onClick={()=>{props.decrem()}}>Decrement</button>
    </div>
   
    
  );
}
function mapToProps(state){return state.c}
function dispatchToProps(dispatch){
    return {
    increm:()=>{dispatch(increment())},
    decrem:()=>{dispatch(decrement())},
   }
}

export default connect(
   mapToProps,
   dispatchToProps
)
(Counter);