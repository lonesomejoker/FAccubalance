import React from 'react'
import { useState } from 'react';

const ModalState = ({onSubmit}) => {
  const [form,setForm]=useState(
    {page:"",description:"",status:"live"}
    );

  const handleChange=(e)=>{     //changes the state
    setForm({
      ...form,
      [e.target.name]:e.target.value   //takes the name attribute of each input field
    })
  };

  const formValid=()=>{
    if(form.cname && form.pname && form.date && form.num && form.quantity && form.email){
      return true; }
    else{
      return false; }
   }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!formValid()) return ;
    onSubmit(form);
  }

  return (
    <div className='form-pop'>
            
            <div className='item item-a'>
             <p>customer name</p>
             <input type='text' style={{borderRadius:'4px'}} name='cname' value={form.cname} onChange={handleChange}></input>
             <p>product name</p>
             <input type='text' style={{borderRadius:'4px'}} name='pname' value={form.pname} onChange={handleChange}></input>
             <p>Date</p>
             <input type='date' style={{borderRadius:'4px'}} name='date' value={form.date} onChange={handleChange}></input>
            </div>

            <div className='item item-b'>
            <p>Mobile Number</p>
             <input type='number' style={{borderRadius:'4px'}} name='num' value={form.num} onChange={handleChange}></input>
             <p>Quantity</p>
             <input type='number' style={{borderRadius:'4px'}} name='quantity' value={form.quantity} onChange={handleChange}></input>
             <p>Email</p>
             <input type='email' style={{borderRadius:'4px'}} name='email' value={form.email} onChange={handleChange}></input> <br/>
             <div className='btns'>
             <button  type='submit' style={{borderRadius:'4px',marginTop:'0.4rem',color:'white',
             backgroundColor:'#00AB55'}} onClick={handleSubmit}>Submit</button>
             </div>
            </div>

         </div>
  )
}

export default ModalState
