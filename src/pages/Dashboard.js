import React, { useState } from "react";
import "./Dashboard.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Table from "../components/Table";
import ModalState from "../components/ModalState";
import Searchbar from "../components/Searchbar";
import { FaCoins } from "react-icons/fa";

const Dashboard = () => {
  const [modal,setModal]=useState(false)
  const [rows,setRows]=useState([]);

const handleSubmit=(newRow)=>{
  setRows([...rows,newRow])
}

const handleDelete=(targetIndex)=>{            //targetIndex is userdefined 
  setRows(rows.filter((_,idx)=>idx!==targetIndex));
}

  return (
    <div className='buy'>
    
     <div className="top">
        <div className="top top-1">
          <p style={{ color: "#00AB55" }}>Dashboard</p> </div>
        <div className="top top-2"><p>Admin</p></div>
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
      <div className="tool">
        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
          <ModalHeader toggle={() => setModal(!modal)}>
            <p style={{ fontSize: "13px", color: "#00AB55" }}>
              Purchase Report
            </p>
          </ModalHeader>
          <ModalBody>
            <ModalState onSubmit={handleSubmit} /> {/*onSubmit is a prop*/}
          </ModalBody>
        </Modal>
      </div>
      <div className="ipt">
        <div className="input input-1">
          <Searchbar />
        </div>
        <div className="input input-2">
          <Button variant="contained"
            color="success"
            onClick={() => setModal(true)}>
            <AddIcon /> Add New
          </Button>
        </div>
      </div>
      <Table rows={rows} deleteRow={handleDelete} />
      {/* rows and deletaRow are props */}
    </div>
  )
}

export default Dashboard


