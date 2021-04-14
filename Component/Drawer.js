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
        <Menu >
        
            <Item key={1}>
            <Link href='/'>
              <a> Home</a>  
            </Link>
            </Item>
            <Item key={2}>
            <Link href='/about'>
              <a> About us</a>  
            </Link>
            </Item> 
            <Item key={3}>
            <Link href='/'>
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
        <div>
        <Drawer
        title="Hasibu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width='150'
      
      >
       <MenuComp/>
      </Drawer>
        </div>
     );
}
 
export default PageDrawer;