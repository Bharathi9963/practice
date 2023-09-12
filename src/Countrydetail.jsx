import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect } from 'react';
import usePagination from '@mui/material/usePagination/usePagination';

function Details() {
    var {fname}=useParams();
    var [z,setZ]=React.useState(null)
    useEffect(()=>{
           axios.get('https://restcountries.com/v3.1/name/'+fname).then((res)=>{
            setZ({...res.data[0]})
           })
    },[fname])
  return (
    <div className="mybox">
      <h1>
        {
            z &&(
                <h1>{z.name.common}</h1>
            )
        }
      </h1>
    </div>
  );
}

export default Details;