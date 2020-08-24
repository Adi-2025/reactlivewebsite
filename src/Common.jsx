import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) =>{
 return(<>

 <section id="header" className="d-flex align-items-center">
    <div className = "container-fluid">
        <div className = 'row'>
            <div className = "col-10 mx-auto">
            <div className = 'row'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name} <h2 style = {{color:"#3498db"}}>Aditya's Technical group</h2></h1>
                <h4 className="my-3">We are the team of talented developer in the field of Computer technology</h4>
                <div className ="mt-3">
                  <NavLink to={props.visit} className ="btn btn-lg btn-primary mb-3">{props.btname}</NavLink>
                </div>
              </div>
              

              <div className="col-lg-6 order-1 order-lg-2 header-img my-3">
                  <img src ={props.imgsrc} style={{height:'auto',width:'100%'}} className="mt-5" alt ="Common img"/>
              </div>
              </div>
            </div>
        </div>
    </div>

 </section>
 
  </>);
};


export default Common;
