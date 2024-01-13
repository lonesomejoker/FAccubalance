import React from 'react'
import './Table.css'
import { FaTrash } from "react-icons/fa";


const Table = ({rows,deleteRow}) => {
  

  return (
    <div className='table-wrapper'>
      <table className='table' style={{width:'95%'}} >
        <thead>
          <tr style={{color:'blueviolet'}}>
          <th>Customer Name</th>
          <th>Mobile Number</th>
          <th>Product Name</th>
          <th>Quantity</th> 
          <th style={{width:'10%'}}>Date</th>
          <th style={{width:'17%'}}>Email</th>
          <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {   rows.map((element,idx)=>{
                return(
                    <tr key={idx}>
                    <td>{element.cname}</td>
                    <td>{element.num}</td>
                    <td>{element.pname}</td>
                    <td>{element.quantity}</td>
                    <td>{element.date}</td>
                    <td className='expand'>{element.email}</td>
                    <td><span className='actions'>
                        <FaTrash color='red' className='delete-btn' onClick={()=>{deleteRow(idx)}}/>
                    </span> </td> 
                    </tr>
                )
              })
           }
           
        </tbody>
      </table>
       
      </div>
  )
}

export default Table
