import React, {useState} from 'react';
import Link from 'next/link';
import { Menu, Button,Grid,Drawer, PageHeader,Layout} from 'antd';
import styles from '../styles/Landing.module.scss'
import Logo from '../public/logo.svg'
import ContactForm from '@/components/Modal/ContactForm'

const {Header} =Layout

const HeaderComp=({split,whypg})=>{
        const [visible, setVisible] = useState(false)

    return(
  
            <div 
            className={whypg? styles.scrolheader:styles.header}>
            <Link href='/'>
            <h1>Hasibu</h1>  
           
            </Link>
           {/* <div className={styles.logo} >
            <Logo style={{width:'40px', height:'40px'}}/>  </div> */}
          
    <div className={styles.breadcrumbs}>
        <Link href='/why-hasibu'>
        <a className={styles.flinks}>Why Hasibu? </a>
        </Link>
       <Link href='/about'>
       <a className={styles.flinks}> About </a>
       </Link>
       <Link href='/features'>
       <a className={ styles.shalfword}>Features</a>
       </Link>
       {/* <Link href='/about'>
       <a className={split? styles.shalfword:styles.flinks}> Contact</a>
       </Link> */}
        
     </div>
     <Button className={styles.headerbutton} 
     onClick={()=>setVisible(true)} >
     
             Get Demo
    
     </Button>
     <ContactForm visible={visible} onCancel={()=>setVisible(false)}/>
     </div>

    
 
    )
  }



  export default HeaderComp;

 