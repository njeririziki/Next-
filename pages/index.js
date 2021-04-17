import React, {useState} from 'react';
import {Button,Grid} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import Business from '../public/Business.svg'
import Mobile from '../public/Mobile.svg'
import styles from '@/styles/Landing.module.scss'
 //import Header from '@/Component/Header'
// import Drawer from '../Component/Drawer'
import LayoutHeader from '@/components/LayoutHeader'
import Carousel from '@/components/Cards/Carousel'
import Footer from '@/components/Footer'




function HomePage() {
  const [open, setOpen] = useState(false);
  
  const screen = Grid.useBreakpoint()
    return (
      <div>
        
        <div className={styles.root} >
          < div className={styles.fcard}>
          <LayoutHeader split={true}  whypg={true}/>  
         <h1 className={styles.title} >
         Simple. Reliable. Straight forward.
         </h1>
           <h1 className={styles.subtitle}  >
                You can run your business  at your own convenience.
                From the comfort of your home. 
                 Let us show you how ... 
           </h1 >
          
           <Button className={styles.button} size='large' shape='round'>
               Get Started
           </Button>
           {/* <Button style={{ backgroundColor: '#2AB7CA', color:'#FFFFFF'}} size='large' shape='round'>
            Features
           </Button> */}
            
          </div>

          <div className={styles.scard}>
         <Carousel />
          </div>
        
          </div>
         
          <div className={styles.secondpage}>
          <div className={styles.fcard} style={{backgroundColor:'#000000'}}>
           {/* <div className={styles.scard} style={{backgroundColor:'#e8f5e9'}}> */}
           <h2 className={styles.title} style={{fontSize:"3.5em",color:'#ffffff',padding:'1em 1em 0em 0em'}}>
             What is Hasibu?  </h2>
           <h1 className={styles.subtitle} style={{fontSize:"1.5em",color:'#ffffff',padding:'0em 1.5em 2em 1em'}} >
           Hasibu is a business management tool. It is the complete package every
            business owner and manager is looking for 
         
           </h1 >
           <Button className={styles.button} size='large' shape='round'>
               Learn more
           </Button>
           </div>
           <div className={styles.fcard} >  
          
           </div>
        
          
            </div>  
            <Footer/>   
        </div>
    )
}

export default HomePage
