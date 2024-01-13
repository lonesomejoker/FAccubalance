import React from 'react'
import { IoSearch } from "react-icons/io5";


const Searchbar = () => {
  return (
    <form className='w-[15vw] relative'>
       <div className='relative'>
          <input type='search' placeholder='search here' className='w-full p4 rounded-full bg-slate-300'></input>
          <button className='absolute right-1 top=1/2 -translate-y=1/2 p-1 bg-slate-400 rounded-full'>
            <IoSearch/>
          </button>
       </div>
      
    </form>
  )
}

export default Searchbar
