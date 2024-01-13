import React, { useState } from "react";
import "./Purchase.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Table from "../components/Table";
import ModalState from "../components/ModalState";
import Searchbar from "../components/Searchbar";

const Purchase = () => {
  const [modal, setModal] = useState(false);
  const [rows, setRows] = useState([]);

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]);
  };

  const handleDelete = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  return (
    <div className="buy">
      <div className="top">
        <div className="top top-1">
          <p style={{ color: "#00AB55" }}>Purchase report</p> </div>
        <div className="top top-2"><p>Admin</p></div>
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
          <Button variant="contained" color="success"
            onClick={() => setModal(true)}>
            <AddIcon /> Add New
          </Button>
        </div>
      </div>
      <Table rows={rows} deleteRow={handleDelete} />
      {/* rows and deletaRow are props */}
    </div>
  );
};

export default Purchase;
