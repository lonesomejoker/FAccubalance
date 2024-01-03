import React, { useState } from 'react'
import './Dashboard.css'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Modal,ModalHeader,ModalBody } from 'reactstrap';
import Table from '../components/Table';
import ModalState from '../components/ModalState';
import { FaCoins } from "react-icons/fa6";

const Dashboard = () => {
  const[search,setSearch]=useState('search here')
  const [modal,setModal]=useState(false)
  const [rows,setRows]=useState([]);

const handleSubmit=(newRow)=>{
  setRows([...rows,newRow])
}

const handleDelete=(targetIndex)=>{
  setRows(rows.filter((_,idx)=>idx!==targetIndex));
}

  return (
    <div className='buy'>
    
     <div className='top'>
      <h1 style={{fontSize:'17px',color:'#00AB55'}}>Dashboard</h1>
      <h1 style={{fontSize:'14px',color:'black'}}>Admin</h1>
      </div>

      <div className='cash'>
      <div className='item item-a'>
      <FaCoins color='#4F539E'/>
      <p style={{color:'#4A5568',fontSize:'14px'}}>Total Amount</p>
      <p>20,000</p>
      </div>
      <div className='item item-b'>
      <FaCoins color='#F83F3F'/>
      <p style={{color:'#4A5568',fontSize:'14px'}}>Amount Receivable</p>
      <p>10,233</p>
      
      </div>
      <div className='item item-c'>
      <FaCoins color='black'/>
      <p style={{color:'#4A5568',fontSize:'14px'}}>Amount Payable</p>
      <p>10,233</p>
      </div>
     </div>

      <div className='tool'>
      <Modal isOpen={modal} toggle={()=>setModal(!modal)}>
          <ModalHeader toggle={()=>setModal(!modal)}>
            <p style={{fontSize:'13px',color:'#00AB55'}}>Purchase Report</p>
          </ModalHeader>
          <ModalBody>
            <ModalState onSubmit={handleSubmit}/>  {/*onSubmit is a prop*/}
          </ModalBody>
        </Modal>
      
      <input type="text" style={{borderStyle:'dashed',height:'35px',color:'black',
      borderColor:'limegreen',borderRadius:'5px'}}
       name='search' onChange={(e)=>setSearch(e.target.value)} value={search}/> 
      <img src='./images/search-icon.png' alt='search' height={16}></img>
      <Button id='plus' variant='contained' color='success' onClick={()=>setModal(true)}>
        <AddIcon/> Add new
      </Button>
      </div>
      <Table rows={rows} deleteRow={handleDelete}/>  {/* rows and deletaRow are props */}
    </div>
  )
}

export default Dashboard


