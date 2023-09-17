import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useGetAllCountriesQuery } from './services/RestCountries'



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

function Countries(){
    var {isLoading,data}=useGetAllCountriesQuery();
    
    

    
    return (
        <div>
            <h3>Countries...</h3>
            
            <ul >
            
                {
                    isLoading && <h4>Loading...</h4>
                }
                <div className="d-flex flex-wrap">
                {
                    !isLoading && (
                        data.map((a)=>{
                            return <Link to={a.name.common} className="link-underline-light"><div className="card shadow-lg p-3  bg-white rounded m-4 bg-info-subtle text-emphasis-info" style={{ width: '20rem' }}>
                            <div className="card-body d-flex flex-column justify-content-between" >
                           <img src={a.flags[0]} style={{height:'100px',width:'160px'}} alt="Card image cap"/>
                           <span className="card-title">{a.name.common}</span>
                           </div>
                          
                         </div>
                         </Link>
                             
                        })
                    )
                }
                </div>
                  
                
             </ul>    
        </div>
    )
}
export default Countries