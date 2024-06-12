import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import afterimgframe from '../../Asserts/images/after-img-frame.png'
import { modelprofileview, modelprofillist, Getmodelpostlist, Getmodelpost, UserUnflowmodel } from "../../api";
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

  const [filterid, setfilterid] = useState()

  const handleid = (id) => {
    const datafilter = userprofilelist.filter((items) => items.id == id)
    console.log("datafilter", datafilter)
    setfilterid(datafilter)

  }
  const handleclick = () => {
    navigate('/')
  }
  const dispatch = useDispatch();
  const [userdata, setUserdata] = useState([])
  const [userprofilelist, setprofilelist] = useState([])
  const baseurl = `${process.env.REACT_APP_BASE_URL}/public/`

  console.log("userprofilelist", userprofilelist)
  const modelprofile = async () => {
    try {
      const response = await modelprofileview();
      console.log("response1", response)


      setUserdata(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);


    }
  };
  const getmodelprofile = async () => {
    try {
      const response = await Getmodelpost();
      console.log("response", response)


      setprofilelist(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };



  // const modelprofilelist = async () => {
  //   try {
  //     const response = await Getmodelpostlist();
  //     console.log("response", response)


  //     setprofilelist(response?.data)

  //   } catch (error) {
  //     console.error("Error in logging in:", error);

  //     // toastAlert(error, ALERT_TYPES.ERROR);
  //   }
  // };


  useEffect(() => {
    Aos.init();
    // modelprofilelist()
    modelprofile()
    getmodelprofile()
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



  const [modellist, setmodellisting] = useState(true)

  const [follow, setFollowing] = useState(false)
  const [sendmessages, setSendmessage] = useState(false)
  const [transactions, setTransactions] = useState(false)
  const [Recivedtips, setRecivedtips] = useState(false)





  const [givestip, setGivestip] = useState(false)
  const following = () => {
    setFollowing(!follow)
    setmodellisting(false)
    setSendmessage(false)
    setTransactions(false)
    setGivestip(false)
    setRecivedtips(false)
  }
  const sendmessage = () => {
    setSendmessage(!sendmessages)
    setFollowing(false)
    setmodellisting(false)
    setTransactions(false)
    setGivestip(false)
    setRecivedtips(false)
  }


  const transaction = () => {
    setTransactions(!transactions)
    setRecivedtips(false)
    setFollowing(false)
    setSendmessage(false)
    setmodellisting(false)
    setGivestip(false)
  }
  const showprofile = () => {
    setmodellisting(true)
    setTransactions(false)
    setFollowing(false)
    setSendmessage(false)

    setGivestip(false)
  }

  const givetip = () => {
    setTransactions(false)
    setFollowing(false)
    setSendmessage(false)
    setmodellisting(false)
    setGivestip(!givestip)
  }

  const [isChecked, setIsChecked] = useState(null);

  const handleRadioChange = (id) => {
    // setIsChecked(!isChecked);
    if (id === isChecked) {
      setIsChecked(null);
      return;
    }

  };

  const recived_tips = () => {
    setTransactions(false)
    setRecivedtips(!Recivedtips)
    setFollowing(false)
    setSendmessage(false)
    setmodellisting(false)
    setGivestip(false)
  }

  console.log("filterid", filterid)

  const stylesForSidebar = {
    "marginTop": "0px",
    "height": "100%",
    "borderRadius": "20px",
    "width": "80%",
    "padding": "34px 0px 12px",
    "maxHeight" : "300px",
    "objectFit": "contain",
};

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
                  {/* <div className="user_profile_bk_img">
                    <img src={userProfilePicBackground} className="img-fluid" />
                  </div> */}

                  <div className="user_profile_info text-center px-5">
                    <div type="button" onClick={showprofile}
                      className="user_profile_picture"
                      data-aos="flip-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <img src={(baseurl + userdata?.profile_pic) && (modelImg01)} style={stylesForSidebar}/>
                    </div>

                    <div className="user_info">
                      <div type="button" onClick={showprofile}
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

                      <div type="button" onClick={showprofile}
                        className="mb-3"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000"
                      >
                        <span className="user_access">{userdata?.email || 'HOTMODEL1234@gmail.com'}</span>
                      </div>


                      <div className="main_about_div">
                                            <h6 className="hot_model_name text-center about_text">About</h6>
                                            <p className="user_profile_about">
                                            I'm the sweetest thing you will ever meet. Message me and I'll do whatever your heart desires.
                                            </p>
                                        </div>

                                        <div className="user_about_icons">
                                            <span className="facebook_icon">
                                                {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </span>

                                            <span className="facebook_icon">
                                            {/* <FontAwesomeIcon icon="fa-brands fa-square-instagram" /> */}
                                            <i class="fa-brands fa-instagram"></i>
                                            </span>

                                            <span className="facebook_icon">
                                            {/* <FontAwesomeIcon icon="fa-brands fa-square-instagram" /> */}
                                            <i class="fa-brands fa-youtube"></i>
                                            </span>

                                            <span className="facebook_icon">
                                            {/* <FontAwesomeIcon icon="fa-brands fa-square-instagram" /> */}
                                            <i class="fa-brands fa-twitter"></i>
                                            </span>

                                       
                                        </div>

                      {/* <p
                        className="user_profile_desc"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                                         {userdata?.bio || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard' }

                      </p> */}
                    </div>

                    <div
                      className="followers_div mb-4"
                      data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <span className="followers_title">followers</span>
                      <span className="followers_number">
                        <span className="no_of_follows">{userdata?.follower || 0}</span>
                      </span>
                    </div>

                    <div
                      className="followers_div"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      {/* <span className="followers_title">following</span> */}
                      <div
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        <button className="followers_numbers text-center mb-2" onClick={following}>  Following</button>
                      </div>
                      <span className="followers_number">
                        <span className="no_of_follows">{userdata?.following || 0} </span>
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-4 sec-rqst-btns">
                      {/* <button
                        className="sign_actionBtn"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        send request
                      </button> */}

                      {/* sign_actionBtn */}

                      <button
                        className="followers_numbers text-center text-capitalize"
                        data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        onClick={sendmessage} >
                        send message
                      </button>
                      <button
                        className="followers_numbers text-center text-capitalize"
                        data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        onClick={transaction} >
                        Transaction
                      </button>
                    </div>


                    <div
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                    {/* give_tip_btn */}  
                      <button className="followers_numbers text-center text-capitalize" onClick={recived_tips}>  Recived Tips</button>
                    </div>

                    <div
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      {/* <button onClick={givetip} className="give_tip_btn">give tip</button> */}
                    </div>
                  </div>

                  <div class="model_card_top_corner_img">
                    <img src={modelCardTopCorner} />
                  </div>

                  <div class="model_card_bottom_corner_img"  >
                    <img src={modelCardBottomCorner} />
                  </div>
                </div>
                {/* 
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
                        <div className="other_user_info" type="button" >
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
                </div> */}
              </div>
            </div>

            <div className="col-md-9">
              <div className="feet_container_main">
                {/* <div class="all_filtered_btn" bis_skin_checked="1">
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
                </div> */}





                {modellist && (
                  <div className="row  ">
                    {userprofilelist?.map((items, index) => (


                      <div className="col-sm-6 col-lg-4" onClick={() => handleid(items?.id)}>
                        <div className="first_model_card">


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
                                  <img src={data?.file ? baseurl + data.file : "dummy"} className="img-fluid" />

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

                          <div className="model_card_bottom_corner_img" >
                            <img src={modelCardBottomCorner} />
                          </div>

                        </div>
                      </div>
                    ))}

                  </div>
                )}

                {follow && (
                  <div className="row tabs_box">
                    <div className="col-md-12">
                      <h3
                        className="following_heading"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        Following
                      </h3>
                      <div className="divider_row"></div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 pt-4" data-aos="fade-up" data-aos-duration="3000">
                      <div className="follow_img_div">
                        <img className="img-fluid follow_img" src={modelImg02} alt="Brittanyvues" />
                        <p className="image_text">Brittanyvues</p>
                        <div className="locked_div">
                          <p className="free_text">
                            <span className="icon_unlock">
                              <i className="fa-solid fa-unlock"></i>
                            </span>
                            Free
                          </p>
                          <p className="lock_text">
                            <span className="icon_lock">
                              <i className="fa-solid fa-lock"></i>
                            </span>
                            Locked
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 pt-4" data-aos="fade-down" data-aos-duration="3000">
                      <div className="follow_img_div">
                        <img className="img-fluid follow_img" src={modelImg02} alt="Brittanyvues" />
                        <p className="image_text">Brittanyvues</p>
                        <div className="locked_div">
                          <p className="free_text">
                            <span className="icon_unlock">
                              <i className="fa-solid fa-unlock"></i>
                            </span>
                            Free
                          </p>
                          <p className="lock_text">
                            <span className="icon_lock">
                              <i className="fa-solid fa-lock"></i>
                            </span>
                            Locked
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}






                {sendmessages && (
                  <div className="tabs_box box_height">
                    <div className="row">
                      <div className="col-md-12 ">
                        <h3 className="inbox_heading" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="3000" >Inbox</h3>
                        <div className="divider_row"></div>
                      </div>

                    </div>

                    <div className="row inbox_container">
                      <div className="col-lg-4 col-sm-12 right_divider ">
                        <div className="example example_one">
                          <form class="" action="/action_page.php" >
                            <button type="submit"><i class="fa fa-search"></i></button>
                            <input type="text" placeholder="Search Message" name="search2" />
                          </form>
                        </div>
                        <div className="profile_div">
                          <div> <img className="img-fluid profile_img" src={userProfilePic} /></div>
                          <div>
                            <p className="profile_name"> Brittanyvues <sup className="profile_message_date"> 29 May 07:55 AM </sup> </p>
                            <p className="message_text">I am</p>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-8 col-sm-12 p-0 ">
                        <div className="inbox_header_row">
                          <div className="profile_div pl-3">
                            <div> <img className="img-fluid profile_img" src={userProfilePic} /></div>

                            <div>
                              <p className="profile_name"> Brittanyvues </p>

                            </div>
                          </div>


                          <div className="custom_dropdown_div">
                            <div class="dropdown">
                              <button class=" custom_btn_secondary" type="button" data-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis"></i>
                              </button>
                              <div class="dropdown-menu custom_dropdown-menu">
                                <a class="dropdown-item custom_dropdown_item" href="#">View Profile</a>
                                <a class="dropdown-item custom_dropdown_item" href="#">Delete Chat</a>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="divider_row"></div>

                        <div className="main_chat_div">
                          <div className="chat_box">
                            <p className="message_date">29 May 07:55 AM</p>
                            <p className="message_para">Hey</p>
                          </div>
                          <div className="chat_box">
                            <p className="message_date">29 May 07:59 AM</p>
                            <p className="message_para">I'm waiting</p>
                          </div>
                          <div className="chat_box_reply">
                            <p className="message_date">29 May 08:09 AM</p>
                            <p className="message_para_reply">Hey</p>
                          </div>
                          <div className="chat_box_reply">
                            <p className="message_date">29 May 08:12 AM</p>
                            <p className="message_para_reply">Coming</p>
                          </div>
                          {/* <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">I'm waiting</p>
                                        </div>
                                        <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">I'm waiting</p>
                                        </div>
                                        <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">I'm waiting</p>
                                        </div>
                                        <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des</p>
                                        </div>
                                        <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">I'm waiting</p>
                                        </div>
                                        <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">I'm waiting</p>
                                        </div>
                                        <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">I'm waiting</p>
                                        </div>
                                        <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">I'm waiting</p>
                                        </div>
                                        <div className="chat_box">
                                          <p className="message_date">29 May 07:59 AM</p>
                                          <p className="message_para">I'm waiting</p>
                                        </div> */}
                        </div>


                        <div className="message_sent_box">

                          <div className="main_btn_input_div">
                            <input type="text" className="message_type_box" placeholder="Write Text" id="name" name="name" required />
                            <button className="message_type_box_icon" ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}




                {transactions && (
                  <div className="row tabs_box">

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
                  </div>
                )}





                {Recivedtips && (
                  <div className="row tabs_box">

                    <div className="col-md-12">
                      <h3 className="following_heading" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="3000" >Tips History</h3>
                      <div className="divider_row"></div>
                    </div>
                    <div className="col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class="table_header_bg">
                            <tr>
                              <th scope="col" className="table_header_row">Date</th>
                              <th scope="col" className="table_header_row">Amount</th>
                              <th scope="col" className="table_header_row">Name</th>
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
                  </div>
                )}










                {givestip && (
                  <div className="row paytab">

                    <div className="col-md-19">
                      <h3 className="following_heading" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="3000" >Payment Information</h3>
                      <div className="divider_row"></div>
                    </div>
                    <div className="col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
                      <h4 className="  text-white mt-2 mb-2">Choose Amount </h4>
                      <div className="tipgap row  mx-auto    ">
                        <div className="paytips col-md-3    mb-4 justify-content-center">
                          <input
                            className=""
                            type="radio"
                            id="ti"
                            checked={isChecked}
                            onClick={() => handleRadioChange(0)}
                          /> <label for="t1">$25</label>
                        </div>




                        <div className="paytips col-md-3    mb-4 justify-content-center">
                          <input
                            className=""
                            type="radio"
                            checked={isChecked}
                            onClick={() => handleRadioChange(1)}
                          /> $50
                        </div>

                        <div className="paytips col-md-3    mb-4 justify-content-center">
                          <input
                            className=""
                            type="radio"
                            checked={isChecked}
                            onClick={() => handleRadioChange(2)}
                          /> $100
                        </div>
                        <div className="paytips col-md-3  mb-4 " >
                          <input
                            className=""
                            type="radio"
                            checked={isChecked}
                            onClick={() => handleRadioChange(3)}
                          /> $120
                        </div>
                        <div className="paytips col-md-3  mb-4 ">
                          <input
                            className=""
                            type="radio"
                            checked={isChecked}
                            onClick={() => handleRadioChange(4)}
                          /> $150
                        </div>
                        <div className="paytips col-md-3  mb-4 ">
                          <input
                            className=""
                            type="radio"
                            checked={isChecked}
                            onClick={() => handleRadioChange(5)}
                          /> $200
                        </div>

                      </div>

                      <h4 className="  text-white mt-2 mb-2">Custom Amount </h4>
                      <div className="custompay mb-4"> $
                        <input className="custom" type="text" />
                      </div>
                      <button className="paybtn mt -4">
                        Pay Now
                      </button>
                    </div>
                  </div>
                )}
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
                        <h3 className="modal-title">{filterid?.catgeory_detail?.name}</h3>
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
                        {filterid?.post_data?.map((items) => (

                          <SwiperSlide>
                            <img src={baseurl + items?.file} />
                          </SwiperSlide>))}

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
