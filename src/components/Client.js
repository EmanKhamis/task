import React from 'react'

import { Button } from '@mui/material';

//<input value='Mostafa Osman   Mostafa Osman ' className='inp'/>  
function Client() {
  return (
    <div className='nameComp'>
    <div className='name'>
    <label>Client Budget</label>
    <input/>
    </div>
    <div className='stage'>
       <label>Contacts</label>
       <input value='Mostafa Osman    Mostafa Osman' className='inp'/>  
    </div>
  </div>  
  )
}

export default Client