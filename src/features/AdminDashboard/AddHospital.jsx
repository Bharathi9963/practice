import { Formik } from 'formik';
import React from 'react';
import { bedTypes } from '../../Constants';
import { useAddHospitalMutation } from '../../services/HospApi';
function AddHospital() {
    var [newbedType,setnewbedType]=React.useState({
        bedType:'',
        price:0
    })
    var [addedBedTypes,setaddedBedTypes]=React.useState([])
    var [addHospital]=useAddHospitalMutation()
   
    function addBedType(){
         setaddedBedTypes([...addedBedTypes,newbedType])
    }
    return (
      <div className="border border-2 border-info m-2 p-2 ">
        
      <center><h2>Add Hospital</h2></center>  
        <Formik
       initialValues={{ 
        hospitalName: '', 
        image: '',
        area:'',
        reviews:[],
        bedTypes:[],
        beds:[],
     }}
       
       onSubmit={(values)=>{
        values.bedTypes=[...addedBedTypes]
        addHospital(values).then((res)=>{
            console.log('res::',res)
        })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         
       }) => (
         <center><form onSubmit={handleSubmit}>
           <input
             type="text"
             name="hospitalName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.hospitalName}
             placeholder='Enter Hospital Name'
           />
           <br></br>
           <br></br>
         
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             placeholder='Enter Image'
           />
           <br></br>
           <br></br>
           <input
             type="text"
             name="area"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.area}
             placeholder='Enter Hospital Location'
           />
           <br></br>
           <br></br>
           <ul>
            {
              addedBedTypes.length>0 && (<u>selected bedtypes</u>)
            }
            {
              addedBedTypes.length>0 && addedBedTypes.map((a)=>{
               return <li>
                <i>{a.bedType}</i>&nbsp;
                <b>{a.price}</b>&nbsp;
               </li>
              })
            }
           </ul>
          
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  + Bed Type
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add Bed Type with Price</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label>Select Bed Type</label>
        <select onChange={(e)=>{setnewbedType({...newbedType,bedType:e.target.value})}}>
            <option value={null} disabled selected>Please Select

            </option>{

                bedTypes.map((bedtype)=>{
                 return <option value={bedtype}>{bedtype}</option>
                })
            }
        </select>
        <br></br>
        <br></br>
        <label>Set the Price</label>
        <input type='text' placeholder='Enter the price' onChange={(e)=>{setnewbedType({...newbedType,price:e.target.value})}}></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  onClick={()=>{addBedType(values)}}>Add Bed Type</button>
      </div>
    </div>
  </div>
</div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
         </center>
       )}
     </Formik>
      </div>
    );
  }
  
  export default AddHospital;