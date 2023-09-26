
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

import Header from './shared/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/Store';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { firebaseConfig } from './firebase';

export const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);

function App() {
  return (
    <Provider store={store}>
         <div>
      <Header></Header>
      <Outlet></Outlet>
      
    </div>
    </Provider>
    
  );
}

export default App;
