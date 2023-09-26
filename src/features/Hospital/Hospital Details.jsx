import { useParams } from "react-router-dom";
import _ from 'lodash';

import { useAddBedsMutation, useGetAllHospitalDetailsbyIdQuery, useLazyGetAllHospitalDetailsbyIdQuery, useLazyGetAllHospitalsQuery } from "../../services/HospApi";
import { useEffect, useState } from "react";
import {getAuth,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
const provider=new GoogleAuthProvider();

function HospitalDetails() {
    var p=useParams()
    var {isLoading,data}=useGetAllHospitalDetailsbyIdQuery(p.id)
    var [updateBeds]=useAddBedsMutation()
    var [gethospitalDetails]=useLazyGetAllHospitalDetailsbyIdQuery()
    var [beds,setBeds]=useState(null)
    var [bedTypes,setBedTypes]=useState([])
    var [selectedBed,setselectedBed]=useState([])

    useEffect(()=>{
       if(data){
        var bedsByCategory =_.groupBy(data.beds,'bedtype');
        setBeds(bedsByCategory)
        var temp =[]
        for(var k in bedsByCategory){
            temp.push(k) 
        }
        setBedTypes([...temp])
       }
    },[data])

   

   function occupybed(bid){
    console.log('bid:',bid)
    setselectedBed(bid)
    var tempbeds=data.beds;
    tempbeds=tempbeds.map((bed)=>{
      if(bed.bedId===bid){
        return {...bed,bedStatus:'occupied'}
      }
      else{
            return bed;
      }
    })

    var bedsByCategory =_.groupBy(tempbeds,'bedtype');
        setBeds(bedsByCategory)
   }

   function updatehospital(){

    const auth=getAuth();
    signInWithPopup(auth,provider)
    .then((result)=>{
        const credential =GoogleAuthProvider.credentialFromResult(result);
        const token =credential.accessToken;
        const user=result.user;
        console.log(user.email)
        console.log(token)
        console.log(beds)
        var temp=Object.values(beds).flat(1);
        temp=temp.map((b)=>{
            
            if(b.bedId===selectedBed){
                console.log(b.bedId)
                console.log(selectedBed)
                return {...b,patients:[...b.patients,{useremail:user.email,token:user.accessToken}]}
            }
            else{
                return b
            }
        })
        
    data={...data,beds:[...temp]}
    updateBeds(data).then(()=>{
        alert('update successs');
        gethospitalDetails(p.id)
    })
    }).catch((error)=>{
        console.log(error)
    })
    
   }

    return (
      <div>
       
        {
            isLoading && ('please wait')
        }
        {
            !isLoading && (
               <center><div className="border border-2 w-25" style={{marginTop:'150px'}}>
                    <h5>{data.hospitalName.toUpperCase()}</h5>
                    <div>
                        {
                            bedTypes.map((t)=>{
                                return <li>
                                    {t}-{beds[t].length}
                                    <br></br>
                                    {
                                        beds[t].map((bed)=>{
                                            return (
                                                <>
                                               {bed.bedStatus==='open' && <i class="bi bi-clipboard h-3 m-2" onClick={()=>{occupybed(bed.bedId)}}></i>}
                                               {bed.bedStatus==='occupied' && <i class="bi bi-clipboard-fill h-3 m-2" onClick={()=>{occupybed(bed.bedId)}}></i>}
                                               
                                                </>
                                            )
                                            
                                        })
                                    }
                                </li>
                            })
                        }
                    </div><br></br>
                    <button onClick={()=>{updatehospital()}} className="m-4">Book IT</button>
                    </div></center> 
            )
        }
      </div>
      
    );
  }
  
  export default HospitalDetails;