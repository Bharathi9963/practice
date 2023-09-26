

import React from "react";
import { Outlet,Link } from "react-router-dom";

function AdminDashBoard() {
  return (
    <div>
      
      <h5 className="m-2">AdminDashBoard....</h5>
     <center> <Link to='addhospital'><button className="btn btn-success">+ Add Hospital</button></Link></center>
     <center><Link to='addBed'><button className="btn btn-info m-2">+ Add Bed</button></Link></center>
      <Outlet></Outlet>
    </div>
  );
}

export default AdminDashBoard;