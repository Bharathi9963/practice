import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './app/Store';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Shoppingcart from './features/Shoppingcart';
import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
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
