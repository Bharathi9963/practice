import React from "react";
import axios from "axios";
function Shop(){
    var [products,setproducts]=React.useState([])
    var [cart,setcart]=React.useState([])
    React.useEffect(function(){
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        var products = res.data.map((y)=>{
          return {...y,IsProductInCart:false,count:0}
      });
        setproducts([...products])
        
      })
    },[])
   
    function addtocart(i){
      var temp=[...products]
      temp[i].IsProductInCart=true
       temp[i].count++
       setcart([...cart,temp[i]])
    }
    function addto(i){
      var temp=[...cart]
       temp[i].count++
        setcart(temp)
    }
    function add(i){
      var temp=[...cart]
       temp[i].count--
        setcart(temp)
    }
    function remove(b,ind){
     var temp=[...cart]
     temp.splice(ind,1)
    
     setcart(temp,ind)

    }
    return(
        <div className="d-flex flex-wrap">
            <div style={{width:'60%'}}>
            <ul className="d-flex flex-wrap">
            {
                products.map((a,i)=>{
                    return <div  className="card shadow-lg p-3 mb-5 bg-white rounded m-4 bg-info-subtle text-emphasis-info" style={{width: '14rem'}}>
                    
                    <div className="card-body d-flex flex-column justify-content-between"  >
                    <img src={a.image} style={{height:'160px',width:'160px'}} alt="Card image cap"/>
                      <h5 className="card-title">{a.title}</h5>
                      <p className="card-text">{a.price}</p>
                      
                      <div>
                    
                      <button  className="btn btn-info" onClick={(ev)=>{addtocart(i)}}  disabled={a.IsProductInCart?true:false}>Add to cart</button>
                      
                      
                      </div>
                      
                    </div>
                  </div>
                })
            }
           </ul>
            </div>
            <div className='p-3'style={{width:'40%',border:'5px dashed black'}}>
              <h1>Cart</h1>
               {
               
                  cart.length>0 && cart.map((b,ind)=>{
                    return <div className="card shadow-lg p-3  bg-white rounded m-2 bg-info-subtle text-emphasis-info">
                       <div className="card-body d-flex justify-content-between" >
                      <center><img src={b.image} style={{height:'90px',width:'100px'}} alt="Card image cap"/></center>
                      <h5 className="card-title">{b.title}</h5>
                      <p className="card-text mb">{b.price}</p></div>
                      <div style={{position:'absolute',bottom:'20px',left:'250px'}}>
                    <button className="btn btn-info" onClick={()=>{add(ind)}} disabled={b.count===1?true:false}>-</button>
                    <span>{b.count}</span>
                    <button className="btn btn-info" onClick={()=>{addto(ind)}}>+</button>
                    <button className="btn btn-danger" style={{position:'absolute',left:'100px'}} onClick={()=>{remove(b,ind)}} >Remove</button>

                    </div>
                    
                    </div>
                })
               }
               
            </div>
           
        </div>
    )
}
export default Shop;