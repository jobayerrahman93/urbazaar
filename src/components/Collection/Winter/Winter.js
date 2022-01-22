import React from "react";
import './winter.css';
import WinterContent from './WinterContent/WinterContent';

const Winter = () => {

  


    return (
        <div className="main-page ">
        <div className="row p-0 mx-0">
          {/* side nav selo seita delete kore deoa hoiche */}
  <div className="col-md-12 mt-2 p-0 ps-2 overflow-auto sidenav">
  
        
      <WinterContent></WinterContent>
  </div>
  
  
        </div>
      </div>
    );
};

export default Winter;