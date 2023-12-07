import React from 'react'
// import logo from "../Images/logo.png"

import Login from '../Components/Login'

import '../Constants/signup.css'

import {Navigate, useNavigate} from 'react-router-dom';



export default function SignUp() {


  const [form,setForm] = React.useState({});


  const [data,setData] = React.useState({});

  const [username,setUsername] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [c_password,setCPassword] = React.useState("");
  const [email,setEmail] = React.useState("");

  const history = useNavigate();

  function handleForm(e) {
   

    setForm({//use [] for key
      ...form, //purane value pure rahenge esse
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit= async (e)=>{
    


   e.preventDefault();
    const response = await fetch('https://backend-loginsignup.onrender.com/signup',{
      // method:'GET'
      method:'POST',
      body:JSON.stringify(form), //data form he bhjne ke leye string me bhjke
      headers:{//kesa type ka data send kr rahe he vo
        'content-type':'application/json'
      }
    })


    
    
    const data1 = await response.json();
    setData(data1);
    // console.log(data.password);
    // console.log(username);
        
    setUsername(data.username);
    //console.log(username);
    
    setEmail(email);
    
    
    // console.log(response)
    //console.log(response.username.value);

     history({
      pathname:'/',
      state:{
        username:username
      }
    });
    alert('Login Successfully');


 }



 return (
   <>
   <div id="signup-content">
       {/* <h5>{data.username}</h5> */}
       <div id='signup-maindivision'>

      <img  id='logogla'></img>
       <br />
       <span id="head">Please Login to your account</span>
       <div id='details'>
         <br />
         <form id="form" onSubmit={handleSubmit}>
           <label id="head">Enter User Name</label>
           <input type="text" name="username" placeholder='Username' onChange={handleForm}></input><br></br>
           <label id="head">Enter Password</label>
           <input type='password' name="password" placeholder='Password' onChange={handleForm}></input><br></br>
           <label id="head">Enter Confirm Password</label>
           <input type='password' name="c_password" placeholder='Password' onChange={handleForm}></input><br></br>
           <label id="head">Enter Email</label>
           <input type='email' name="email" placeholder='Email' onChange={handleForm}></input><br></br>
           <button id="signupbutton" type='submit' onClick={handleSubmit}>Submit</button>
           <br></br>
           
           <span id="head">Dont Have an Account ? <a href='/' id="signuplink">Login</a></span>
           <br></br>
           <span id='heador'>OR</span>
           <button id="google-signup">
             <img id="googlelogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQ9p6WGwI-QzZd14tZx1iUX-XB6blszoRPi1iU9GVIA&usqp=CAU&ec=48665698"/>
             <span id='head'>Sign Up with Google</span>
           </button>
           
           </form>
           </div>
 
 
         </div>
       </div>
     
     
     
     
     </>
   )
 }
