import React from 'react';
import Grid from '@/components/Cards/Grid'
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
     
       obj: 'We create clean, beautiful and engaging websites that meet your business objectives. Not only do they look and work great, they are also built with marketing in mind. And for our clients, that makes all the difference in the world.', 
   title:'Analytics',
   icon:<BuildFilled/>  },
   {key:2,
       obj:'We develop websites using both open-source and custom framework solutions to deliver the most polished and user-friendly product possible. All of our solutions also come with a lifetime bug-free code guarantee.', 
   title:'Performance Review',
  icon:<RadarChartOutlined/>},
   {key:3,
       obj: "We use scientific-driven practices to rank you on first page of Google and get your brand in front of customers. Our growth strategies focus on increasing traffic with various methods for increasing website authority and position.",
        title:'Finacial Management',
      icon:<RiseOutlined/> },
   {key:4,
     obj: "We use scientific-driven practices to rank you on first page of Google and get your brand in front of customers. Our growth strategies focus on increasing traffic with various methods for increasing website authority and position.",
     title:'POS',
    icon:<SlidersOutlined/>}
]


const Features = () => {

    return ( 
       <div className={styles.root}>
          <LayoutHeader/>

             <div className={styles.fpage}>
                <div className={styles.title}>
                <h1 style={{fontSize:'3.5em'}} > Our features </h1>
                <p style={{fontSize:'2em'}}> We provide a variety of features essential to your business.
                All our packages include full tech support round the clock, anywhere anytime  </p>
                </div> 
          
            <Analytics  className={styles.grid} />
             
             </div>
             <div className={styles.spage}>
                <div style={{margin: '50px 0px 50px 0px'}}>
                <h1 style={{fontSize:'3em',color:'#ffffff'}} >
              We provide the solution <br/> not just the service
                </h1> 
                </div>
                
             <GridList  data={items}  
             />
             <div>
             </div>
           
             </div>
     
         
       <Footer/>
        </div>
      
     );
}
 
export default Features;