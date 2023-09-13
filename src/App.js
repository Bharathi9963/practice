

import { Provider } from 'react-redux'
import Counter from './features/Counter';
import { store } from './app/Store';

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
