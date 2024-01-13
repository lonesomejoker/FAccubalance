import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Searchbar from '../components/Searchbar';

const Stocks = () => {
  return (
    <div className='stock' style={{paddingLeft:'210px'}}>
   my Stocks
   <div className='input-1'>
      <Searchbar/>
      <Button id='plus' variant='contained' color='success'>
        <AddIcon/> Add New
      </Button>
      </div>
    </div>
  )
}

export default Stocks
