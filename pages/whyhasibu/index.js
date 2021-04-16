import React from 'react';
import styles from '../../styles/Whyhasibu.module.scss'
import LayoutHeader from '../../Component/LayoutHeader'
import Books from '../../public/Books.svg'

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
        <div>
        <h1 className={styles.title}>
                why hasibu?
            </h1>
            <h1 className={styles.subtitle}>
         It's the best platform for your business. It is just that simple.
            </h1> 
        </div>
        </div>
       
     );
}
 
export default WhyHasibu;
