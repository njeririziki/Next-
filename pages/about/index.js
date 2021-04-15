import React, {useState} from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
// import Success from '../../public/successful_purchase.svg'
// import Computer from '../../public/Computer.svg'
// import Laptop from '../../public/Laptop.svg'
// import Man from '../../public/man_lift.svg'
// import Girl from '../../public/girl_laptop.svg'
import Analytics from '../../public/Analytics.svg'
import styles from '@/styles/Landing.module.scss'
import LayoutHeader from '@/components/LayoutHeader'


function AboutPage() {

  
    return (
        <div  className={styles.root}  >
            
          < div className={styles.fcard}>
        
          <LayoutHeader />
         
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
           
         <h1 className={styles.title} >
         Our Story.<br/> Our Mission.
         </h1>
           <h1 className={styles.subtitle}  >
                You can run your business <br/>  at your own convenience.
                <br/> Let us show you how ... <br/> 
           </h1 >
          
           <Button className={styles.button} size='large' shape='round'>
               Contact Us
           </Button>
           {/* <Button style={{ backgroundColor: '#2AB7CA', color:'#FFFFFF'}} size='large' shape='round'>
            Features
           </Button> */}
        
          </div>
         <div style={{backgroundColor:'#ffffff'}} className={styles.scard}>
         <div className={styles.svg}>
            <Analytics />
          </div> 
         </div>
           
          
        </div>
    )
}

export default AboutPage
