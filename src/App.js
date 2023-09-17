
import { Provider } from 'react-redux'

import { store } from './app/Store';
import Countries from './features/Countries';
import { createRoot } from "react-dom/client";
import Header from './shared/Header';
import { Outlet } from 'react-router-dom';
import Show from './features/Show';

function App() {
 
  return (
    <Provider store={store}>
         <div>
        
    </div>
    <Header></Header>
    <Outlet></Outlet>
    </Provider>
   
  );
}

export default App;
