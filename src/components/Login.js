import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
  const navigate = useNavigate();

  const formValid=()=>{
    if(form.password && form.email){
      return true; }
    else{
      return false; }
   }

  const handleLogin = () => {
    // Perform login logic
    // ...
    if(!formValid()) return ;
    navigate('/')

    // Call the onLogin prop to update the parent component's state
    // onLogin();
  };

  const [form,setForm]=useState({});

  const handleChange=(e)=>{     //changes the state
    setForm({
      ...form,
      [e.target.name]:e.target.value   //takes the name attribute of each input field
    })
  };


  return (
    <>
      <div className='container-2'>
            <div className='item item-1'>
            <img src="/images/aconut.png" alt="account" style={{height:'44px'}}></img>
            <p style={{color:'#008542',fontSize:'12px',fontWeight:'bold',fontFamily:'sans-serif'}}>
            Accubalance</p> <br/>
            <h1 style={{fontSize:'19px'}}>Login</h1>
            <p style={{color: "#637381",fontSize:"12px"}}>Please fill up the requirement to proceed</p>

            <p style={{fontSize:'13px'}}>Email *</p> 
            <input id='box-1' type='text' name='email' style={{width:300,height:30}} value={form.email} onChange={handleChange}></input>

            <p style={{fontSize:'13px'}}>Password *</p> 
            <input id='box-2' onChange={handleChange} type='password' name='password' style={{width:300,height:30}} value={form.password}></input> <br/>
            <button id="btn-1" style={{width:300}} onClick={handleLogin}>Login</button>
            </div>
    
            <div className='item item-2'>
                 <img id="hand" src='/images/acc.png' alt='acc' style={{height:'480px',width:'460px'}} ></img>
            </div>
        </div>
    </>
  )
}

export default Login
