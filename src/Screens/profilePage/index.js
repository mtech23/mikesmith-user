import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import afterimgframe from '../../Asserts/images/after-img-frame.png'
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
const Profile = () => {
  const { id } = useParams()
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

  const model_list = async () => {
    try {
      const response = await Getmodelpostlist(id);
      console.log("response", response)

      if (response?.status == true) {

        const data = response?.data;
        console.log("data", data)
        setModellists(data)


      } else {
        // toastAlert(response.statusText, ALERT_TYPES.ERROR);
        console.log("packege ", response.statusText)
      }
      setModellists(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };



  console.log("modellists", modellists)
  useEffect(() => {
    model_list()
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
          <div className="row">
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

            <div className="col-md-9">
              <div className="feet_container_main">

                <div className="row">
                  {modellists?.map((items, index) => (


                    <div className="col-sm-6 col-lg-4">
                      <div className="first_model_card">
                        {/* <div type="button" className="framePic">
                            <img src={afterimgframe} className="frameimg" />
                          </div> */}

                        <Swiper
                          spaceBetween={30}
                          slidesPerView={1}
                          onSlideChange={() => console.log("slide change")}
                          onSwiper={(swiper) => console.log(swiper)}
                        >
                          {items?.post_data?.map((data) => (

                            <SwiperSlide>
                              <div className="model_card_img position-relative first_model_card"
                                data-toggle="modal"
                                data-target=".exampleModal">
                                <img src={data?.file ? baseurl + data.file : dummy} className="img-fluid" />
                               
                                <span className="edit_icon_img">

                                </span>

                                <span className="share_icon_img">

                                </span>

                                <span className="boost_icon_img">

                                </span>
                              </div>

                              <div>
                                <div className="model_have_a_look_btn">
                                  <button className="have_alook_btn">have a look</button>
                                  <span className="be_nice_span">
                                    BE NICE, or we will crush you!
                                  </span>
                                </div>
                              </div>
                            </SwiperSlide>))}


                        </Swiper>

                        <div className="model_card_top_corner_img">
                          <img src={modelCardTopCorner} />
                        </div>

                        <div className="model_card_bottom_corner_img" id="model_card_bottom_corner_imgs">
                          <img src={modelCardBottomCorner} />
                        </div>

                      </div>
                    </div>
                  ))}





                </div>
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

export default Profile;
