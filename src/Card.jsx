import React from 'react';


const Card = (props) =>{
 return(<>
  
               <div className = "col-md-4 col-10 mx-auto">
               <div className="card">
                      <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} style={{height:'15rem'}}/>
                      <div className="card-body">
                        <h3 className="card-title">{props.title}</h3>
                        <p className="card-text">Some Services on which we are currently working</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                </div>
            </div>

 </>);
};


export default Card;
