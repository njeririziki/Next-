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
  const [change, setChange] = useState(false)
  
  const onScroll =()=>{
    console.log('scrolled')
    setChange(true)
  }
    return (
      <div className={styles.bod}>
        
        <div className={styles.root} onScroll={onScroll} >
          < div className={styles.fcard}>
          <LayoutHeader split={true} home={true}/>  
         <h1 className={styles.title} >
         Simple. Reliable. Straight forward.
         </h1>
           <h1 className={styles.subtitle}  >
                You can run your business  at your own convenience.
                From the comfort of your home. 
                 Let us show you how ... 
           </h1 >
          
           <Button className={styles.button} size='large' shape='round'>
           <a
            href = 'mailto:creareafrica@gmail.com?body="I would like to a request a demo"&subject="Demo"'> 
             Get Started</a> 
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
        <div className={styles.whattext} > 
           <h2 className={styles.othertitle} style={{fontSize:"2.5em",}}>
             What is Hasibu?  </h2>
           <h1 className={styles.subtitle} 
           style={{width:'60vw', color:'#000000', marginLeft:'0px'}} >
           Hasibu is a business management tool. It is the complete package every
            business owner and manager is looking for.No matter where you are,
            we can make it happen
           </h1 >
        
         </div>
         <div style={{display:'flex', flexDirection:'column'}}>
         <Mobile className={styles.svg}/>
         <div className={styles.lasttext} style={{ fontSize: '1.5em' }}>
           
         <h2 >
       No matter where you are,
          we can make it happen
          </h2 >
         </div>
        
         </div>
            </div>  
            <Footer/>   
        </div>
    )
}

export default HomePage
