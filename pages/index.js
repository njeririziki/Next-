import React, {useState} from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb,Grid} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import Analytics from '../public/Business.svg'
import styles from '../styles/Landing.module.css'
import Header from '../Component/Header'
import Drawer from '../Component/Drawer'

function HomePage() {
  const [open, setOpen] = useState(false);
  
  const screen = Grid.useBreakpoint()
    return (
        <div className={styles.root} >
            
          < div className={styles.fcard}>
          <div className={styles.header}>
            <h1 className={styles.headername}>
                Hasibu
            </h1>
           
            {screen.xs? <MenuUnfoldOutlined className={styles.headername} onClick={()=>setOpen(true)}/>
            : <Header/>}
          </div>
         <h1 className={styles.title} >
         Simple. Reliable.<br/> Straight forward.
         </h1>
           <h1 className={styles.subtitle}  >
                You can run your business <br/>  at your own convenience.
                <br/> Let us show you how ... <br/> 
           </h1 >
          
           <Button className={styles.button} size='large' shape='round'>
               Get Started
           </Button>
           {/* <Button style={{ backgroundColor: '#2AB7CA', color:'#FFFFFF'}} size='large' shape='round'>
            Features
           </Button> */}
            
          </div>
          <div className={styles.scard}>
          <Analytics className={styles.svg} />
          </div>
          <Drawer visible={open} onClose={()=>setOpen(false)}/>        
        </div>
    )
}

export default HomePage
