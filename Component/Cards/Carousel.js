 import React from 'react';
 import {Card,Carousel} from 'antd'
 import Computer from '../../public/Computer.svg'
 import Business from '../../public/Business.svg'
 import Investment from '../../public/Investment.svg'
 //const items

 const FeatCarousel = ({items}) => {
     return ( 
        <div style={{backgroundColor:'#bbdefb',width:'300px',
        height:'300px'}}>
         <Carousel autoplay>
          <Card style={{width:'200px',height:'300px'}} >
             <Computer/>
          </Card>
          <Card style={{width:'200px',height:'300px'}} >
             <Business/>
          </Card>
          <Card style={{width:'200px',height:'300px'}} >
             <Investment/>
          </Card>
         </Carousel>
        </div>
    
      );
 }
  
 export default FeatCarousel;