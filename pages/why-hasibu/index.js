import React from 'react';
import {Grid} from 'antd'
import styles from '../../styles/Whyhasibu.module.scss'
import LayoutHeader from '../../Component/LayoutHeader'
import Books from '../../public/Books.svg'
import Cloud from '../../public/Cloud_database.svg'
import Security from '../../public/security.svg'
import Payment from '../../public/payment_completed.svg'
import Footer from '@/components/Footer'
import Button from '@/components/Button/Button'

const WhyHasibu = () => {

    const screen = Grid.useBreakpoint()
    return ( 
        <div>
              <LayoutHeader /> 
         <div className={styles.root}>
           <div className={styles.titlediv}>
            <h1 className={styles.title}>
              Choose  <span style={{color:'#1890FF'}}> Hasibu</span>
            </h1> 
            <h1 className={styles.subtitle}>
              We set your business up with solutions that uniquely designed for you. Contact us
              for more details about our amazing features and more.
            </h1>
            <Button/>
          
          
           </div>
            {/* <Books className={styles.svg} /> */}
        </div>
        {/* <div className={styles.textdiv} >
            <h1 className={styles.othertitle} >
              Freedom from physical presence
            </h1>
            <h1 className={styles.othersubtitles}>
           In times like this (pandemic) its just makes more sense to work from home. 
            </h1> 
         </div> */}
        <div className={styles.nextpage}>
            <div className={styles.cards}>  
               
            <div className={styles.svgcontainer} >
            <Cloud  className={styles.othersvg}/>
            </div>
            <div >
            <h1 className={styles.othertitles}>
             Remote Access
            </h1>
            <p className={styles.othersubtitles}>
            You don't have to go anywhere. You have complete control of your business
            at your fingertips from the comfort of your couch. 
           
            </p>   
            </div>
            </div>
          <div className={styles.cards}>
          {screen.xs?  <div className={styles.svgcontainer} >
          <Security className={styles.othersvg}/>  
          </div>:''}
          <div> 
             <h1 className={styles.othertitles}>
             Data Security
            </h1>
            <p className={styles.othersubtitles}>
            All your sensitive data will be stored securly in the cloud.
            Get all the data you need to imporve your 
            business compiled and presented amazaingly. 
            </p> 
            </div>
          {screen.xs? ''
          : <div className={styles.svgcontainer} >
          <Security className={styles.othersvg}/>  
          </div>
         } 
          </div>
          <div className={styles.cards}>
           <div className={styles.svgcontainer} >
          <Payment className={styles.othersvg}/>  
          </div>
          <div> 
             <h1 className={styles.othertitles}>
             Fast Transactions
            </h1>
            <p className={styles.othersubtitles}>
             Hasibu allows you to control your stock and make fast transactions at no 
             extra cost to your business.
             Get all your business transactions compiled and presented amazaingly
            </p> 
            </div>
          
          </div>
           
        </div>
        <Footer/>
        </div>
       
     );
}
 
export default WhyHasibu;
