import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      
      .required('Required'),
    lastname: Yup.string()
      
      .required('Required'),
   
  });
 

function Student() {
    return (
      <div className="App">
       <Formik
       initialValues={{firstname:'',lastname:''}}
       
       onSubmit={(values)=>{
        console.log(values)
       }}
       validationSchema={SignupSchema}

       > 
       {
        (fobj)=>{
            return (
                <form onSubmit={fobj.handleSubmit}>
                 <input type='text' name='firstname' onChange={fobj.handleChange} onBlur={fobj.handleBlur}></input>
                 
                 {
                    fobj.touched.firstname && fobj.errors && fobj.errors.firstname
                 }
                 <br></br>
                 <input type='text' name='lastname'  onChange={fobj.handleChange} onBlur={fobj.handleBlur}></input>
                
                 {
                   fobj.touched.lastname && fobj.errors && fobj.errors.lastname
                 }
                  <br></br>
                 <button type='submit'>Submit</button>
                </form>
            )

        }
       }

       </Formik>
         
      </div>
    );
  }
  
  export default Student;
  