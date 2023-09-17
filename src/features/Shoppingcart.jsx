import React from "react";
import axios from "axios";
import { Link, Outlet } from 'react-router-dom';
import { useGetAllProductsQuery } from "./services/Shopping";


function Shoppingcart(){
    var {isLoading,data}=useGetAllProductsQuery();
    var [products,setproducts]=React.useState([])
    var [add,setadd]=React.useState(0)
    var [cart,setcart]=React.useState([])
    React.useEffect(function(){
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        var items = res.data.map((y)=>{
          return {...y,IsProductInCart:false,count:0,status:false}
      });
        setproducts(items)
      });

    },[]);
   
    
    function addtocart(i){
       var temp=[...products]
       temp[i].IsProductInCart=true;
       temp[i].count++;
       setcart([...cart,temp[i]])
       setadd(add+1)
    } 
    
    function inc(i){
      var temp=[...cart]
       temp[i].count++
        setcart(temp)
    }
    function dec(i){
      var temp=[...cart]
       temp[i].count--
        setcart(temp)
        
    }
    
    function remove(b,ind){
        let Confirm = window.confirm("Are you sure you want to delete the product")
        if(Confirm){
            var temp=[...cart]
            temp.splice(ind,1)
            setcart(temp,ind)
            setadd(add-1)
          
        }
        var x=products.findIndex((c)=>{
            return (c.id===b.id)
        })
        products[x].IsProductInCart=false;
        products[x].count=0;
    }
    
    return(
        
        <div className="d-flex flex-wrap">
            <div style={{width:'95%'}}>
                <div style={{display:'flex'}}>
                <center><h3 >PRODUCTS...</h3></center>
            
                </div>
            
            <ul className="d-flex flex-wrap">
            
            {  !isLoading &&
                products.map((a,i)=>{
                    return <div className="card shadow-lg p-3 rounded m-4 " style={{width: '14rem',backgroundColor:'lightpink'}}>
                    
                    <div className="card-body d-flex flex-column justify-content-between">
                        <img src={a.image} style={{height:'160px',width:'160px'}} alt="Card image cap"/>
                        <h5 className="card-title">{a.title}</h5>
                        <p className="card-text">{a.price}</p>
                        
                    <div>
                    
                   <button  className="btn btn-info shopping" onClick={()=>{addtocart(i)}}   disabled={a.IsProductInCart?true:false}>{a.IsProductInCart?'Added':'Add to cart'}</button>
                      
                      
                    </div>
                      
                    </div>
                  </div>
                 
                })
            }
           </ul>
            </div>
            <button class="btn btn-primary h-25 w-5 m-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Cart{add}</button>

<div class="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    {
        <div className='p-3' style={{position:'fixed',overflowY:'scroll',height:'100%',right:'35px',width:'45%'}}>
        <center >
        <h1 style={(cart.length===0)?{display:'block'}:{display:'none'}}>Your Cart is Empty</h1></center>

       {
        cart.length>0 && cart.map((b,ind)=>{
            return <div className="card shadow-lg  rounded  m-2 mb-4" style={{backgroundColor:'lightpink'}} >
               <div className="card-body d-flex justify-content-between" >
                    <center><img src={b.image} style={{height:'90px',width:'90px'}} alt="Card image cap"/></center>
                    <h5 className="card-title mb-5" style={{marginLeft:'12px'}}>{b.title}</h5>
                    <p className="card-text">${(b.count*b.price).toFixed(2)}</p></div>
            <div><center style={{position:'absolute',bottom:'20px',left:'120px'}}>
            <button className="btn btn-info" onClick={()=>{dec(ind)}} disabled={b.count===1?true:false}>-</button>
            <span>{b.count}</span>
            <button className="btn btn-info" onClick={()=>{inc(ind)}}>+</button>
            <button className="btn btn-danger" style={{position:'absolute',left:'100px'}} onClick={()=>{remove(b,ind)}}>Remove</button></center>
            </div>
            </div>
            
        })
       }
        <div style={(cart.length===0)?{display:"none"}:{display:"block"}}>
            
        <div style={{border:'1px dashed black'}}></div>
        <b >TOTAL PRICE : <span style={{position:'absolute',left:'85%'}}>$
        {
            cart.reduce((t,p)=>{
                t+=p.price*p.count
                return t;
            },0).toFixed(2)
        }
        </span>
        </b>
        </div>
    </div>
    }
  </div>
</div>
           
        </div>
    )
}
export default Shoppingcart;