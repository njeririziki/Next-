import React, {useState} from 'react';
import {MenuUnfoldOutlined} from '@ant-design/icons'
import Drawer from './Drawer'
import styles from '../styles/Components.module.scss'

const SmallScreen=({home})=>{
    const [open, setOpen] = useState(false);
    return( 
      <>
        <div className={ home? styles.homeheader:styles.smallheader } >
        <h1  className={styles.headerlogo}> Hasibu</h1>
        <MenuUnfoldOutlined className={styles.headerlogo} onClick={()=>setOpen(true)} />
       </div>
       <Drawer  visible={open} onClose={()=>setOpen(false)}/>
       </>
       )
}

 export default SmallScreen;

