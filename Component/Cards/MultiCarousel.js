import React from 'react';
import Carousel from "react-multi-carousel";
import { List, Card, Button} from 'antd';
import "react-multi-carousel/lib/styles.css";
import styles  from '@/styles/Components.module.scss'
import {BuildFilled, RadarChartOutlined, RiseOutlined,SlidersOutlined} from '@ant-design/icons'

const {Meta}= Card 
// const features=[
//     {key:1,  
//     obj: 'We create clean, beautiful and engaging websites that meet your business objectives.', 
//     title:'Analytics',
//     cover: "/payment_completed.svg" ,
//     icon:<BuildFilled/>  },
//     {key:2,
//         obj:'We develop websites using both open-source and custom framework solutions ', 
//     title:'Performance Review',
//     cover: "/printer.jpg",
//    icon:<RadarChartOutlined/>},
//     {key:3,
//         obj: "We use scientific-driven practices to rank you on first page of Google ",
//          title:'Finacial Management',
//          cover: "/cash-register-min.jpg",
//        icon:<RiseOutlined/> },
//     {key:4,
//       obj: "We use scientific-driven practices to rank you on first page of Google and get your brand in front. ",
//       title:'POS',
//       cover: "/Error_notification.svg",
//      icon:<SlidersOutlined/>}
//  ]
 

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const MultiCarousel = (props) => {
    return ( 
  <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  arrows={ true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  //slidesToSlide={props.deviceType !== "mobile" ? 1 : 3}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={4000}
  className={styles.multicarousel}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={1000}
  //containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
 {/* { props.features.map(cont=>{
     <p>
         {cont.title} <br/> {cont.desc}
     </p>
 })}    */}

<div >
    <Card
      className={styles.featcards}
    cover={ <img src="/payment_completed.svg" alt='Cover'
    width='300px' height='300px'/>}>
        <Meta
        title='Fast payments'
        description=' At the snap of a finger '
        />
    </Card>
</div>
  <div > 
      <Card
      className={styles.featcards}
    cover={ <img src="/cash-register-min.jpg" alt='Cover'
    width='300px' height='300px'/>}>
        <Meta
        title=' Weekly reports'
        description=' Track all the transactions '
        />
    </Card>
    </div>
  <div >
  <Card
  className={styles.featcards}
    cover={ <img src="/Error_notification.svg" alt='Cover'
    width='300px' height='300px'/>}>
        <Meta
        title=' Custom notifications'
        description=' You stay upto date with everything '
        />
    </Card>
  </div>

 
</Carousel>
     );
}
 
export default MultiCarousel;
