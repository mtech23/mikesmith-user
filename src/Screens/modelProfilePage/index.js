import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import afterimgframe from '../../Asserts/images/after-img-frame.png'
import { modelprofileview, modelprofillist  , Getmodelpostlist } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { toastAlert } from "../../utils";
import { ALERT_TYPES } from "../../constants";
import { loginSuccess } from "../../redux/slicers/user";
import { useDispatch } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
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
  Cancel,
  Heart,
  modal1,
  modal2,
  modal3,

  profileFeetImg03,
  profileFeetImg04,
  profileFeetImg05,
  profileFeetImg06,
  modelProfileRewardsBtnBk,
  editingIcon,
  sharingIcon,
  boostIcon,
} from "../../Asserts/images/index";

import "./style.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const ModelProfile = () => {

  const handleclick = () => {
    navigate('/')
  }
  const dispatch = useDispatch();
  const [userdata, setUserdata] = useState()
  const [userprofilelist, setprofilelist] = useState([])
  const baseurl = `${process.env.REACT_APP_BASE_URL}/public/`

  console.log("userprofilelist", userprofilelist)
  const modelprifile = async () => {
    try {
      const response = await modelprofileview();
      console.log("response", response)


      setUserdata(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

 
    }
  };
  // const modelprifilelist = async () => {
  //   try {
  //     const response = await modelprofillist();
  //     console.log("response", response)


  //     setprofilelist(response?.data)

  //   } catch (error) {
  //     console.error("Error in logging in:", error);

  //     // toastAlert(error, ALERT_TYPES.ERROR);
  //   }
  // };




  const modelprifilelist = async () => {
    try {
      const response = await Getmodelpostlist();
      console.log("response", response)


      setprofilelist(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };

   
  useEffect(() => {
    Aos.init();
    modelprifilelist()
    modelprifile()
  }, []);
  const navigate = useNavigate()
  const handleroute = () => {



    navigate('/add-post-page')
  }
  const [hearts, setHeart] = useState(false)

  const handleHeart = () => {
    setHeart(!hearts);
  }

  console.log("userprofilelist", userprofilelist)


  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="model_profile_section_main">
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
                      <img src={(baseurl + userdata?.profile_pic) && (userProfilePic)} />
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
                        <span className="hot_model_name">{userdata?.name || 'HOTMODEL1234'}</span>
                      </div>

                      <div
                        className="mb-3"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000"
                      >
                        <span className="user_access">{userdata?.email || 'HOTMODEL1234@gmail.com'}</span>
                      </div>

                      <p
                        className="user_profile_desc"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        {userdata?.bio || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard' }
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
                        <span className="no_of_follows">{userdata?.follower || 257}</span>
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
                        <span className="no_of_follows">{userdata?.following || 142} </span>
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-4 sec-pstmsg-btns">
                      <button
                        className="sign_actionBtn"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        onClick={handleroute}
                      >
                        add post
                      </button>

                      <button
                        className="sign_actionBtn"
                        data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        message
                      </button>
                    </div>

                    <div
                      data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <button className="give_tip_btn">BANK: $ {userdata?.earning}</button>
                    </div>

                    <div
                      className="mt-1"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <button className="rewards_btn">
                        Reward Points: 253
                      </button>
                    </div>
                  </div>

                  <div class="model_card_top_corner_img">
                    <img src={modelCardTopCorner} />
                  </div>

                  <div class="model_card_bottom_corner_img"  >
                    <img src={modelCardBottomCorner} />
                  </div>
                </div>


              </div>
            </div>

            <div className="col-md-9">
              <div className="feet_container_main">
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

                <div className="row">
                  <div className="col-sm-6 col-lg-4">
                    <div className="second_model_card"
                      data-toggle="modal"
                      data-target=".exampleModal"  >

                      <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >


                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg01} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative  first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg01} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg01} className="img-fluid" />
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
                        </SwiperSlide>
                      </Swiper>


                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="second_model_card"


                      data-toggle="modal"
                      data-target=".exampleModal"
                    >   <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal"
                          >
                            <img src={profileFeetImg02} className="w-100" />
                            <span className="edit_icon_img">

                            </span>

                            <span className="share_icon_img">

                            </span>

                            <span className="boost_icon_img">

                            </span>


                            <div>
                              <div className="model_have_a_look_btn" style={{ bottom: '0px' }}>
                                <button className="have_alook_btn">have  a look</button>
                                <span className="be_nice_span">
                                  BE NICE, or we will crush you!
                                </span>
                              </div>
                            </div>
                          </div>


                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg02} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg02} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg02} className="img-fluid" />

                          </div>


                        </SwiperSlide>
                      </Swiper>


                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="second_model_card"

                      data-toggle="modal"
                      data-target=".exampleModal">
                      <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg03} className="w-100" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg03} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg03} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg03} className="img-fluid" />

                          </div>


                          <div>
                            <div className="model_have_a_look_btn">
                              <button className="have_alook_btn">have a look</button>
                              <span className="be_nice_span">
                                BE NICE, or we will crush you!
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>


                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="first_model_card">
                      <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>

                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg04} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg04} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card"

                            data-toggle="modal"
                            data-target=".exampleModal"
                          >
                            <img src={profileFeetImg04} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">

                            <img src={profileFeetImg04} className="img-fluid" />

                          </div>


                          <div>
                            <div className="model_have_a_look_btn">
                              <button className="have_alook_btn">have a look</button>
                              <span className="be_nice_span">
                                BE NICE, or we will crush you!
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      <div className="model_card_top_corner_img">
                        <img src={modelCardTopCorner} />
                      </div>

                      <div className="model_card_bottom_corner_img" id="model_card_bottom_corner_imgs">
                        <img src={modelCardBottomCorner} />
                      </div>

                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="first_model_card">
                      <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card"


                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg05} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg05} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg05} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg05} className="img-fluid" />

                          </div>


                          <div>
                            <div className="model_have_a_look_btn">
                              <button className="have_alook_btn">have a look</button>
                              <span className="be_nice_span">
                                BE NICE, or we will crush you!
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      <div className="model_card_top_corner_img">
                        <img src={modelCardTopCorner} />
                      </div>

                      <div className="model_card_bottom_corner_img" id="model_card_bottom_corner_imgs">
                        <img src={modelCardBottomCorner} />
                      </div>

                    </div>
                  </div>

                  {/* <div className="col-sm-6 col-lg-4">
                    <div className="second_model_card"

                      data-toggle="modal"
                      data-target=".exampleModal">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg06} className="w-100" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg06} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg06} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg06} className="img-fluid" />
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
                        </SwiperSlide>
                      </Swiper>


                    </div>
                  </div> */}

                  <div className="col-sm-6 col-lg-4">
                    <div className="first_model_card">
                      <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg04} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_im first_model_cardg" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg04} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg04} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img first_model_card">
                            <img src={profileFeetImg04} className="img-fluid" />

                          </div>


                          <div>
                            <div className="model_have_a_look_btn">
                              <button className="have_alook_btn">have a look</button>
                              <span className="be_nice_span">
                                BE NICE, or we will crush you!
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      <div className="model_card_top_corner_img">
                        <img src={modelCardTopCorner} />
                      </div>

                      <div className="model_card_bottom_corner_img" id="model_card_bottom_corner_imgs">
                        <img src={modelCardBottomCorner} />
                      </div>

                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="first_model_card">
                      <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg05} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg05} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg05} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img">
                            <img src={profileFeetImg05} className="img-fluid" />

                          </div>


                        </SwiperSlide>
                      </Swiper>

                      <div className="model_card_top_corner_img">
                        <img src={modelCardTopCorner} />
                      </div>

                      <div className="model_card_bottom_corner_img" id="model_card_bottom_corner_imgs">
                        <img src={modelCardBottomCorner} />
                      </div>

                      {/* <div className='framePic'>
                    <img src={framePic} className=''/>
                </div> */}
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="second_model_card"
                      data-toggle="modal"
                      data-target=".exampleModal">
                      <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg06} className="w-100" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg06} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"

                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg06} className="img-fluid" />
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
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="second_model_card_img position-relative first_model_card"
                            data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg06} className="img-fluid" />
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
                        </SwiperSlide>
                      </Swiper>

                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="first_model_card">
                      <div type="button" className="framePic">
                        <img src={afterimgframe} className="frameimg" />
                      </div>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="model_card_img position-relative first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg04} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_im first_model_cardg" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg04} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img first_model_card" data-toggle="modal"
                            data-target=".exampleModal">
                            <img src={profileFeetImg04} className="img-fluid" />
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

                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img first_model_card">
                            <img src={profileFeetImg04} className="img-fluid" />

                          </div>


                          <div>
                            <div className="model_have_a_look_btn">
                              <button className="have_alook_btn">have a look</button>
                              <span className="be_nice_span">
                                BE NICE, or we will crush you!
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      <div className="model_card_top_corner_img">
                        <img src={modelCardTopCorner} />
                      </div>

                      <div className="model_card_bottom_corner_img" id="model_card_bottom_corner_imgs">
                        <img src={modelCardBottomCorner} />
                      </div>

                    </div>
                  </div>
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
                        {/* <p className="carousel-footer_price">$12.44</p>
                        <button onClick={handleclick} className="carousel-footer_button">Buy</button> */}
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

export default ModelProfile;
