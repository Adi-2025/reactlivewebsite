import React, { useState } from 'react';


const Contact = () =>{

  const [data,setData] = useState({
    fullname:"",
    phone: "",
    email:"",
    msg: "",
  }); 


  const InputEvent = (event) =>{
      const {name,value} = event.target;
      setData((preVal) =>{
        return {
           ...preVal,[name]:value,
        }
      })

  };

  const formSubmit = () => {};


 return(<>
   <div className="my-4">
     <div className="text-center"><h1>Contact Us</h1></div>
   </div>
   <div className="container">
      <div className="row">
          <div className ="col-md-6 col-10 mx-auto">
            <form onSubmit = {formSubmit}>
              <div class="form">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                name="fullname"
                value = {data.fullname}
                onChange = {InputEvent}
                placeholder="Enter your name" />
              </div>

              <div class="form- my-3">
                <label for="exampleFormControlInput1">Phone</label>
                <input type="number" class="form-control" id="exampleFormControlInput1"
                name="phone"
                value = {data.phone}
                onChange = {InputEvent}
                 placeholder="mobile" />
              </div>

              <div class="form- my-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                name="email"
                value = {data.email}
                onChange = {InputEvent}
                 placeholder="name@example.com" />
              </div>
              
              <div class="form- my-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                 name="msg"
                value = {data.msg}
                onChange = {InputEvent}
                ></textarea>
              </div>

              <button class="btn btn-outline-primary mb-5" type="submit">Submit</button>
            </form>
          </div>
      </div>
   </div>
 </>);
};


export default Contact;
