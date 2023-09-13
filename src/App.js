import React from 'react'
import { Provider } from 'react-redux';
import store from './store/Store';
import Counter from './Counter';

function App() {
  return (
   <Provider store={store}>
     <div style={{border:'2px solid'}}>
     <h1>Welcome</h1>
    </div>
    <Counter></Counter>
   </Provider>
    
  );
}

export default App;
