import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {FaHome} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { BiPurchaseTag } from "react-icons/bi";
import { RiCoinsLine } from "react-icons/ri";
import { TbStairsUp } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const routes=[{
   path:"/",
   name:"Dashboard",
   icon:<FaHome color='#00AB55'/>,
},
 {
    path:"/purchase",
    name:"Purchase Report",
    icon:<BiPurchaseTag color='blue'/>,
 },
 {
    path:"/sales",
    name:"Sales Report",
    icon:<RiCoinsLine color='green'/>,
 },
 {
    path:"/stocks",
    name:"Stocks Report",
    icon:<TbStairsUp color='yellow'/>,
 },
]

const Sidebar = ({children}) => {
   const [isOpen,setIsOPen]=useState(false); 
   const toggle=()=> setIsOPen(!isOpen);

  return (
    <div className='main-container'>
      <motion.div animate={{width:isOpen?"200px":"200px"}} className='sidebar'>
      <div className='top-section'>
         <img id='acc' src='./images/aconut.png' alt='acc' style={{height:'20px'}}></img>
        {isOpen && <h1 style={{fontSize:'15px',color:'#008542'}}>Accubalance </h1>}
        <div className='bar'><FaBars onClick={toggle}/></div>
      </div>
      <div>
      <h1 style={{fontSize:'15px'}}>Menus</h1>
       </div>

      <section className='routes'>
         {  routes.map((route)=>(
               <NavLink to={route.path} key={route.name} className='link' 
               style={{textDecoration:'none',color:'white'}}>
                 <div className='icon'>{route.icon} </div>
                 <div className='icon-text'>{route.name}</div>  
               </NavLink> )
            ) }
      </section>
      
      <div className='out'>
        <RiLogoutBoxLine color='red'/>
       <button id='btn-log'style={{fontSize:'15px',color:'red'}}>Log Out</button>
      </div>
      </motion.div>
      <main>
         {/* {children} */}
      </main>
    </div>
  )
}

export default Sidebar
