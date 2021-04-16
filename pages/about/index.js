import React, {useState} from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
// import Success from '../../public/successful_purchase.svg'
// import Computer from '../../public/Computer.svg'
// import Laptop from '../../public/Laptop.svg'
// import Man from '../../public/man_lift.svg'
// import Girl from '../../public/girl_laptop.svg'
import Digital from '../../public/Digital_marketing.svg'
import styles from '@/styles/Landing.module.scss'
import LayoutHeader from '@/components/LayoutHeader'


function AboutPage() {

  
    return (
      <div>
         <LayoutHeader />  
        <div  className={styles.root}  >
            
          < div className={styles.fcard}>
        
       
         
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
           
         <h2 className={styles.title} >
         Our Story.
         </h2>
           <h1 className={styles.subtitle}  >
           As at the year 2021, a huge percentage of businesses 
           in the African market place rely 
           heavily on physical books to run majority,
            if not all of their operations. 
           </h1 >
          
           <Button className={styles.button} size='large' shape='round'>
               Contact Us
           </Button>
           {/* <Button style={{ backgroundColor: '#2AB7CA', color:'#FFFFFF'}} size='large' shape='round'>
            Features
           </Button> */}
        
          </div>
         <div style={{backgroundColor:'#ffffff'}} className={styles.scard}>
         <div >
            <Digital  className={styles.svg} 
            style={{height:'700px'}} />
          </div> 
         </div>
           
         </div>
      
     
          
        </div>
    )
}

export default AboutPage
