import React from 'react';
import Grid from '@/components/Cards/Grid'
import GridList from '@/components/Cards/GridList'
import LayoutHeader from '../../Component/LayoutHeader'
import Analytics from '../../public/Analytics.svg'
 import Business from '../../public/Business.svg'
 import Investment from '../../public/Investment.svg'
 import styles from '@/styles/Features.module.scss'

const items=[
   {key:1, obj: <Analytics/>, title:'Analytics'},
   {key:2, obj:<Business/>, title:'Performance Review'},
   {key:3, obj: <Investment/>, title:'Finacial Management'}
]


const Features = () => {

    return ( 
       <div className={styles.root}>
          <LayoutHeader/>
         
             <div className={styles.fpage}>
             {/*  */}
                    
             <GridList data={items}  
             className={styles.grid} />
             <div>
                 <h1>
               Features.
                </h1>
                  <h2 >
                     check out our <br/>very amazing features
                  </h2 >
             </div>
             </div>
     
         
       
        </div>
      
     );
}
 
export default Features;