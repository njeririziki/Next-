 import React from 'react';
 import {Card,Carousel} from 'antd'
 import Analytics from '../../public/Analytics.svg'
 import Business from '../../public/Business.svg'
 import Investment from '../../public/Investment.svg'
 import styles from '@/styles/Landing.module.scss'
 


 const FeatCarousel = () => {
     return ( 
       <div className={styles.svg}>
        <Carousel 
         autoplay
         effect='fade' dots={false}>
            <Analytics/>
            <Business/>
            <Investment/>
         
         </Carousel>
       </div>
     
      );
 }
  
 export default FeatCarousel;