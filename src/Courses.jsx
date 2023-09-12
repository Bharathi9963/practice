import logo from './logo.svg';
import './App.css';
import React from 'react';
function Courses() {
var [courses,setcourses]=React.useState([
    'reactjs',
    'Angular',
    'AWS',
    'Web development',
])
  return (
    <div className="App">
      <h1>Welcome to Courses</h1>
      {
        courses.map((a)=>{
            
           return <li>{a}</li>
        })
      }
    </div>
  );
}

export default Courses;