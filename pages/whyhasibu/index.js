import React from 'react';
import styles from '../../styles/Whyhasibu.module.scss'
import LayoutHeader from '../../Component/LayoutHeader'
import Books from '../../public/Books.svg'
import Cloud from '../../public/Cloud_database.svg'

const WhyHasibu = () => {
    return ( 
        <div>
             <LayoutHeader className={styles.pageheader} />
         <div className={styles.root}>
           <div>
           <h1 className={styles.title}>
                why hasibu?
            </h1>
            <h1 className={styles.subtitle}>
         It's the best platform for your business. It is just that simple.
            </h1>
           </div>
    
            <Books className={styles.svg} />
        </div>
        <div className={styles.nextpage}>
        <Cloud className={styles.svg}/>
            <div className={styles.textdiv}>
            <h1 className={styles.othertitle}>
                why hasibu?
            </h1>
            <h1 className={styles.othersubtitles}>
         It's the best platform for your business. It is just that simple.
            </h1> 
            </div>
           
        </div>
        
        </div>
       
     );
}
 
export default WhyHasibu;
