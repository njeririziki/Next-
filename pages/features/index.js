import React from 'react';
//import Grid from '@/components/Cards/Grid'
import {Grid} from 'antd'
import {BuildFilled, RadarChartOutlined, RiseOutlined,SlidersOutlined} from '@ant-design/icons'
import GridList from '@/components/Cards/GridList'
import LayoutHeader from '../../Component/LayoutHeader'
import Analytics from '../../public/Analytics.svg'
 import Business from '../../public/Business.svg'
 import Investment from '../../public/Investment.svg'
 import styles from '@/styles/Features.module.scss'
 import Footer from '@/components/Footer'

const items=[
   {key:1,
     
       obj: 'We create clean, beautiful and engaging websites that meet your business objectives.', 
   title:'Analytics',
   icon:<BuildFilled/>  },
   {key:2,
       obj:'We develop websites using both open-source and custom framework solutions ', 
   title:'Performance Review',
  icon:<RadarChartOutlined/>},
   {key:3,
       obj: "We use scientific-driven practices to rank you on first page of Google ",
        title:'Finacial Management',
      icon:<RiseOutlined/> },
   {key:4,
     obj: "We use scientific-driven practices to rank you on first page of Google and get your brand in front. ",
     title:'POS',
    icon:<SlidersOutlined/>}
]


const Features = () => {
  const screen = Grid.useBreakpoint()

    return ( 
       <div className={styles.root}>
           <LayoutHeader/> 

              <div className={styles.fpage}>
                <div className={styles.title}>
                <h1 > Our Services </h1>
               {screen.xs? ''
               : <p className={styles.subtitle}> We provide a variety of features essential to your business.
               All our packages include full tech support round the clock, anywhere anytime  </p>
               } 
                       
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