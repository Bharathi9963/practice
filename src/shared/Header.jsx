import React from 'react'

import {useEffect} from 'react'


function Header(){
    
    
    return (
        <div>
    
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"  id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a class="nav-item nav-link active" href="/"><h4>Home</h4> </a>
      <a class="nav-item nav-link " href="/Products"><h4>Products</h4> </a>
      
    </div>
    
  </div>
</nav>

  </div>
    )

    
}
export default Header