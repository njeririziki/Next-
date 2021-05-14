import { Card, Col, Row, Grid } from 'antd';
import Analytics from '../../public/Analytics.svg'
import Business from '../../public/Business.svg'
import Investment from '../../public/Investment.svg'
import Mobile from '../../public/Mobile.svg'

const { Meta } = Card;
const FeatGrid = () => {
    return ( 
        <div style={{backgroundColor:'#e8f5e9',padding:'1em 1em 1em 1em',width:'fit-content'}} >
        <Row gutter={16}>
        <Col span={8} >
            <Card 
            hoverable={true} 
            style={{ width:350,height:400 }}
            cover={<Analytics/>}>
            <Meta title="Analytics" description="" />
            </Card>
        </Col>
             <Col span={8}>
            <Card 
            hoverable={true}
            style={{ width:350,height:400 }}
            cover={<Mobile/>}  >
            <Meta title="Notifications" description="" />
            </Card>
            </Col>
        <Col span={8}    >
            <Card  hoverable={true}
        style={{ width:350,height:400 }}
            cover={<Business/>}  >
            <Meta title="Performance Review" description="" />
            </Card>
        </Col>
   
   
        </Row>
        </div>
     );
}
 
export default FeatGrid;

