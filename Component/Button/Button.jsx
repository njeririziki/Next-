import React from 'react';
import {Button} from 'antd'
import styles from '../../styles/Components.module.scss'

const StartButton = () => {
    return ( 
        <Button  size='large' className={styles.button}>
             <a
            href = 'mailto:creareafrica@gmail.com?body="I would like to a request a demo"&subject="Demo"'> 
             Learn more</a> 
        </Button>
     );
}
 
export default StartButton;