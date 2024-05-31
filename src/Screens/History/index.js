import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import afterimgframe from '../../Asserts/images/after-img-frame.png'
import follow from '../../Asserts/images/follow.png'
import dummy from '../../Asserts/images/dummy.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Getmodelpostlist } from '../../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@awesome.me/kit-KIT_CODE/icons'

import {
  platinumFeetText,
  headerSearchIcon,
  legsImage01,
  imgTopCorner,
  imgBottomCorner,
  hundredPercentage,
  homeImg01,
  modelText,
  modelImg01,

  modelCardTopCorner,
  modelCardBottomCorner,
  modelImg02,
  modelImg03,
  modelImg04,
  framePic,
  hoverableImg,
  mainFrameImg,
  videoPlayIcon,
  modelImg05,
  modelImg06,
  modelImg07,
  howItWorksText,
  howItWorksImg,
  forClientText,
  forClientImg,
  forModelsText,
  formodelImg01,
  formodelImg02,
  faqText,
  userProfilePic,
  userProfilePicBackground,
  moreUserProfilePic,
  profileFeetImg01,
  profileFeetImg02,
  profileFeetImg03,
  profileFeetImg04,
  profileFeetImg05,
  profileFeetImg06,
  modal1,
  modal3,
  modal2,
  Cancel,
  Heart,
} from "../../Asserts/images/index";

