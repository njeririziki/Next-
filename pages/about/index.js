import React from 'react';
import {Card,Typography,Space} from 'antd'
// import Success from '../../public/successful_purchase.svg'
// import Computer from '../../public/Computer.svg'
// import Laptop from '../../public/Laptop.svg'
// import Man from '../../public/man_lift.svg'
// import Girl from '../../public/girl_laptop.svg'
import Analytics from '../../public/Analytics.svg'
import styles from '../../styles/About.modules.css'

function AboutPage() {
    return (
        <Space className={styles.root} >
          < Card className={styles.fcard}>
         <Typography.Title level={1}>
         Success full shoping spree
         </Typography.Title>
           
          </Card>
          <Card className={styles.scard}>
          <Analytics className={styles.svg} />
          </Card>
                
        </Space>
    )
}

export default AboutPage
