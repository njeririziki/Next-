import React, {useState} from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb,Grid} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import Drawer from './Drawer'
import Header from './Header'
import styles from '../styles/Landing.module.css'

const LayoutHeader = ({white}) => {
    const [open, setOpen] = useState(false);
  
    const screen = Grid.useBreakpoint()
    return (
        <>
        {screen.xs? <MenuUnfoldOutlined className={white?styles.blackicon:styles.headername} onClick={()=>setOpen(true)}/>
        : <Header white={white}/>}
        <Drawer  visible={open} onClose={()=>setOpen(false)}/>
      </>
      );
}
 
export default LayoutHeader;