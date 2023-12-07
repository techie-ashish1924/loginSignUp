import React, { useState } from 'react'


import '../Constants/login.css'

import SignUp from '../Components/Signup'

import {useNavigate} from 'react-router-dom';

export default function Loginauth() {

  const history = useNavigate();

  const [form,setForm] = useState({});


  const [data,setData] = useState({});


  function handleForm(e) {
   

    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit= async (e)=>{
    //e.preventDefault();
    //console.log(e.target.value, e.target.name); nmae + username
    e.preventDefault();
    const response = await fetch('https://backend-loginsignup.onrender.com/login',{
      // method:'GET'
      method:'POST',
      body:JSON.stringify(form), //data form he bhjne ke leye string me bhjke
      headers:{//kesa type ka data send kr rahe he vo
        'content-type':'application/json'
      }
    })
    //console.log(response);


    const data1 = await response.json();
    setData(data1);

    {if(response===null){
      alert("Errr")
    }else{
      history('/Welcome');
     
    }}
  }


  return (
    <div>

      <div id="login-content">
        {/* <p>{JSON.stringify(form)}</p> */}
        <div id='maindivision'>

          <img  id='logogla'></img>
          <br />
          <span id="head">Please Login to your account</span>
          <div id='details'>
            <br />
            <form id="form" onSubmit={handleSubmit}>
              <label id="head">Enter Email</label>
              <input type="email" name="email" placeholder='Email' onChange={handleForm}></input><br></br>
              <label id="head">Enter Password</label>
              <input type='password' name="password" placeholder='Password' onChange={handleForm}></input><br></br>
              <button id="loginbutton" type='submit'>Login</button>

              <span id="head">Dont Have an Account ? <a href='/SignUp' id="signuplink">Sign Up</a></span>
            </form>
          </div>


        </div>
      </div>


    </div>
  )
}
