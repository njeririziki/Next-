import React from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb} from 'antd'
// import Success from '../../public/successful_purchase.svg'
// import Computer from '../../public/Computer.svg'
// import Laptop from '../../public/Laptop.svg'
// import Man from '../../public/man_lift.svg'
// import Girl from '../../public/girl_laptop.svg'
import Analytics from '../../public/Analytics.svg'
import styles from '../../styles/About.module.css'

function AboutPage() {
    return (
        <div className={styles.root} >
            
          < div className={styles.fcard}>
          <div className={styles.header}>
            <h1 className={styles.headername}>
                Hasibu
            </h1>
           <div className={styles.breadcrumbs}>
               <p>Home </p>
               <p > About</p>
                  <p style={{display:'flex',flexDirection:'row'}}> 
                  Feat <p style={{marginLeft:'2px', color:'#ffffff'}}>ures<p/></p></p>
               <p style={{color:'#ffffff'}}> Contact</p>
           </div>
           <Button className={styles.headerbutton} size='large' >
              Sign Up
           </Button>
           
            </div>
         <h1 className={styles.title} >
         Successfull.<br/> shoping spree.
         </h1>
           <h1 className={styles.subtitle}  >
                What about absurd <br/>illustrations  for your projects? 
                <br/> Take every user on <br/> 
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
                
        </div>
    )
}

export default AboutPage
