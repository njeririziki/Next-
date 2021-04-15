import React from 'react';
import Link from 'next/link'
import { Menu, Button,Grid,Drawer} from 'antd';
import styles from '../styles/Landing.module.scss'

const Header=({split})=>{
    return(

     <div className={styles.header}>
            <h1 className={styles.headername}>
                Hasibu
            </h1>
    <div className={styles.breadcrumbs}>
        <Link href='/'>
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

 