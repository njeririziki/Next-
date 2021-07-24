import React, {useState} from 'react';
import {Button,Grid} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import Business from '../public/Business.svg'
import Mobile from '../public/Mobile.svg'
import Analytics from '../public/Analytics.svg'
import styles from '@/styles/Landing.module.scss'
//import Image from 'next/image'
import GridList from '../Component/Cards/GridList'
import MultiCarousel from '@/components/Cards/MultiCarousel'
// import Drawer from '../Component/Drawer'
import LayoutHeader from '@/components/LayoutHeader'
import Carousel from '@/components/Cards/Carousel'
import Footer from '@/components/Footer'
import {ArrowRightOutlined} from '@ant-design/icons'

const features=[
  {title:'Issue One',
   desc:'This is it'},
   {title:'Issue Two',
   desc:'This is it'},
   {title:'Issue Three',
   desc:'This is it'}
]

const list =(
  <div className={styles.packages}>
    <div className={styles.packageheader}  style={{backgroundColor:'#ff8f00'}}>
    <p> Standard Package </p>
     <p>$50/yr</p>
    </div>
    
    <ul >
      <li>POS</li>
      <li> Product </li>
      <li> Monthly Reports</li>
      <li> Sales </li>
      <li> Scheduling</li>

    </ul>
  <p> Plus 1 month free trial</p>
  <Button  size='large' 
     style={{backgroundColor:'#ff8f00',color:'#ffffff', borderRadius:'10px'}} >
           Buy now  <ArrowRightOutlined/>
  </Button>
  </div>
)
const premlist =(
  <div className={styles.packages}>
        <div className={styles.packageheader} >
        <p> Premium Package </p>
         <p>$100/yr</p>
        </div>
  
    <ul>
      <li> Standard package</li>
      <li>Taxes</li>
      <li> Daily Reports</li>
      <li> Notifications</li>
      <li> Analytics</li>
    </ul>
    <p> Start with a free trial</p>
    <Button  size='large' 
      style={{backgroundColor:'#008700',color:'#ffffff',borderRadius:'10px'}} >
          Buy now <ArrowRightOutlined/>
       </Button>
  </div>
)

const items=[
  {key:1,
    
    obj: list, 
  //title:'Standard',
 // cover: "/payment_completed.svg" ,
    },
  {key:2,
      obj: premlist, 
  //title:'Premium',
 // cover: "/printer.jpg",
 }
  ]


function HomePage() {
  const [open, setOpen] = useState(false);
  
  const screen = Grid.useBreakpoint()
  const [change, setChange] = useState(false)
  
  const onScroll =()=>{
    console.log('scrolled')
    setChange(true)
  }
    return (
      < div className={styles.bod}>
         <div className={styles.root} onScroll={onScroll} >
          < div className={styles.fcard}>
          <LayoutHeader split={true} home={true}/>  
         <h1 className={styles.title} >
         Simple. Reliable. <br/>
         <span style={{color:'#1890FF'}}>Straight forward.</span>
         </h1>
         
           <p className={styles.subtitle}  >
            You can run your business  at your own convenience.
            From the comfort of your home. 
             Let us show you how ... 
           </p >
          
           <Button className={styles.button} size='large' shape='round'>
           <a
            href = 'mailto:creareafrica@gmail.com?body="I would like to a request a demo"&subject="Demo"'> 
             Get Started</a> 
           </Button>
           {/* <Button style={{ backgroundColor: '#2AB7CA', color:'#FFFFFF'}} size='large' shape='round'>
            Features
           </Button>  */}
            
          </div>
          <div className={styles.scard}>
           
            <Carousel />
         
        
          </div>
          </div>
          <div className={styles.secondpage}>
      
         {screen.xs? '':
            <img src='/data-visualization.jpg' className={styles.svg}/>
          // <Analytics className={styles.svg}/>
           }
         
          <div className={styles.whattext}>
         
            <h2 className={styles.othertitle} >
            Hasibu  </h2>
           <p className={styles.othersubtitle}  >
           Hasibu is a business management tool. It is the complete package every
            business owner and manager is looking for.No matter where you are,
            we can make it happen.Enjoy seamless, gliding play every time. 
            Give yourself a round of applause! You did it, well done!
           </p >
           <Button className={styles.learnmorebtn} size='large'  shape='round'>
           <a
            href = 'mailto:creareafrica@gmail.com?body="I would like to a request a demo"&subject="Demo"'> 
             Learn more</a> 
           </Button>
           {/* <p className={styles.othertitle} style={{color}}><u> We offer</u></p> */}
           {/* <ul className={styles.othersubtitle}>
             <li> Flexible </li>
             <li> High Performance</li>
             <li>  Big returns</li>
           </ul> */}
        
      
         </div>
         {screen.xs?
          <Analytics className={styles.svg}/> 
         :''}
         
        </div> 
        <div className={styles.secondpage}>
      
          <div className={styles.whattext}>
           
            <h2 className={styles.othertitle} >
           Inspiration </h2>
           <p className={styles.othersubtitle}  >
           Hasibu is a inspired by the challenges businesses experience keeping 
           up with the technological landscape. We work to offer you a lasting solution for 
           business. We promise to always keep you up to date.
           </p>
           <Button className={styles.learnmorebtn} size='large'  shape='round'>
           <a
            href = 'mailto:creareafrica@gmail.com?body="I would like to a request a demo"&subject="Demo"'> 
             Learn more</a> 
           </Button>
           {/* <p className={styles.othertitle} style={{color}}><u> We offer</u></p> */}
           {/* <ul className={styles.othersubtitle}>
             <li> Flexible </li>
             <li> High Performance</li>
             <li>  Big returns</li>
           </ul> */}
           
         </div>
         {screen.xs?
          
          <Analytics className={styles.svg}/> 
           :
            <img src='/Error_notification.svg' className={styles.svg} />
         }
        
        </div> 
        <div className={styles.featcarousel}>
          <p style={{padding:'1em'}}> We offer a wide range of features 
            </p>
          <MultiCarousel features={features}/>
        </div>
        
        <div className={styles.reviewcontainer}>
          <div className={styles.avatar}>
           <img  src='/happy-sticky.jpg' width='300px' height='300px' 
           style={{borderRadius:'50%'}}/>
          </div>
          <div className={styles.reviewcontent}>
           
          <p> I have had the most wonderful
         experience since i started working with Hasibu. Anyone looking to 
         switch things up ... I would highly recommend trying Hasibu!
         </p> 
         <h1 className={styles.clientname}
        > Nakshi Kwamb -CEO Sajy Chain Stores</h1>
          </div>
        
        </div> 
        <div className={styles.thirdpage}>
       
          <p>Choose your plan </p>
          <div className={styles.grid}>
          <GridList  data={items} />  
          </div>
        
        </div>
      
            
      <Footer/>
      </div>
   
    )
}

export default HomePage

    {/* 
          <div className={styles.scard}>
         <Business className={styles.svg}/>
          </div>
        
          </div>
           
         <div className={styles.whattext}>
         <h2 className={styles.othertitle} style={{fontSize:"2.5em"}}>
             What is Hasibu?  </h2>
           <h1 className={styles.subtitle} 
           style={{width:'40vw', marginLeft:'2em'}} >
           Hasibu is a business management tool. It is the complete package every
            business owner and manager is looking for.No matter where you are,
            we can make it happen
           </h1 >
      
         </div>
            </div>   */}

      