import React, {useState} from 'react';
import Link from 'next/link';
import { Menu, Button,Grid,Drawer, PageHeader,Layout} from 'antd';
import styles from '../styles/Landing.module.scss'
import Logo from '../public/logo.svg'
import ContactForm from '@/components/Modal/ContactForm'

const {Header} =Layout

const HeaderComp=({split,whypg})=>{
  const [change, setChange] = useState(false)
  const [visible, setVisible] = useState(false)
  
  const onScroll =()=>{
    console.log('scrolled')
    setChange(true)
  }

    return(
      <>
      <Layout>
            <Header onScroll={onScroll} style={{backgroundColor:'#fafafa',position:'fixed'}} 
            className={whypg? styles.scrolheader:styles.header}>
            <Link href='/'>
            <h1>Hasibu</h1>    
            </Link>
           {/* <div className={styles.logo} >
            <Logo style={{width:'auto', height:'100%'}}/>  
            </div> */}
          
    <div className={styles.breadcrumbs} >
        <Link href='/why-hasibu'>
        <a className={styles.flinks}>Why Hasibu? </a>
        </Link>
       <Link href='/about'>
       <a className={styles.flinks}> About </a>
       </Link>
       <Link href='/features'>
       <a className={split? styles.shalfword:styles.flinks}>Features</a>
       </Link>
       {/* <Link href='/about'>
       <a className={split? styles.shalfword:styles.flinks}> Contact</a>
       </Link> */}
        
     </div>
     <Button className={styles.headerbutton} 
     onClick={()=>setVisible(true)}>
             Get Demo
     </Button>
     </Header>

      </Layout>
      <ContactForm visible={visible} onCancel={()=>setVisible(false)}/>
 </>
    )
  }



  export default HeaderComp;

 