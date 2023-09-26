import { hospApi, useGetAllHospitalsQuery } from "../services/HospApi";
import { Link } from "react-router-dom";

function Home() {
  var {isLoading,data}=useGetAllHospitalsQuery()
    return (
      <div className="d-flex flex-wrap p-2" >
      
        {
          isLoading && (<b></b>)
        }
        {
          !isLoading && (
            data.map((hospital)=>{
              return <li className="w-25  p-2" style={{listStyle:'none'}}>
               <div className="border border-2 p-2">
               <li style={{marginLeft:'50px'}}><b>{hospital.hospitalName}</b> </li>
                <br></br>
                <img src={hospital.image} style={{width:'200px',height:'150px'}}></img>
                <br></br>
                 <li>Total Beds::{hospital.beds.length}</li> 
                <br></br>
                <Link to={`details/${hospital.id}`}>Details</Link>
               </div>
              </li>
            }
            )
          )
        }
      </div>
    );
  }
  
  export default Home;