import {Grid} from 'antd'
import styles from '../styles/Whyhasibu.module.scss'
import Security from '../public/security.svg'
import Cloud from '../public/Cloud_database.svg'


const WhyPageCards = () => {
    const screen = Grid.useBreakpoint()
    return ( 
        <div>
              <div className={styles.cards}>      
          <div className={styles.svgcontainer} >
            <Cloud  className={styles.othersvg}/>
            </div>
            <div >
            <h1 className={styles.othertitles}>
             Remote Access
            </h1>
            <p className={styles.othersubtitles}>
            You don't have to go anywhere. You have complete control of your business
            at your fingertips from the comfort of your couch. 
           
            </p>   
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
          <p className={styles.othersubtitles}>
          All your sensitive data will be stored securly in the cloud.
          Get all the data you need to imporve your 
          business compiled and presented amazaingly. 
          </p> 
          </div>
        {screen.xs? ''
        : <div className={styles.svgcontainer} >
        <Security className={styles.othersvg}/>  
        </div>
       } 
       
        </div>
        </div>
     );
}
 
export default WhyPageCards;