import React from 'react';
import {Card,Typography,Space,Button, PageHeader,Breadcrumb,Grid} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import Analytics from '../public/Business.svg'
import styles from '../styles/About.module.css'

const Header=()=>{
  return(
  <>
  <div className={styles.breadcrumbs}>
     <p>Home </p>
     <p > About</p>
       <p className={styles.breakingword}> 
       Feat <p className={styles.shalfword}>ures<p/></p>
       </p>
     <p style={{color:'#ffffff'}}> Contact</p>
   </div>
   <Button className={styles.headerbutton}  >
   Get Demo
   </Button>
   </>
  )
}

function AboutPage() {
  
  const screen = Grid.useBreakpoint()
    return (
        <div className={styles.root} >
            
          < div className={styles.fcard}>
          <div className={styles.header}>
            <h1 className={styles.headername}>
                Hasibu
            </h1>
           
            {screen.xs?  <MenuUnfoldOutlined className={styles.headername}/>
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
                
        </div>
    )
}

export default AboutPage
