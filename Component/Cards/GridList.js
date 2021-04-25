import { List, Card, Button} from 'antd';
import Image from 'next/image'
import {ArrowRightOutlined} from '@ant-design/icons'

const {Meta}= Card 

const GridCards = ({data}) => {
    return (  
         <List
        grid={{ gutter: [35, 20], xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,}}
        dataSource={data}
        style={{padding:'1.2em'}}
        renderItem={total=> (
          <List.Item key={total.key}
          style={{ fontSize:'1.5em'}}>
            <Card hoverable={true}
            cover={total.cover?<Image src={total.cover} alt='Cover'
            width='400px' height='300px'/> : null} 
            >
           <Meta 
           avatar={total.icon}
           style={{fontSize:'1.5em'}}
            title={total.title}
                  description={total.obj}/>
            </Card>
          </List.Item>
        )}
      />
       );
}
 

      export default GridCards;