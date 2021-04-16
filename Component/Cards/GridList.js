import { List, Card, Statistic } from 'antd';
const {Meta}= Card

const GridCards = ({data}) => {
    return (  
         <List
        grid={{ gutter: 16, xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,}}
        dataSource={data}
        renderItem={total=> (
          <List.Item key={total.key}>
            <Card hoverable={true}
            cover={total.obj}>
           <Meta  title={total.title}/>
            </Card>
          </List.Item>
        )}
      />
       );
}
 

      export default GridCards;