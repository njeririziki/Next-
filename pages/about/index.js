import React from 'react'
import Success from '../../public/successful_purchase.svg'
import Computer from '../../public/Computer.svg'
import Laptop from '../../public/Laptop.svg'
import Man from '../../public/man_lift.svg'
import Girl from '../../public/girl_laptop.svg'

function AboutPage() {
    return (
        <div style={{backgroundColor:'#efefef'}}>
            <Laptop  style={{width:'200px', height:'200px'}}/>
          <p>
              Success full shoping spree

            </p>  
            <Computer style={{width:'200px', height:'200px'}}/>
            <Man />
            <Success style={{width:'500px', height:'400px'}}/>
            <Girl />
           
            
        </div>
    )
}

export default AboutPage
