

import './App.css';
import axios from 'axios'
import React, {useEffect} from 'react'



function Books() {
    var [x,setx]=React.useState([])
    var [y,sety]=React.useState(false)
    var [z,setz]=React.useState({
        title:'',author:''
})
    var [book,setbook]=React.useState({
        title:'',author:''
    })
    useEffect(function(){
         getbook()
    },[])

    function getbook(){
        axios.get(' http://localhost:3030/books').then((res)=>{
            setx([...res.data])
         })
    }
    function addbook(){
        axios.post(' http://localhost:3030/books',book).then(()=>{
            getbook()
         })
    }
    function deletebook(id){
        console.log(id)
        axios.delete(' http://localhost:3030/books/'+id).then(()=>{
            getbook()
         })
    }
    function editbook(book){
       setz({...book})
       console.log(book)
        sety(true)
    }
    function updatebook(id){
        axios.put(' http://localhost:3030/books/'+id,z).then(()=>{
            getbook()
         })
    }
    

    
  return (
    <div>
        {
            !y && (
                <div>
                    
                        <input type='text' placeholder='title' name='Title' onChange={(event)=>{setbook({...book,title:event.target.value})}} ></input>
                           
                        <br></br>
                        <input type='text' placeholder='author' name='Author' onChange={(event)=>{setbook({...book,author:event.target.value})}}></input>
                        <br></br>
                       <button onClick={()=>{addbook()}}>Add Book</button>
                    
             </div>
            )
        }
        {
            y && (
                <div>
                <input type='text' placeholder='title' value={z.title} onChange={(event)=>{setz({...z,title:event.target.value})}}></input>
               <br></br>
                <input type='text' placeholder='author' value={z.author} onChange={(event)=>{setz({...z,author:event.target.value})}}></input>
                <br></br>
                  <button onClick={()=>{updatebook(z.id)}}>Update Book</button>
             </div>
            )
        }

    
    
    <div  style={{border:'1px solid',margin:'10px',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
        
      {
        
        x.length>0 && x.map((a)=>{
            return <center>
                <div style={{border:'1px solid',width:'200px',margin:'10px',padding:'50px'}}><b>Title:</b>{a.title}
            <div><b>Author:</b>{a.author}</div>
            <button onClick={()=>{deletebook(a.id)}}>Delete</button>
            <button onClick={()=>{editbook(a)}}>Edit</button>
            </div>
            </center>
        })
      }
    </div>
    </div>
  );
}

export default Books