import "./style.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
const History = () => {
    const navigate = useNavigate()
  // const handleclick = () => {
  //   data-dismiss:"modal"
  //   navigate('/payment-page')
  // }


  const modalRef = useRef(null);

  const handleclick = () => {
    navigate('/payment-page');
  }




  const [modellists, setModellists] = useState([])

  // const model_list = async () => {
  //   try {
  //     const response = await Getmodelpostlist(id);
  //     console.log("response", response)

  //     if (response?.status == true) {

  //       const data = response?.data;
  //       console.log("data", data)
  //       setModellists(data)


  //     } else {
  //       // toastAlert(response.statusText, ALERT_TYPES.ERROR);
  //       console.log("packege ", response.statusText)
  //     }
  //     setModellists(response?.data)

  //   } catch (error) {
  //     console.error("Error in logging in:", error);

  //     // toastAlert(error, ALERT_TYPES.ERROR);
  //   }
  // };



  console.log("modellists", modellists)
  useEffect(() => {
    // model_list()
    Aos.init();

  }, []);
  const [hearts, setHeart] = useState(false)

  const handleHeart = () => {
    setHeart(!hearts);
  }
const baseurl = `${process.env.REACT_APP_BASE_URL}/public/`

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="profile_section_main">
        <div className="container">
          <div className="row tabs_row">
            <div className="col-md-3">
              <div className="profile_left_part">
                <div className="user_profile_main position-relative">
                  <div className="user_profile_bk_img">
                    <img src={userProfilePicBackground} className="img-fluid" />
                  </div>

                  <div className="user_profile_info text-center">
                    <div
                      className="user_profile_picture"
                      data-aos="flip-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <img src={userProfilePic} />
                    </div>

                    <div className="user_info">
                      <div
                        className="name_with_status pt-3"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="1000"
                      >
                        <span className="online_circle">
                          <i class="fa-solid fa-circle"></i>
                        </span>
                        <span className="hot_model_name">HOTMODEL1234</span>
                      </div>

                      <div
                        className="mb-3"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000"
                      >
                        <span className="user_access">@HOTMODEL1223</span>
                      </div>

                      <p
                        className="user_profile_desc"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                      </p>
                    </div>

                    <div
                      className="followers_div mb-4"
                      data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <span className="followers_title">followers</span>
                      <span className="followers_number">
                        <span className="no_of_follows">257</span>
                      </span>
                    </div>

                    <div
                      className="followers_div"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <span className="followers_title">following</span>
                      <span className="followers_number">
                        <span className="no_of_follows">145</span>
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-4 sec-rqst-btns">
                      <button
                        className="sign_actionBtn"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        send request
                      </button>

                      <button
                        className="sign_actionBtn"
                        data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        send message
                      </button>
                    </div>

                    <div
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <button className="give_tip_btn">give tip</button>
                    </div>
                  </div>

                  <div class="model_card_top_corner_img">
                    <img src={modelCardTopCorner} />
                  </div>

                  <div class="model_card_bottom_corner_img"  >
                    <img src={modelCardBottomCorner} />
                  </div>
                </div>

                <div
                  className="more_profiles_main"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="3000"
                >
                  <div>
                    <p className="more_profiles_like_this_title">
                      more profiles like this
                    </p>
                  </div>

                  <div className="all_other_users_profiles">
                    <div className="more_profiles_content">
                      <div className="more_user_profile_details">
                        <div className="more_users_profile_img">
                          <img src={moreUserProfilePic} />
                        </div>
                        <div className="other_user_info">
                          <p className="other_user_name">HOTMODEL1234</p>
                          <span className="other_user_access">
                            @HOTMODEL1223
                          </span>
                        </div>
                      </div>

                      <div>
                        <button className="user_profile_follow_btn">
                          follow
                        </button>
                      </div>
                    </div>

                    <div className="more_profiles_content">
                      <div className="more_user_profile_details">
                        <div className="more_users_profile_img">
                          <img src={moreUserProfilePic} />
                        </div>
                        <div className="other_user_info">
                          <p className="other_user_name">HOTMODEL1234</p>
                          <span className="other_user_access">
                            @HOTMODEL1223
                          </span>
                        </div>
                      </div>

                      <div>
                        <button className="user_profile_follow_btn">
                          follow
                        </button>
                      </div>
                    </div>

                    <div className="more_profiles_content">
                      <div className="more_user_profile_details">
                        <div className="more_users_profile_img">
                          <img src={moreUserProfilePic} />
                        </div>
                        <div className="other_user_info">
                          <p className="other_user_name">HOTMODEL1234</p>
                          <span className="other_user_access">
                            @HOTMODEL1223
                          </span>
                        </div>
                      </div>

                      <div>
                        <button className="user_profile_follow_btn">
                          follow
                        </button>
                      </div>
                    </div>

                    <div className="more_profiles_content">
                      <div className="more_user_profile_details">
                        <div className="more_users_profile_img">
                          <img src={moreUserProfilePic} />
                        </div>
                        <div className="other_user_info">
                          <p className="other_user_name">HOTMODEL1234</p>
                          <span className="other_user_access">
                            @HOTMODEL1223
                          </span>
                        </div>
                      </div>

                      <div>
                        <button className="user_profile_follow_btn">
                          follow
                        </button>
                      </div>
                    </div>

                    <div className="more_profiles_content">
                      <div className="more_user_profile_details">
                        <div className="more_users_profile_img">
                          <img src={moreUserProfilePic} />
                        </div>
                        <div className="other_user_info">
                          <p className="other_user_name">HOTMODEL1234</p>
                          <span className="other_user_access">
                            @HOTMODEL1223
                          </span>
                        </div>
                      </div>

                      <div>
                        <button className="user_profile_follow_btn">
                          follow
                        </button>
                      </div>
                    </div>

                    <div className="more_profiles_content">
                      <div className="more_user_profile_details">
                        <div className="more_users_profile_img">
                          <img src={moreUserProfilePic} />
                        </div>
                        <div className="other_user_info">
                          <p className="other_user_name">HOTMODEL1234</p>
                          <span className="other_user_access">
                            @HOTMODEL1223
                          </span>
                        </div>
                      </div>

                      <div>
                        <button className="user_profile_follow_btn">
                          follow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="feet_container_main">
 
                <div className="row tabs_box">
                  <div className="col-md-12">
                    <h3 className="following_heading" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="3000" >Following</h3>
                    <div className="divider_row"></div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12 pt-4"  data-aos="fade-up"  data-aos-duration="3000" >
                    <div className="follow_img_div">
                      <img className="img-fluid follow_img" src={follow}/>
                      <p className="image_text">Brittanyvues</p>
                        <div className="locked_div">
                          <p className="free_text"><span className="icon_unlock"> <i class="fa-solid fa-unlock"></i> </span> Free </p>
                          <p className="lock_text"><span className="icon_lock"> <i class="fa-solid fa-lock"></i> </span> Locked </p>
                        </div>
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12 pt-4" data-aos="fade-down" data-aos-duration="3000">
                    <div className="follow_img_div">
                      <img className="img-fluid follow_img" src={follow}/>
                      <p className="image_text">Brittanyvues</p>
                        <div className="locked_div">
                          <p className="free_text"><span className="icon_unlock"> <i class="fa-solid fa-unlock"></i> </span> Free </p>
                          <p className="lock_text"><span className="icon_lock"> <i class="fa-solid fa-lock"></i> </span> Locked </p>
                        </div>
                    </div>

                  </div>
               
                </div>   


              {/* <div className="row tabs_box">
                  
                  <div className="col-md-12">
                    <h3 className="following_heading" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="3000" >Transactions</h3>
                    <div className="divider_row"></div>
                  </div>
                  <div className="col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
                        <div class="table-responsive">
                             <table class="table">
                                <thead class="table_header_bg">
                                   <tr>
                                        <th scope="col" className="table_header_row">Date</th>
                                        <th scope="col" className="table_header_row">Amount</th>
                                        <th scope="col" className="table_header_row">Seller</th>
                                        <th scope="col" className="table_header_row">Purchased</th>            
                                    </tr>
                                
                                  </thead>
                                  <tbody>
                                     <tr >
                                        <td class="order_history">25.05.2024</td>
                                        <td class="order_history">$80.00</td>
                                        <td class="order_history"><a href="#" className="seller_text"> Brittanyvues </a></td>
                                        <td class="order_history">Unlocked collection: Lime green high heels <span><a href="#" className="view_links"> View </a></span></td>
                                      
                                      </tr>
                                      <tr className="bg_table_row">
                                        <td class="order_history">29.05.2024</td>
                                        <td class="order_history">$7.00</td>
                                        <td class="order_history"><a href="#" className="seller_text"> Brittanyvues </a></td>
                                        <td class="order_history">Unlocked collection: Lime green high heels <span><a href="#" className="view_links"> View </a></span></td>
                                      
                                      </tr>
                                      <tr>
                                        <td class="order_history">26.05.2024</td>
                                        <td class="order_history">$9.00</td>
                                        <td class="order_history"><a href="#" className="seller_text"> Brittanyvues </a></td>
                                        <td class="order_history">Unlocked collection: Lime green high heels <span><a href="#" className="view_links"> View </a></span></td>
                                      
                                      </tr>
                                    </tbody>
                                </table>
                           </div>
                    </div>
                </div>   */}



            {/* <div className="row tabs_box">

                  <div className="col-md-12 p-0" >
                      <h3 className="following_heading" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="3000" > Settings </h3>
                      <div data-aos="fade-up" data-aos-duration="3000">
                           
                          <ul class="nav nav-pills tabs_header" id="pills-tab" role="tablist" >
                            <li class="nav-item " role="presentation">
                              <button class="nav-link tabs_text active form_tabs" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Change Email</button>
                            </li>
                            <li class="nav-item " role="presentation">
                              <button class="nav-link tabs_text form_tabs" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Change Password</button>
                            </li>
                          </ul>

                          <div className="divider_row"></div>
                          <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                              <form className="email-form">
                                  <label required class="user">
                                    {" "}
                                    Email:{" "}
                                  </label>
                                  <input class="mail" type="text" placeholder="Email Address " name="email" required />
                                <label required class="user">
                                    {" "}
                                    Confirm Email:{" "}
                                  </label>
                                  <input class="mail" type="text" placeholder="Confirm Email" name="email" required />
                              </form>
                              <div className="divider_row"></div>
                              <div className="btns_row">
                                <button className="update_btn">  Create Account </button> 
                                <a href="#" className="delete_btns"> <i class="fa fa-trash" aria-hidden="true"></i>  Delete Account </a>
                              </div>
                            </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                          <form className="email-form">                 
                                <label class="pass" required>
                                  {" "}
                                  Password{" "}
                                </label>
                              <input class="pass" type="password" placeholder="Password" name="password" required />
                              <label class="pass" required>
                                  {" "}
                                  Confirm Password{" "}
                                </label>
                              <input class="pass" type="password" placeholder= " Confirm Password" name="password" required />
                            </form>
                            <div className="divider_row"></div>
                            <div className="btns_row">
                              <button className="update_btn">  Create Account </button> 
                              <a href="#" className="delete_btns"> <i class="fa fa-trash" aria-hidden="true"></i>  Delete Account </a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>   */}



                {/* <div className="row tabs_box">
                  <div className="col-md-6 right_divider">
                      <h5 className="partner_program_heading">Partner Program</h5>
                      <p className="partner_program_text">Earn extra income by promoting Fun With Feet to your network. We pay generous recurring commissions for both buyer and seller referrals:</p>
                      <p className="partner_program_text">Learn more by visiting our <span> <a className="partner_program_link" href="#"> partner program page </a></span></p>
                      <p className="partner_program_text">Or get your custom referral links below and start making more money with Fun With Feet!</p>
                  </div>
               
                  <div className="col-md-6">
                      <h5 className="seller_heading">Seller referrals:</h5>
                      <p className="seller_para"> Earn <span className="text_bold"> 20% </span> on seller shop listing fees!</p>
                      <h5 className="seller_heading buyer_heading">Buyer referrals:</h5>
                      <p className="seller_para"> Earn <span className="text_bold"> 5% </span> on any buyer's purchase!</p>
                      <h5 className="seller_heading promo_heading">Promo codes:</h5>
                      <p className="seller_para"> Our promo codes give your followers a <span className="text_bold"> 10% </span> discount on seller listing fees.</p>
                  </div>
                  <div className="second_divider_row"></div>
                  <div className="col-md-6">
                    <h5 className="affiliate_earnings_heading"> Affiliate earnings:  <span className="affiliate_earnings_amount"> $0.00 </span></h5>

                  </div>
                  <div className="col-md-6">
                    <div className="disabled_btn_row"> <button className="withdraw_btn" disabled>  Withdraw </button> </div>
                    <p className="btn_note">You will be able to withdraw funds once you reach a balance of $50 or more</p>
                  </div>
                  <div className="second_divider_row"></div>
                  <div className="col-md-12">
                      <h5 className="affiliate_earnings_heading"> Your affiliate links </h5>
                      <p className="partner_program_text">Simply add /?rel=5187111 to the end of any of our links, and we'll track and credit you for people you refer to Fun With Feet</p>
                      <div class="form-group form_row">
                        <label for="exampleFormControlSelect1">Please see below for pre-formatted links:</label>
                        <select class="form-control slection_container" id="exampleFormControlSelect1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                     </div>
                  </div>

                  

                </div>  */}



























              </div>
            </div>

            <div className="col-md-12">
              <div
                class="modal fade exampleModal"
                // id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered my-modal">
                  <div class="modal-content">
                    <div className="carousel-modal">
                      <div class="carousel-header">
                        <div className="carousel-icons">
                          <div className="caarousel-icons_inner">
                            <a
                              href="javaScript:;"
                              className="cancel"
                              data-dismiss="modal"
                            >
                              <img src={Cancel} />
                            </a>
                            <a type="button" onClick={handleHeart} className="heart">
                              {/* <img src={Heart} /> */}
                              <i className={`fa ${hearts ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
                            </a>

                          </div>
                        </div>
                        <h3 className="modal-title">HOTMODEL1234</h3>
                        <p className="modal-subtitle">38- USA - 2 Hours ago</p>
                      </div>

                      <Swiper
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={15}
                        navigation={true}
                        // pagination={{
                        //   clickable: true,
                        // }}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src={modal1} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={modal2} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={modal3} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={modal2} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={modal3} />
                        </SwiperSlide>
                      </Swiper>

                      <div className="carousel-footer">
                        <h4 className="carousel-footer_title">
                          My Pretty Pink Nails :)
                        </h4>
                        <p className="carousel-footer_body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
                        </p>
                        <p className="carousel-footer_price">$12.44</p>
                        <button onClick={handleclick} className="carousel-footer_button " data-dismiss="modal">Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default History;
