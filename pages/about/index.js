import React, {useState} from 'react';
import {Card,Typography,Space,Button, Grid} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
// import Success from '../../public/successful_purchase.svg'
// import Computer from '../../public/Computer.svg'
// import Laptop from '../../public/Laptop.svg'
// import Man from '../../public/man_lift.svg'
// import Girl from '../../public/girl_laptop.svg'
import Digital from '../../public/Digital_marketing.svg'
import Books from '../../public/Books.svg'
import styles from '@/styles/About.module.scss'
import LayoutHeader from '@/components/LayoutHeader'
import Footer from '@/components/Footer'
import Image from 'next/image'

function AboutPage() {

const screen = Grid.useBreakpoint()  
    return (
      <div>
         <LayoutHeader />  
        <div  className={styles.root}  >
            
          < div className={styles.fcard}>
        
          {screen.xs? <Digital  className={styles.svg} />:''}
           <div className={styles.textdiv}>
           <h2 className={styles.title} >
            Our Story.
         </h2>
           <h1 className={styles.subtitle}  >
           The idea behind Hasibu is the inspired by the need to ease 
           the complex time wasting business  operations that business managers 
           experience everyday
           heavily on physical books to run majority,
            if not all of their operations. 
           </h1 >
              
           <Button className={styles.button} size='large' shape='round'>
               Contact Us
           </Button>
           
           </div>
       
       
        
          </div>
          {screen.xs? '': <Digital  className={styles.svg} />}
         <div >
              
         </div>
         </div>
       <div className={styles.nextpage}>
           {screen.xs? '': <Books  className={styles.svg2} /> }
           <div className={styles.textdiv2}>
           <h2 className={styles.title2} >
            Our Vision.
         </h2>
           <h1 className={styles.subtitle2}  >
           The idea behind Hasibu is the inspired by the need to ease 
           the complex time wasting business  operations that business managers 
           experience everyday heavily on physical books to run majority,
            if not all of their operations. 
           </h1 >
           {screen.xs? <Books  className={styles.svg2} />:'' }
           </div>
       </div>
       <div className={styles.missionpg}>
       <div className={styles.textdiv3}>
           <h1 className={styles.title3} >
            Our Mission.
         </h1>   
           </div>
           <h1 className={styles.subtitle3}  >
          To shape the way businesses operate 
           
           </h1 >
       </div>
      
     <Footer/>
          
        </div>
    )
}

export default AboutPage
