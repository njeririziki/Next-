import React from 'react';
import {Grid} from 'antd'
import {BuildFilled, RadarChartOutlined, RiseOutlined,SlidersOutlined} from '@ant-design/icons'
import GridList from '@/components/Cards/GridList'
import LayoutHeader from '../../Component/LayoutHeader'
import Analytics from '../../public/Analytics.svg'
 import Business from '../../public/Business.svg'
 import Investment from '../../public/Investment.svg'
 import Security from '../../public/security.svg'
 import styles from '@/styles/Features.module.scss'
 import Footer from '@/components/Footer'
 import Carousel from '@/components/Cards/MultiCarousel'


const items=[
   {   key:1,
       obj: 'We create clean, beautiful and engaging websites that meet your business objectives.', 
   title:'Analytics',
   cover: "/payment_completed.svg" ,
   icon:<BuildFilled/>  },
   {   key:2,
       obj:'We develop websites using both open-source and custom framework solutions ', 
   title:'Performance Review',
   cover: "/printer.jpg",
  icon:<RadarChartOutlined/>},
   {   key:3,
       obj: "We use scientific-driven practices to rank you on first page of Google ",
        title:'Finacial Management',
        cover: "/cash-register-min.jpg",
      icon:<RiseOutlined/> },
   { key:4,
     obj: "We use scientific-driven practices to rank you on first page of Google and get your brand in front. ",
     title:'POS',
     cover: "/Error_notification.svg",
    icon:<SlidersOutlined/>}
]


const Features = () => {
  const screen = Grid.useBreakpoint()

    return ( 
       <div className={styles.root}>
           <LayoutHeader/> 

              <div className={styles.fpage}>
                <div className={styles.titlediv}>
                <h1 className={styles.title}> Our Services </h1>
               
               <p className={styles.subtitle}> We provide a variety of features essential to your business.
               All our packages include full tech support round the clock, anywhere anytime  </p>
                      
                            </div> 
                </div> 
             
                <div className={styles.spage}>
                <div className={styles.intro}>
                <p >
                We provide the solution  not just the service
            </p>
                </div>
              <div className={styles.grid}>
              <GridList  data={items} />   
               </div>  
          
        
            
             <div>
             </div> 
              </div>  
           
            
     
         
       <Footer/>
        </div>
      
     );
}
 
export default Features;