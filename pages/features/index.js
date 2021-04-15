import React from 'react';
import Grid from '../../Component/Cards/Grid'
import LayoutHeader from '../../Component/LayoutHeader'
import Analytics from '../../public/Analytics.svg'
 import Business from '../../public/Business.svg'
 import Investment from '../../public/Investment.svg'
 import styles from '@/styles/Landing.module.scss'

const items=[
   {key:1, obj: Analytics},
   {key:2, obj:Business},
   {key:3, obj: Investment}
]


const Features = () => {
    return ( 
       <div>
          <LayoutHeader/>
         
             <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
             
                <h2 className={styles.title} style={{alignSelf:'center',fontSize:"2.5em"}} >
      Features.
         </h2>
           <h1 className={styles.subtitle}  >
           
           </h1 >
              
          <Grid/>
             </div>
     
         
       
        </div>
      
     );
}
 
export default Features;