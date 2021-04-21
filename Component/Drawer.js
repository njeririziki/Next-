import React, {useState} from 'react';
import Link from 'next/link'
import { Menu, Button,Grid,Drawer} from 'antd';

// const menu=[
//     {key:1, label:'Home'},
//     {key:2, label:'About'},
//     {key:3, label:'Features'},
//     {key:4, label:'Contacts'},
// ]

const {Item} = Menu
const MenuComp=()=>{
    return(
        <Menu  theme='dark' 
        style={{backgroundColor:'#102027', color:'#ffffff', height:'100vh'}}>
        
            <Item key={1}>
            <Link href='/'>
              <a> Home</a>  
            </Link>
            </Item>
            <Item key={5}>
            <Link href='/why-hasibu'>
              <a> Why Jasibu</a>  
            </Link>
            </Item>
            <Item key={2}>
            <Link href='/about'>
              <a> About us</a>  
            </Link>
            </Item> 
            <Item key={3}>
            <Link href='/features'>
              <a> Features</a>  
            </Link>
            </Item>
            <Item key={4}>
            <Link href='/'>
              <a> Contact us</a>  
            </Link>
            </Item>
      
      
    </Menu>
    )
}




const PageDrawer = ({visible,onClose}) => {
    return ( 
        <div  style={{backgroundColor:'#102027', color:'#ffffff'}}>
        <Drawer
        title="Hasibu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width='250'
       
      >
       <MenuComp/>
      </Drawer>
        </div>
     );
}
 
export default PageDrawer;