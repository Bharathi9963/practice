import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';

function Country() {
    var [x,setX]=React.useState([])
    useEffect(()=>{
      axios.get('https://restcountries.com/v3/all').then((res)=>{
         setX(res.data)
      })
    },[])
    
  return (
    
     <div className='d-flex'>
        <ul>
        {
        x.length>0 && x.map((country)=>{
         return <li>
            <Link to={'details/'+country.name.common}>{country.name.common}</Link>
            </li>
        })
      }
        </ul>
       <div>
       <Outlet></Outlet>
       </div>
     
    </div>
    
  );
}

export default Country;