import React from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
// import Success from '../../public/successful_purchase.svg'
// import Computer from '../../public/Computer.svg'
// import Laptop from '../../public/Laptop.svg'
// import Man from '../../public/man_lift.svg'
// import Girl from '../../public/girl_laptop.svg'
import Analytics from '../../public/Analytics.svg'
import styles from '../../styles/Landing.module.css'

function AboutPage() {
    return (
        <div className={styles.root} >
            
          < div className={styles.scard}>
          <div className={styles.header}>
            <h1 className={styles.headername}>
                Hasibu
            </h1>

            <MenuUnfoldOutlined className={styles.headername}/>
           {/* <div className={styles.breadcrumbs}>
               <p>Home </p>
               <p > About</p>
                  <span style={{display:'flex',flexDirection:'row'}}> 
                  <p> Feat</p> <p style={{marginLeft:'2px', color:'#ffffff'}}>ures<p/>
                  </span>
               <p style={{color:'#ffffff'}}> Contact</p>
           </div> 
           <Button className={styles.headerbutton} size='large' >
             Request Demo
           </Button> */}
           
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
         
           <div className={styles.svg}>
            <Analytics />
          </div>      
        </div>
    )
}

export default AboutPage
