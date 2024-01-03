import React from 'react'
import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const SignUp = () => {
  const navigate = useNavigate();

  const [email,setEmail]=useState("Enter Email");
  const [password,setPassword]=useState("Enter Password");
  const [data,setData]=useState([])

  const useLogin=()=> {
     setData({
      email:{email},
      password:{password}
     });
     console.log(data);
     setEmail('');
     setPassword('');
  }

  const navigateToLoginPage = () => {
    navigate('/login');
  };
  
  return (
    <div className='App'>
        <div className='container-1'>
            <div className='item item-a'>
            <img src="/images/aconut.png" alt="account" style={{height:'44px'}}></img>
            <p style={{color:'#008542',fontSize:'12px',fontWeight:'bold',fontFamily:'sans-serif'}}>
            Accubalance</p> <br/>
            <h1 style={{fontSize:'19px'}}>Sign Up</h1>
            <p style={{color: "#637381",fontSize:"12px"}}>Please fill up the requirement to proceed</p>

            <p style={{fontSize:'13px'}}>Email*</p> 
            <input id='box-1' type='text' name='email' onChange={(e)=>setEmail(e.target.value)}
             style={{width:300,height:30}} value={email}></input> 

            <p style={{fontSize:'13px',paddingTop:'0.4rem'}}>Password*</p> 
            <input id='box-2' type='password'
             style={{width:300,height:30}}></input> 

            <p style={{fontSize:'13px',paddingTop:'0.4rem'}}>Confirm Password*</p> 
            <input id='box-3' type='password' name='password' onChange={(e)=>setPassword(e.target.value)}
             style={{width:300,height:30}} value={password}></input> <br/>

            <button id="btn-1" style={{width:302}} onClick={useLogin}>Sign Up</button>
            <div className='sano-log'>
            <p>Already have an Account?</p> 
            <p style={{color:'blueviolet'}} onClick={navigateToLoginPage}>Login</p> 
            </div>
            </div>
    
            <div className='item item-2'>
                 <img id="hand" src='/images/acc.png' alt='acc' style={{height:'480px',width:'460px'}}></img>   
            </div>
        </div>
    </div>
  )
}

export default SignUp
