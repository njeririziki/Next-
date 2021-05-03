import React from 'react';
import {Button} from 'antd'
//import styles from '../../styles/Landing.module.scss'

const StartButton = () => {
    return ( 
        <Button  size='large' 
        style={{backgroundColor:'#1890FF',color:'#ffffff', padding:'1em', 
        width:'180px', height:'40px'}}>
             <a
            href = 'mailto:creareafrica@gmail.com?body="I would like to a request a demo"&subject="Demo"'> 
             Learn more</a> 
        </Button>
     );
}
 
export default StartButton;