import React, {useState} from 'react';
import Link from 'next/link';
import { Menu, Button,Grid,Drawer} from 'antd';
import styles from '../styles/Landing.module.scss'
import Logo from '../public/logo.svg'

const Header=({split})=>{
  const [change, setChange] = useState(false)
  
  const onScroll =()=>{
    setChange(true)
  }

    return(
     <div onScroll={onScroll} className={change? styles.scrolheader:styles.header}>
           <div className={styles.logo} >
            <Logo style={{width:'40px', height:'40px'}}/> 
         
           </div>
    <div className={styles.breadcrumbs}>
        <Link href='/whyhasibu'>
        <a className={styles.flinks}>Why Hasibu? </a>
        </Link>
       <Link href='/about'>
       <a className={styles.flinks}> About </a>
       </Link>
       <Link href='/features'>
       <a className={styles.breakingword}>  Feat 
       <span className={split? styles.shalfword:styles.flinks}>ures</span> </a>
       </Link>
       <Link href='/about'>
       <a className={split? styles.shalfword:styles.flinks}> Contact</a>
       </Link>
        
     </div>
     <Button className={styles.headerbutton}  >
     Get Demo
     </Button>
     </div>
    )
  }

  export default Header;

 