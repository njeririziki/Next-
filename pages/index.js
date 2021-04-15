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




function HomePage() {
  const [open, setOpen] = useState(false);
  
  const screen = Grid.useBreakpoint()
    return (
      <div>
      
         
        <div className={styles.root} >
          < div className={styles.fcard}>
          <LayoutHeader split={true} />  
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
         <Carousel className={styles.svg} />
          </div>
        
          </div>
         
          <div className={styles.secondpage}>
           <div className={styles.scard} style={{backgroundColor:'#e8f5e9'}}>
            <Mobile className={styles.svg}  /> 
           </div>
           <div className={styles.fcard} >  
           <h2 className={styles.title} style={{alignSelf:'center',fontSize:"2.5em"}}>
             What is Hasibu?  </h2>
           <h1 className={styles.subtitle} style={{fontSize:"1.5em"}} >
           Hasibu is a.......
           As at the year 2021, a huge percentage of businesses 
           in the African market place rely 
           heavily on physical books to run majority,
            if not all of their operations.  A Swahili phrase,
             “kitabu ya madeni”, has been coined for this book
              that holds very key data about the business’s sales and debtors.
             Losing that book means losing the business in its entirety. 
           </h1 >
           </div>
        
          
            </div>     
        </div>
    )
}

export default HomePage
