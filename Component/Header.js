import React from 'react';
import Link from 'next/link'
import { Menu, Button,Grid,Drawer} from 'antd';
import styles from '../styles/Landing.module.css'

const Header=({white})=>{
    return(
    <>
    <div className={styles.breadcrumbs}>
        <Link href='/'>
        <a className={styles.flinks}>Home </a>
        </Link>
       <Link href='/about'>
       <a className={styles.flinks}> About </a>
       </Link>
       <Link href='/about'>
       <a className={styles.breakingword}>  Feat 
       <span className={white? styles.flinks:styles.shalfword}>ures</span> </a>
       </Link>
       <Link href='/about'>
       <a className={white? styles.flinks:styles.shalfword}> Contact</a>
       </Link>
        
     </div>
     <Button className={styles.headerbutton}  >
     Get Demo
     </Button>
     </>
    )
  }

  export default Header;

 