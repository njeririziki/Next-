import React, {useState} from 'react';
import {Grid} from 'antd'
import Header from './Header'
import Homeheader from './Homeheader'
import styles from '../styles/Landing.module.scss'
import SmallScreen from './SmallScreenHeader.js'


const LayoutHeader = ({split,home}) => {
   

    const screen = Grid.useBreakpoint()
    return (
       <>
        {screen.xs? <SmallScreen home={home} />
        : (<Homeheader/>)
             }
      
      </>
      );
}
 
export default LayoutHeader;