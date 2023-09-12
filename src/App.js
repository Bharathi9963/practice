import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly</h1>
      <Link to='/Aboutus'>Aboutus</Link>
      &nbsp;
      <Link to='/courses'>Courses</Link>
      &nbsp;
      <Link to='/countries'>Countries</Link>
      &nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
