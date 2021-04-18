import React, {useState} from 'react';
import Link from 'next/link';
import { Menu, Button,Grid,Drawer, PageHeader,Layout} from 'antd';
import styles from '../styles/Landing.module.scss'
import Logo from '../public/logo.svg'

const {Header} =Layout

const HeaderComp=({split,whypg})=>{
  const [change, setChange] = useState(false)
  
  const onScroll =()=>{
    console.log('scrolled')
    setChange(true)
  }

    return(
      <Layout>
            <Header onScroll={onScroll} style={{backgroundColor:'#fafafa',position:'fixed'}} 
            className={whypg? styles.scrolheader:styles.header}>
            <Link href='/'>
            <h1>Hasibu</h1>    
            </Link>
           {/* <div className={styles.logo} >
            <Logo style={{width:'40px', height:'40px'}}/>  </div> */}
          
    <div className={styles.breadcrumbs} >
        <Link href='/whyhasibu'>
        <a className={styles.flinks}>Why Hasibu? </a>
        </Link>
       <Link href='/about'>
       <a className={styles.flinks}> About Us </a>
       </Link>
       <Link href='/features'>
       <a className={split? styles.shalfword:styles.flinks}>Features</a>
       </Link>
       {/* <Link href='/about'>
       <a className={split? styles.shalfword:styles.flinks}> Contact</a>
       </Link> */}
        
     </div>
     <Button className={styles.headerbutton}  >
     <a
        href = 'mailto:creareafrica@gmail.com?body="I would like to a request a demo"&subject="Demo"'> 
             Get Demo</a>
    
     </Button>
     </Header>

      </Layout>
 
    )
  }



  export default HeaderComp;

 