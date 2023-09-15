import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import fakestore from './db.json'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  
  return (
    <div className="App">
      {
        <div className="d-flex flex-wrap">
          {
          fakestore.products.map((a)=>{
          return  <div  className="card shadow-lg p-3 mb-5 bg-white rounded m-4 bg-info-subtle text-emphasis-info" style={{width: '14rem'}}>          
          <div className="card-body d-flex flex-column justify-content-between"  >
          <img src={a.image} style={{height:'160px',width:'160px'}} alt="Card image cap"/>
            <h5 className="card-title">{a.title}</h5>
            <p className="card-text">{a.price}</p>
            <div>
            </div>
            
          </div>
        </div>
        
        })
        }
      </div>
      }
    </div>
  );
}

export default App;
