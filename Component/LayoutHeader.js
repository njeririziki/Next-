import React, {useState} from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb,Grid} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import Drawer from './Drawer'
import Header from './Header'
import styles from '../styles/Landing.module.scss'

const LayoutHeader = ({split}) => {
    const [open, setOpen] = useState(false);
  
    const screen = Grid.useBreakpoint()
    return (
       <>
        {screen.xs? <MenuUnfoldOutlined className={split?styles.headername:styles.blackicon} onClick={()=>setOpen(true)}/>
        : <Header split={split}/>}
        <Drawer  visible={open} onClose={()=>setOpen(false)}/>
      </>
      );
}
 
export default LayoutHeader;