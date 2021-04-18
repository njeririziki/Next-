import React from 'react';
import {Layout} from 'antd'
import {SlackOutlined,TwitterOutlined,FacebookOutlined,GithubFilled,InstagramFilled} from '@ant-design/icons'

const {Footer} =Layout

const FooterComp = () => {
    return (
        <Footer style={{backgroundColor:'#000000', padding:'2em 2em 2em 2em',color:'#ffffff'}}>

            <div style={{display:'flex', flexDirection:'row', width:'500px'}} >
           <p style={{fontSize:'1.5em'}}>Follow us on : </p> 
         <div style={{fontSize:'1.5em',display:'flex', flexDirection:'column',
          justifyContent:'space-between',marginLeft:'1em'}}>
        <p><TwitterOutlined/>  @hasibu </p>  
        <p>  <FacebookOutlined/>  Hasibu Africa </p> 
          <p> <InstagramFilled/>  hasibu_africa </p> 
          <p> <GithubFilled/>  Hasibu-Suite </p> 
          <p> <SlackOutlined/>  @hasibusuite </p> 
         </div>
            </div>
           
           <p style={{fontSize:'1.5em',color:'#ffffff'}}> Contacts us at : <b>
           creareafrica@gmail.com  </b> </p>
         
        </Footer>
      );
}
 
export default FooterComp;
