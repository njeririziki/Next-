import React from 'react';
import {Layout} from 'antd'
import {SlackOutlined,TwitterOutlined,FacebookOutlined,GithubFilled,InstagramFilled} from '@ant-design/icons'



const FooterComp = () => {
    return (
        

          <div style={{fontSize:'1.2em',display:'flex', flexDirection:'column',
          justifyContent:'space-between', backgroundColor:'#102027', padding:'2em 2em 2em 2em',color:'#ffffff'}}>
            <div style={{display:'flex', flexDirection:'column',
          justifyContent:'space-between',marginLeft:'1em'}}>
              <p><b>Overview</b> </p>
              <p>Home</p>
              <p>About</p>
              <p>Why Hasibu</p>
              <p> Features</p>
            </div>
            <div style={{display:'flex', flexDirection:'column',
          justifyContent:'space-between',marginLeft:'1em'}}>
              <p><b>Contact us:</b> </p>
              <p> creareafrica.gmail.com</p>
              <p>+254 783 434 433</p>
              <p>Shikunga Road,South B</p>
              <p> Nairobi,Kenya</p>

            </div>
          <div style={{display:'flex', flexDirection:'column',
          justifyContent:'space-between',marginLeft:'1em'}}>
          <p><TwitterOutlined/>  @hasibu </p> 
          <p>  <FacebookOutlined/>  Hasibu Africa </p> 
          <p> <InstagramFilled/>  hasibu_africa </p> 
          <p> <GithubFilled/>  Hasibu-Suite </p> 
          <p> <SlackOutlined/>  @hasibusuite </p> 
         </div>
          </div>
        
        
      );
}
 
export default FooterComp;
