import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllCountriesDetailsQuery } from './services/RestCountries'
import { Link } from 'react-router-dom'


function CountryDetail(){
    var x=useParams()
    var {isLoading,data}=useGetAllCountriesDetailsQuery(x.cname);
    var url='https://www.google.com/search?q='
    var ur1=x.cname +'+google+maps&rlz=1C1NMEO_enIN1038IN1041&oq='
    var ur2=x.cname+'+google&aqs=chrome.1.69i57j0i512l9.5939j0j15&sourceid=chrome&ie=UTF-8'
    var link=url+ur1+ur2
    var ur3='https://en.wikipedia.org/wiki/'+x.cname
   
    return (
        <div>
            
            <ul >
            
                {
                    isLoading && <h4>Loading...</h4>
                }
                <div>
                {
                    !isLoading && (
                        data.map((a)=>{
                            return <div className="container-fluid position-relative half-fluid">
                            <div className="container">
                              <div className="row">
                          
                                
                                <div className="col-lg-6 position-lg-absolute left-half h-100">
                                  <div style={{width:'100px',height:'170px'}}><img src={a.flags[0]} style={{width:'650px',marginTop:'100px'}}></img></div>
                                </div>
                          
                                
                                <div className="col-lg-6 offset-lg-6 py-5 ps-lg-5">
                                  <h1>{a.name.common} Details</h1>
                                  <h5 className="text-muted pb-3"><b>Country Name::{a.name.common}</b></h5>
                                  <h5 className="text-muted pb-3"><i>Capital::{a.capital}</i></h5>
                                  <div className='d-flex '>

                                  <p><a href={link} target='blank'>Show google map</a></p>
                                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                  <p><a href={ur3} target='blank'>Know More....</a></p>
                                  </div>

                                  <Link to='/Countries'><button class="badge text-bg-secondary">Back</button></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                       
                             
                        })
                    )
                }
                </div>
                  
                
             </ul>    
        </div>
    )
}
export default CountryDetail