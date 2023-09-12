import logo from './logo.svg';
import './App.css';
import {useFormik } from 'formik';
import * as Yup from 'yup'

function Student() {
    var formik=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
        },
        onSubmit:(values)=>{
          console.log(values)
        },
        validationSchema:Yup.object({
            firstname:Yup.string().max(8,'too big').min(3,'too small').required('firstname is required'),
            lastname:Yup.string().max(8,'too big').min(3,'too small').required('lastname is required'),
            email:Yup.string().max(30,'too big').min(3,'too small').required('email is required')
        })
    })
  return (
    <div>
        
            <form onSubmit={formik.handleSubmit}>
            <label>First Name</label>
            <input type='text' name='firstname' onChange={formik.handleChange}></input><br></br>
            {formik.touched.firstname && formik.errors.firstname}<br></br>
            <label>Last Name</label>
            <input type='text' name='lastname' onChange={formik.handleChange}></input><br></br>
            {formik.touched.lastname && formik.errors.lastname}<br></br>
            <label>Email</label>
            <input type='text' name='email' onChange={formik.handleChange}></input><br></br>
            {formik.touched.email && formik.errors.email}<br></br>
            <button type='submit'>Submit</button>
         </form>
        
   
    </div>
  );
}

export default Student;