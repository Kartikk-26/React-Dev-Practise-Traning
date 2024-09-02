import React from "react";
import { Link } from "react-router-dom";
function Navbarr(){
    return(
        <div className="bg-blue-500 h-6 flex justify-center items-center gap-4">
            <Link to ='/'>Home</Link>
            <Link to = '/Services'>Services</Link>
        </div>
    )
}

export default Navbarr;