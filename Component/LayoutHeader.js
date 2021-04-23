import React, {useState} from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb,Grid} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import Drawer from './Drawer'
import Header from './Header'
import Homeheader from './Homeheader'
import styles from '../styles/Landing.module.scss'


const SmallScreen=({split})=>{
     const [open, setOpen] = useState(false);
     return( 
     <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}} >
      <h1 style={{ fontSize:'1.5em',alignSelf:'flex-start'}}> Hasibu</h1>
      <MenuUnfoldOutlined style={{ fontSize:'1.5em',alignSelf:'flex-end'}} onClick={()=>setOpen(true)} />
      <Drawer  visible={open} onClose={()=>setOpen(false)}/>
        </div>)
}



const LayoutHeader = ({split,home}) => {
   

    const screen = Grid.useBreakpoint()
    return (
       <>
        {screen.xs? <SmallScreen  />
        : (home? <Homeheader/>:  <Header split={split}/>)
             }
      
      </>
      );
}
 
export default LayoutHeader;