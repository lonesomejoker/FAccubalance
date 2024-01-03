import React, { useState } from 'react'
import './Sales.css'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Modal,ModalHeader,ModalBody } from 'reactstrap';
import Table from '../components/Table';
import ModalState from '../components/ModalState';

const Purchase = () => {
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
      <h1 style={{fontSize:'17px',color:'#00AB55'}}>Purchase Report</h1>
      <h1 style={{fontSize:'14px',color:'black'}}>Admin</h1>
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

export default Purchase

