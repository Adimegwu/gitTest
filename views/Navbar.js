import React, {useState} from "react";

let Navbar = () => {

    const [] = useState({})
    return(
        <React.Fragment>
           <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
               <a href="/"className="navbar-brand"> AKDMKS</a>
               <div className="collapse navbar-collapse">
                   <ul className="navbar-nav">
                   <li className="nav-item">
                       <a href="/" className="nav-link"> Sessions</a>
                   </li>
                   </ul>
               </div>
           </nav>
        </React.Fragment>
    )
};

export default Navbar ;