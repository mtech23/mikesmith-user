
import React from 'react'
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';

import {platinumFeetText, headerSearchIcon, legsImage01, imgTopCorner, imgBottomCorner, hundredPercentage, homeImg01, modelText, modelImg01 ,modelCardTopCorner, modelCardBottomCorner, modelImg02, modelImg03, modelImg04, framePic, hoverableImg, mainFrameImg, videoPlayIcon, modelImg05, modelImg06, modelImg07, howItWorksText, howItWorksImg, forClientText, forClientImg, forModelsText, formodelImg01, formodelImg02, faqText, userProfilePic, userProfilePicBackground, moreUserProfilePic, profileFeetImg01, profileFeetImg02, profileFeetImg03, profileFeetImg04, profileFeetImg05, profileFeetImg06, modelProfileRewardsBtnBk, editingIcon, sharingIcon, boostIcon} from "../../Asserts/images/index";

import "./style.css";


const ModelProfile = () => {
  return (
    <div>

        <div>
            <Header/>
        </div>

        <div className='model_profile_section_main'>
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
                                            <button className='sign_actionBtn'>add post</button>
                                        </div>

                                        <div>
                                            <button className='sign_actionBtn'>message</button>
                                        </div>

                                    </div>

                                    <div>
                                        <button className='give_tip_btn'>BANK: $1234.42</button>
                                    </div>

                                    <div className='mt-4'>
                                        <button className='rewards_btn'>Reward Points: 253</button>
                                    </div>


                                </div>

                                <div class="model_card_top_corner_img">
                                    <img src={modelCardTopCorner}/>
                                </div>

                                <div class="model_card_bottom_corner_img">
                                    <img src={modelCardBottomCorner}/>
                                </div>

                            </div>

                            {/* <div className='more_profiles_main'>
                                <div>
                                    <p className='more_profiles_like_this_title'>more profiles like this</p>
                                </div>

                                <div className='all_other_users_profiles'>

                                    <div className='more_profiles_content'>
                                        <div className='more_user_profile_details'>
                                            <div className='more_users_profile_img'>
                                                <img src={moreUserProfilePic}/>
                                            </div>
                                            <div className='other_user_info'>
                                                <p className='other_user_name'>HOTMODEL1234</p>
                                                <span className='other_user_access'>@HOTMODEL1223</span>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='user_profile_follow_btn'>follow</button>
                                        </div>
                                    </div>

                                    <div className='more_profiles_content'>
                                        <div className='more_user_profile_details'>
                                            <div className='more_users_profile_img'>
                                                <img src={moreUserProfilePic}/>
                                            </div>
                                            <div className='other_user_info'>
                                                <p className='other_user_name'>HOTMODEL1234</p>
                                                <span className='other_user_access'>@HOTMODEL1223</span>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='user_profile_follow_btn'>follow</button>
                                        </div>
                                    </div>

                                    <div className='more_profiles_content'>
                                        <div className='more_user_profile_details'>
                                            <div className='more_users_profile_img'>
                                                <img src={moreUserProfilePic}/>
                                            </div>
                                            <div className='other_user_info'>
                                                <p className='other_user_name'>HOTMODEL1234</p>
                                                <span className='other_user_access'>@HOTMODEL1223</span>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='user_profile_follow_btn'>follow</button>
                                        </div>
                                    </div>

                                    <div className='more_profiles_content'>
                                        <div className='more_user_profile_details'>
                                            <div className='more_users_profile_img'>
                                                <img src={moreUserProfilePic}/>
                                            </div>
                                            <div className='other_user_info'>
                                                <p className='other_user_name'>HOTMODEL1234</p>
                                                <span className='other_user_access'>@HOTMODEL1223</span>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='user_profile_follow_btn'>follow</button>
                                        </div>
                                    </div>

                                    <div className='more_profiles_content'>
                                        <div className='more_user_profile_details'>
                                            <div className='more_users_profile_img'>
                                                <img src={moreUserProfilePic}/>
                                            </div>
                                            <div className='other_user_info'>
                                                <p className='other_user_name'>HOTMODEL1234</p>
                                                <span className='other_user_access'>@HOTMODEL1223</span>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='user_profile_follow_btn'>follow</button>
                                        </div>
                                    </div>

                                    <div className='more_profiles_content'>
                                        <div className='more_user_profile_details'>
                                            <div className='more_users_profile_img'>
                                                <img src={moreUserProfilePic}/>
                                            </div>
                                            <div className='other_user_info'>
                                                <p className='other_user_name'>HOTMODEL1234</p>
                                                <span className='other_user_access'>@HOTMODEL1223</span>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='user_profile_follow_btn'>follow</button>
                                        </div>
                                    </div>


                                </div>
                            </div> */}

                        </div>
                    </div>

                    <div className='col-md-9'>

                        <div className='feet_container_main'>

                        <div class="all_filtered_btn" bis_skin_checked="1">

                                <div bis_skin_checked="1">
                                    <button class="sign_actionBtn">My posts</button>
                                </div>

                            <div bis_skin_checked="1">
                                <button class="sign_actionBtn">My Sales</button>
                            </div>
                            
                                <div bis_skin_checked="1">
                                    <button class="sign_actionBtn">Loved posts</button>
                                </div>

                                <div bis_skin_checked="1">
                                    <button class="sign_actionBtn">Favorited member</button>
                                </div>
                                
                                <div bis_skin_checked="1">
                                <button class="sign_actionBtn">Fans</button>
                                </div>
                                
                                </div>

                            <div className='row'>

                            <div className='col-sm-6 col-lg-4'>
                                    <div className='second_model_card'>
                                        
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg01} className='w-100' />
                                                <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg01} className='img-fluid' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                        </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                <img src={profileFeetImg01} className='img-fluid' />
                                                <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                    <img src={profileFeetImg01} className='img-fluid' />
                                                    <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                    </Swiper>

                                    {/* <div className='framePic'>
                                        <img src={framePic} className=''/>
                                    </div> */}



                                    </div>

                                </div>

                                <div className='col-sm-6 col-lg-4'>
                                    <div className='second_model_card'>
                                        
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg02} className='w-100' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg02} className='img-fluid' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                        </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                <img src={profileFeetImg02} className='img-fluid' />
                                                <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                    <img src={profileFeetImg02} className='img-fluid' />
                                                    {/* <span className='heart_icon'>
                                                    <i class="fa-solid fa-heart"></i>
                                                    </span> */}
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                    </Swiper>

                                    {/* <div className='framePic'>
                                        <img src={framePic} className=''/>
                                    </div> */}

                                    </div>

                                </div>

                                <div className='col-sm-6 col-lg-4'>
                                    <div className='second_model_card'>
                                        
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg03} className='w-100' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg03} className='img-fluid' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                        </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                <img src={profileFeetImg03} className='img-fluid' />
                                                <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                    <img src={profileFeetImg03} className='img-fluid' />
                                                    {/* <span className='heart_icon'>
                                                    <i class="fa-solid fa-heart"></i>
                                                    </span> */}
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                    </Swiper>

                                    {/* <div className='framePic'>
                                        <img src={framePic} className=''/>
                                    </div> */}

                                    </div>

                                </div>

                                <div className='col-sm-6 col-lg-4'>
                                <div className='first_model_card'>
                    
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>

                    <SwiperSlide>
                        <div className='model_card_img position-relative'>
                        <img src={profileFeetImg04} className='img-fluid' />
                      <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                        </div>

                        {/* <div className='model_card_desc'>
                        <div className='name_with_status'>
                            <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                            <span className='hot_model_name'>HOTMODEL1234</span>
                        </div>
                        <div>
                            <span className='hotmodel_info'>38-USA</span>
                            <span className='send_tip_text'>send tip</span>
                        </div>

                        <div className='pt-2'>
                            <button className='sign_actionBtn'>view profile</button>
                        </div>
                    </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                        <img src={profileFeetImg04} className='img-fluid' />
                        <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                        </div>

                        {/* <div className='model_card_desc'>
                        <div className='name_with_status'>
                            <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                            <span className='hot_model_name'>HOTMODEL1234</span>
                        </div>
                        <div>
                            <span className='hotmodel_info'>38-USA</span>
                            <span className='send_tip_text'>send tip</span>
                        </div>

                        <div className='pt-2'>
                            <button className='sign_actionBtn'>view profile</button>
                        </div>
                    </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                            <img src={profileFeetImg04} className='img-fluid' />
                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                            </div>

                            {/* <div className='model_card_desc'>
                            <div className='name_with_status'>
                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                <span className='hot_model_name'>HOTMODEL1234</span>
                            </div>
                            <div>
                                <span className='hotmodel_info'>38-USA</span>
                                <span className='send_tip_text'>send tip</span>
                            </div>

                            <div className='pt-2'>
                                <button className='sign_actionBtn'>view profile</button>
                            </div>
                        </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                                <img src={profileFeetImg04} className='img-fluid' />
                                {/* <span className='heart_icon'>
                                <i class="fa-solid fa-heart"></i>
                                </span> */}
                            </div>

                            {/* <div className='model_card_desc'>
                            <div className='name_with_status'>
                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                <span className='hot_model_name'>HOTMODEL1234</span>
                            </div>
                            <div>
                                <span className='hotmodel_info'>38-USA</span>
                                <span className='send_tip_text'>send tip</span>
                            </div>

                            <div className='pt-2'>
                                <button className='sign_actionBtn'>view profile</button>
                            </div>
                        </div> */}
                    </SwiperSlide>
                
                </Swiper>

                <div className='model_card_top_corner_img'>
                    <img src={modelCardTopCorner} />
                </div>

                <div className='model_card_bottom_corner_img'>
                    <img src={modelCardBottomCorner} />
                </div>

                {/* <div className='framePic'>
                    <img src={framePic} className=''/>
                </div> */}

                </div>

                                    </div>

                                    <div className='col-sm-6 col-lg-4'>
                <div className='first_model_card'>
                    
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>

                    <SwiperSlide>
                        <div className='model_card_img position-relative'>
                        <img src={profileFeetImg05} className='img-fluid' />
                        <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                        </div>

                        {/* <div className='model_card_desc'>
                        <div className='name_with_status'>
                            <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                            <span className='hot_model_name'>HOTMODEL1234</span>
                        </div>
                        <div>
                            <span className='hotmodel_info'>38-USA</span>
                            <span className='send_tip_text'>send tip</span>
                        </div>

                        <div className='pt-2'>
                            <button className='sign_actionBtn'>view profile</button>
                        </div>
                    </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                        <img src={profileFeetImg05} className='img-fluid' />
                        <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                        </div>

                        {/* <div className='model_card_desc'>
                        <div className='name_with_status'>
                            <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                            <span className='hot_model_name'>HOTMODEL1234</span>
                        </div>
                        <div>
                            <span className='hotmodel_info'>38-USA</span>
                            <span className='send_tip_text'>send tip</span>
                        </div>

                        <div className='pt-2'>
                            <button className='sign_actionBtn'>view profile</button>
                        </div>
                    </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                            <img src={profileFeetImg05} className='img-fluid' />
                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                            </div>

                            {/* <div className='model_card_desc'>
                            <div className='name_with_status'>
                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                <span className='hot_model_name'>HOTMODEL1234</span>
                            </div>
                            <div>
                                <span className='hotmodel_info'>38-USA</span>
                                <span className='send_tip_text'>send tip</span>
                            </div>

                            <div className='pt-2'>
                                <button className='sign_actionBtn'>view profile</button>
                            </div>
                        </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                                <img src={profileFeetImg05} className='img-fluid' />
                                {/* <span className='heart_icon'>
                                <i class="fa-solid fa-heart"></i>
                                </span> */}
                            </div>

                            {/* <div className='model_card_desc'>
                            <div className='name_with_status'>
                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                <span className='hot_model_name'>HOTMODEL1234</span>
                            </div>
                            <div>
                                <span className='hotmodel_info'>38-USA</span>
                                <span className='send_tip_text'>send tip</span>
                            </div>

                            <div className='pt-2'>
                                <button className='sign_actionBtn'>view profile</button>
                            </div>
                        </div> */}
                    </SwiperSlide>
                
                </Swiper>

                <div className='model_card_top_corner_img'>
                    <img src={modelCardTopCorner} />
                </div>

                <div className='model_card_bottom_corner_img'>
                    <img src={modelCardBottomCorner} />
                </div>

                {/* <div className='framePic'>
                    <img src={framePic} className=''/>
                </div> */}

                </div>

                                    </div>

                                    <div className='col-sm-6 col-lg-4'>
                                    <div className='second_model_card'>
                                        
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg06} className='w-100' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg06} className='img-fluid' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                        </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                <img src={profileFeetImg06} className='img-fluid' />
                                                <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                    <img src={profileFeetImg06} className='img-fluid' />
                                                    <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                    </Swiper>

                                    {/* <div className='framePic'>
                                        <img src={framePic} className=''/>
                                    </div> */}

                                    </div>

                                </div>

                                <div className='col-sm-6 col-lg-4'>
                <div className='first_model_card'>
                    
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>

                    <SwiperSlide>
                        <div className='model_card_img position-relative'>
                        <img src={profileFeetImg04} className='img-fluid' />
                        <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                        </div>

                        {/* <div className='model_card_desc'>
                        <div className='name_with_status'>
                            <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                            <span className='hot_model_name'>HOTMODEL1234</span>
                        </div>
                        <div>
                            <span className='hotmodel_info'>38-USA</span>
                            <span className='send_tip_text'>send tip</span>
                        </div>

                        <div className='pt-2'>
                            <button className='sign_actionBtn'>view profile</button>
                        </div>
                    </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                        <img src={profileFeetImg04} className='img-fluid' />
                        <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                        </div>

                        {/* <div className='model_card_desc'>
                        <div className='name_with_status'>
                            <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                            <span className='hot_model_name'>HOTMODEL1234</span>
                        </div>
                        <div>
                            <span className='hotmodel_info'>38-USA</span>
                            <span className='send_tip_text'>send tip</span>
                        </div>

                        <div className='pt-2'>
                            <button className='sign_actionBtn'>view profile</button>
                        </div>
                    </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                            <img src={profileFeetImg04} className='img-fluid' />
                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                            </div>

                            {/* <div className='model_card_desc'>
                            <div className='name_with_status'>
                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                <span className='hot_model_name'>HOTMODEL1234</span>
                            </div>
                            <div>
                                <span className='hotmodel_info'>38-USA</span>
                                <span className='send_tip_text'>send tip</span>
                            </div>

                            <div className='pt-2'>
                                <button className='sign_actionBtn'>view profile</button>
                            </div>
                        </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                                <img src={profileFeetImg04} className='img-fluid' />
                                {/* <span className='heart_icon'>
                                <i class="fa-solid fa-heart"></i>
                                </span> */}
                            </div>

                            {/* <div className='model_card_desc'>
                            <div className='name_with_status'>
                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                <span className='hot_model_name'>HOTMODEL1234</span>
                            </div>
                            <div>
                                <span className='hotmodel_info'>38-USA</span>
                                <span className='send_tip_text'>send tip</span>
                            </div>

                            <div className='pt-2'>
                                <button className='sign_actionBtn'>view profile</button>
                            </div>
                        </div> */}
                    </SwiperSlide>
                
                </Swiper>

                <div className='model_card_top_corner_img'>
                    <img src={modelCardTopCorner} />
                </div>

                <div className='model_card_bottom_corner_img'>
                    <img src={modelCardBottomCorner} />
                </div>

                {/* <div className='framePic'>
                    <img src={framePic} className=''/>
                </div> */}

                </div>

                                    </div>

                                    <div className='col-sm-6 col-lg-4'>
                <div className='first_model_card'>
                    
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>

                    <SwiperSlide>
                        <div className='model_card_img position-relative'>
                        <img src={profileFeetImg05} className='img-fluid' />
                      <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                        </div>

                        {/* <div className='model_card_desc'>
                        <div className='name_with_status'>
                            <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                            <span className='hot_model_name'>HOTMODEL1234</span>
                        </div>
                        <div>
                            <span className='hotmodel_info'>38-USA</span>
                            <span className='send_tip_text'>send tip</span>
                        </div>

                        <div className='pt-2'>
                            <button className='sign_actionBtn'>view profile</button>
                        </div>
                    </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                        <img src={profileFeetImg05} className='img-fluid' />
                      <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                        </div>

                        {/* <div className='model_card_desc'>
                        <div className='name_with_status'>
                            <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                            <span className='hot_model_name'>HOTMODEL1234</span>
                        </div>
                        <div>
                            <span className='hotmodel_info'>38-USA</span>
                            <span className='send_tip_text'>send tip</span>
                        </div>

                        <div className='pt-2'>
                            <button className='sign_actionBtn'>view profile</button>
                        </div>
                    </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                            <img src={profileFeetImg05} className='img-fluid' />
                          <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                            </div>

                            {/* <div className='model_card_desc'>
                            <div className='name_with_status'>
                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                <span className='hot_model_name'>HOTMODEL1234</span>
                            </div>
                            <div>
                                <span className='hotmodel_info'>38-USA</span>
                                <span className='send_tip_text'>send tip</span>
                            </div>

                            <div className='pt-2'>
                                <button className='sign_actionBtn'>view profile</button>
                            </div>
                        </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='model_card_img'>
                                <img src={profileFeetImg05} className='img-fluid' />
                                {/* <span className='heart_icon'>
                                <i class="fa-solid fa-heart"></i>
                                </span> */}
                            </div>

                            {/* <div className='model_card_desc'>
                            <div className='name_with_status'>
                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                <span className='hot_model_name'>HOTMODEL1234</span>
                            </div>
                            <div>
                                <span className='hotmodel_info'>38-USA</span>
                                <span className='send_tip_text'>send tip</span>
                            </div>

                            <div className='pt-2'>
                                <button className='sign_actionBtn'>view profile</button>
                            </div>
                        </div> */}
                    </SwiperSlide>
                
                </Swiper>

                <div className='model_card_top_corner_img'>
                    <img src={modelCardTopCorner} />
                </div>

                <div className='model_card_bottom_corner_img'>
                    <img src={modelCardBottomCorner} />
                </div>

                {/* <div className='framePic'>
                    <img src={framePic} className=''/>
                </div> */}

                </div>

                                    </div>

                                    <div className='col-sm-6 col-lg-4'>
                                    <div className='second_model_card'>
                                        
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg06} className='w-100' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                            <img src={profileFeetImg06} className='img-fluid' />
                                            <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                            </div>

                                            {/* <div className='model_card_desc'>
                                            <div className='name_with_status'>
                                                <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                <span className='hot_model_name'>HOTMODEL1234</span>
                                            </div>
                                            <div>
                                                <span className='hotmodel_info'>38-USA</span>
                                                <span className='send_tip_text'>send tip</span>
                                            </div>

                                            <div className='pt-2'>
                                                <button className='sign_actionBtn'>view profile</button>
                                            </div>
                                        </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                <img src={profileFeetImg06} className='img-fluid' />
                                                <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='second_model_card_img position-relative'>
                                                    <img src={profileFeetImg06} className='img-fluid' />
                                                    <span className='edit_icon_img'>
                                                    <img src={editingIcon}/>
                                                </span>

                                                <span className='share_icon_img'>
                                                    <img src={sharingIcon}/>
                                                </span>

                                                <span className='boost_icon_img'>
                                                    <img src={boostIcon}/>
                                                </span>
                                                </div>

                                                {/* <div className='model_card_desc'>
                                                <div className='name_with_status'>
                                                    <span className='online_circle'><i class="fa-solid fa-circle"></i></span>
                                                    <span className='hot_model_name'>HOTMODEL1234</span>
                                                </div>
                                                <div>
                                                    <span className='hotmodel_info'>38-USA</span>
                                                    <span className='send_tip_text'>send tip</span>
                                                </div>

                                                <div className='pt-2'>
                                                    <button className='sign_actionBtn'>view profile</button>
                                                </div>
                                            </div> */}
                                        </SwiperSlide>

                                    </Swiper>

                                    {/* <div className='framePic'>
                                        <img src={framePic} className=''/>
                                    </div> */}

                                    </div>

                                </div>

                                

                            </div>

                        </div>

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

export default ModelProfile