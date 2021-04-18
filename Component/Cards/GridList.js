import { List, Card, Statistic } from 'antd';
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
        style={{width:'900px'}}
        renderItem={total=> (
          <List.Item key={total.key}
          style={{ fontSize:'1.5em'}}>
            <Card hoverable={true}
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