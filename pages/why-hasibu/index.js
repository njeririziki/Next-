import React from 'react';
import {Grid} from 'antd'
import styles from '../../styles/Whyhasibu.module.scss'
import LayoutHeader from '../../Component/LayoutHeader'
import Books from '../../public/Books.svg'
import Cloud from '../../public/Cloud_database.svg'
import Security from '../../public/security.svg'
import Footer from '@/components/Footer'


const WhyHasibu = () => {

    const screen = Grid.useBreakpoint()
    return ( 
        <div>
              <LayoutHeader /> 
         <div className={styles.root}>
           <div className={styles.titlediv}>
           <h1 className={styles.title}>
                why hasibu?
            </h1>
            <h1 className={styles.subtitle}>
            It is simply the best. We set yoy up with solutions uniquely designed for you.
            </h1>
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
            <h1 className={styles.othersubtitles}>
            get all the data you need to imporve your <br/>business compiled and presented amazaingly
            </h1>   
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
            <h1 className={styles.othersubtitles}>
            get all the data you need to imporve your <br/>business compiled and presented amazaingly
            </h1> 
            </div>
          {screen.xs? ''
          : <div className={styles.svgcontainer} >
          <Security className={styles.othersvg}/>  
          </div>
         } 
          </div>
           
        </div>
        <Footer/>
        </div>
       
     );
}
 
export default WhyHasibu;
