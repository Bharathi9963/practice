import { useState } from "react";
import { useAddBedsMutation, useGetAllHospitalsQuery } from "../../services/HospApi";

function AddBed() {
  var [bedcount,setbedcount]=useState(0)
  var [bedprice,setbedprice]=useState(0)
  var [selectedbedtype,setselectedbedtype]=useState('')
    var {isLoading:isHospitalsLoading,data:hospitals}=useGetAllHospitalsQuery();
    var [addBedsToDB]=useAddBedsMutation()
    // var [newbed,setnewbed]=useState({
    //     bedStatus:'open',
    //     bedtype:'',
    //     bedPrice:0,
    //     patients:[]
    // })
   
    var [selectedHospital,setselectedHospital]=useState(null)
    
    function savebed(){
      var newbeds=[];
      var numBeds=selectedHospital.beds.filter(b=>b.bedtype===selectedbedtype).length;
      for(var i=0;i<=bedcount-1;i++){
        {
         var newbed={
          bedStatus:'open',
          bedtype:selectedbedtype,
          bedprice,
          patients:[],
          bedId:`${selectedbedtype+(numBeds+i+1)}`
         }
         newbeds.push(newbed);
        }
        var latestHospitalDetails ={...selectedHospital,beds:[...selectedHospital.beds,...newbeds]}
        setselectedHospital({...selectedHospital,beds:[...selectedHospital.beds,...newbeds]})
        addBedsToDB(latestHospitalDetails)
      }
    }
    
    return (
        <div className="border border-2 border-danger m-2 p-2">
        <h5>Add bed</h5>
        {
            isHospitalsLoading && (<b>...Wait</b>)
        }
        {
            !isHospitalsLoading && (
                <select onChange={(e)=>{setselectedHospital(JSON.parse(e.target.value))}}>
                    <option value={null} disabled selected>Please Select
                        
                    </option>
                    {
                        hospitals.map((h)=>{
                         return <option value={JSON.stringify(h)}>{h.hospitalName}</option>
                        })
                    }
                </select>
            )
        }
        {
          selectedHospital && selectedHospital.bedTypes.length>0  && (
            <>
            <select className="m-2" onChange={(e)=>{setselectedbedtype(e.target.value)}}>
              <option value={null} disabled selected>Please select</option>
            {
               selectedHospital.bedTypes.map((bt)=>{
                    return <option value={bt.bedType}>{bt.bedType}</option>
                  })
            }
            </select>

           <br></br><br></br>
          
          <input type='number' placeholder='enter bed count' onChange={(e)=>{setbedcount(e.target.value)}}></input>
          <br></br><br></br>
           <input type='number' placeholder="enter bed price" onChange={(e)=>{setbedprice(e.target.value)}}></input>
           
        
            </>
            
          )
        } 
        <br></br><br></br>
       <button onClick={()=>{savebed()}}>Save beds</button>
      </div>
      
    );
  }
  
  export default AddBed;