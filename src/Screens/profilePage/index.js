
import React from 'react'
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';

import {platinumFeetText, headerSearchIcon, legsImage01, imgTopCorner, imgBottomCorner, hundredPercentage, homeImg01, modelText, modelImg01 ,modelCardTopCorner, modelCardBottomCorner, modelImg02, modelImg03, modelImg04, framePic, hoverableImg, mainFrameImg, videoPlayIcon, modelImg05, modelImg06, modelImg07, howItWorksText, howItWorksImg, forClientText, forClientImg, forModelsText, formodelImg01, formodelImg02, faqText, userProfilePic, userProfilePicBackground, moreUserProfilePic, profileFeetImg01, profileFeetImg02, profileFeetImg03, profileFeetImg04, profileFeetImg05, profileFeetImg06} from "../../Asserts/images/index";

import "./style.css";


const Profile = () => {
  return (
    <div>

        <div>
            <Header/>
        </div>

        <div className='profile_section_main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='profile_left_part'>

                            <div className='user_profile_main position-relative'>
                                <div className='user_profile_bk_img'>
                                    <img src={userProfilePicBackground} className='img-fluid'/>
                                </div>

                                <div className='user_profile_info text-center'>
                                    <div className='user_profile_picture'>
                                        <img src={userProfilePic}/>
                                    </div>

                                    <div className='user_info'>

                                    <div className='name_with_status pt-3'>
                                        <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                        <span className='hot_model_name'>HOTMODEL1234</span>
                                    </div>

                                    <div className='mb-3'>
                                        <span className='user_access'>@HOTMODEL1223</span>
                                    </div>

                                    <p className='user_profile_desc'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                                    </p>

                                    </div>

                                    <div className='followers_div mb-4'>
                                        <span className='followers_title'>followers</span>
                                        <span className='followers_number'>
                                            <span className='no_of_follows'>257</span>
                                        </span>
                                    </div>

                                    <div className='followers_div'>
                                        <span className='followers_title'>following</span>
                                        <span className='followers_number'>
                                            <span className='no_of_follows'>145</span>
                                        </span>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center pt-4'>

                                        <div>
                                            <button className='sign_actionBtn'>send request</button>
                                        </div>

                                        <div>
                                            <button className='sign_actionBtn'>send message</button>
                                        </div>

                                    </div>

                                    <div>
                                        <button className='give_tip_btn'>give tip</button>
                                    </div>

                                </div>

                                <div class="model_card_top_corner_img">
                                    <img src={modelCardTopCorner}/>
                                </div>

                                <div class="model_card_bottom_corner_img">
                                    <img src={modelCardBottomCorner}/>
                                </div>

                            </div>

                            <div className='more_profiles_main'>
                                <div>
                                    <p>more profiles like this</p>
                                </div>

                                <div>

                                    <div>
                                        <div>
                                            <div>
                                                <img src={moreUserProfilePic}/>
                                            </div>
                                            <div>
                                                <p>HOTMODEL1234</p>
                                                <span>@HOTMODEL1223</span>
                                            </div>
                                        </div>

                                        <div>
                                            <button>follow</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-9'>

                    </div>
                </div>
            </div>
        </div>

        <div>
            <Footer/>
        </div>


    </div>
)
}

export default Profile