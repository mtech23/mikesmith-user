
import React from 'react'
import {mainLogo, footerSocialIcon01, footerSocialIcon02, footerSocialIcon03, footerSocialIcon04, footerSocialIcon05 ,footerSocialIcon06} from "../../../Asserts/images/index";
import "./style.css"

const Footer = () => {
  return (

    <div className='main_footer'>

      <div className='gradient_line'>

      </div>

      <div className='container pt-5'>

      <div className='row'>
        <div className='col-md-4'>
          <div className='footer_logo_with_content'>
            <div className='footer_logo'>
            <img src={mainLogo}/>
          </div>

          <p className='footer_logo_content'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
          </p>
        </div>
        </div>

        <div className='col-md-2'>
          <div className='quick_links'>
            <h6 className='footer_list_heading'>
              quick links
            </h6>

            <ul className='footer_list_main'>
              <li>home</li>
              <li>sign up</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Affiliates</li>
              <li>How It Works</li>
              <li>FAQ</li>
            </ul>
          </div>

        </div>

        <div className='col-md-2'>
          <div className='quick_links'>
            <h6 className='footer_list_heading'>
              useful links
            </h6>

            <ul className='footer_list_main'>
              <li>careers</li>
              <li>term of use</li>
              <li>privacy policy</li>
              <li>2257 Statement</li>
              <li>DMCA Policy</li>
              <li>CCPA</li>
            </ul>
          </div>

        </div>


        <div className='col-md-2'>
          <div className='quick_links'>
            <h6 className='footer_list_heading'>
              social media
            </h6>

            <div className='footer_social_icons'>

              <div className='footer_icon'>
                <img src={footerSocialIcon01}/>
              </div>

              <div className='footer_icon'>
                <img src={footerSocialIcon02}/>
              </div>

              <div className='footer_icon'>
                <img src={footerSocialIcon03}/>
              </div>

              <div className='footer_icon'>
                <img src={footerSocialIcon04}/>
              </div>

              <div className='footer_icon'>
                <img src={footerSocialIcon05}/>
              </div>

              <div className='footer_icon'>
                <img src={footerSocialIcon06}/>
              </div>

            </div>

            {/* <ul className='footer_list_main'>
              <li>careers</li>
              <li>term of use</li>
              <li>privacy policy</li>
              <li>2257 Statement</li>
              <li>DMCA Policy</li>
              <li>CCPA</li>
            </ul> */}
          </div>

        </div>
      </div>

      </div>

    </div>

    
  )
}

export default Footer