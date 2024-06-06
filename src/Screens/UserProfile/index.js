import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import afterimgframe from '../../Asserts/images/after-img-frame.png'
import dummy from '../../Asserts/images/dummy.jpg'
import { useDispatch } from "react-redux";
// Import Swiper styles
import follow from '../../Asserts/images/follow.png'
import "swiper/css";
import "swiper/css/pagination";
import { logoutRequest } from "../../redux/slicers/user";
import { useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Getmodelpostlist, Userprogileview, UserUnflowmodel, userLogoutRequest } from '../../api'
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
    mainLogo,
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
const UserProfile = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    // const handleclick = () => {
    //   data-dismiss:"modal"
    //   navigate('/payment-page')
    // }




    const dispatch = useDispatch()
    const modalRef = useRef(null);

    const handleclick = () => {
        navigate('/payment-page');
    }


    const flowmodel = async () => {
        try {
            const response = await UserUnflowmodel(id);
            console.log("response", response)

            if (response?.status == true) {

                const data = response?.data;
                console.log("data", data)
                // setModellists(data)
                model_listview()

            } else {
                // toastAlert(response.statusText, ALERT_TYPES.ERROR);
                console.log("packege ", response.statusText)
            }
            // setModellists(response?.data)

        } catch (error) {
            console.error("Error in logging in:", error);

            // toastAlert(error, ALERT_TYPES.ERROR);
        }
    };




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



    const [modellistsprofileview, setModelprofileview] = useState({})

    console.log("modellists", modellists)


    const model_listview = async () => {
        try {
            const response = await Userprogileview();
            console.log("response", response)

            if (response?.status == true) {

                const data = response?.data;
                console.log("data", data)
                setModelprofileview(data)


            } else {
                // toastAlert(response.statusText, ALERT_TYPES.ERROR);
                console.log("packege ", response.statusText)
            }
            setModelprofileview(response?.data)

        } catch (error) {
            console.error("Error in logging in:", error);

            // toastAlert(error, ALERT_TYPES.ERROR);
        }
    };




    console.log("modellists", modellists)
    useEffect(() => {
        model_list()
        model_listview()
        Aos.init();

    }, []);
    const [hearts, setHeart] = useState(false)

    const handleHeart = () => {
        setHeart(!hearts);
    }
    const apiUrl = process.env.REACT_APP_BASE_URL;
    const baseurl = `${apiUrl}/public/`

    const [modellist, setmodellisting] = useState(true)

    const [userNewData, setUserNewData] = useState({})
    const [follow, setFollowing] = useState(false)
    const [sendmessages, setSendmessage] = useState(false)
    const [transactions, setTransactions] = useState(false)
    const handlepay = () => {
        navigate('/payment-page')
    }

    const [givestip, setGivestip] = useState(false)
    const following = () => {
        setFollowing(true)
        setmodellisting(false)
        setSendmessage(false)
        setTransactions(false)
        setGivestip(false)
        setUnlock(false)
    }
    const sendmessage = () => {
        setSendmessage(true)
        setFollowing(false)
        setmodellisting(false)
        setTransactions(false)
        setGivestip(false)
    }


    const transaction = () => {
        setTransactions(true)
        setFollowing(false)
        setSendmessage(false)
        setUnlock(false)
        setmodellisting(false)
        setGivestip(false)
    }
    const showprofile = () => {
        setmodellisting(true)
        setTransactions(false)
        setFollowing(false)
        setUnlock(false)
        setSendmessage(false)

        setGivestip(false)
    }

    const givetip = () => {
        setTransactions(false)
        setFollowing(false)
        setSendmessage(false)
        setmodellisting(false)
        setGivestip(true)
        setUnlock(false)
    }


    const [unlock, setUnlock] = useState(false)
    const unlockcontents = () => {
        setTransactions(false)
        setFollowing(false)
        setSendmessage(false)
        setmodellisting(false)
        setUnlock(true)
        setSetting(false)
    }


    const [setting, setSetting] = useState(false)

    const settings = () => {
        setSetting(true)
        setTransactions(false)
        setFollowing(false)
        setSendmessage(false)
        setmodellisting(false)
        setUnlock(false)
        setGivestip(false)
    }




    const [isChecked, setIsChecked] = useState(null);

    const handleRadioChange = (id) => {
        // setIsChecked(!isChecked);
        if (id === isChecked) {
            setIsChecked(null);
            return;
        }

    }





    const handlefile = (event) => {
        const file = event.target.files[0];

        if (file) {
            setUserNewData((prevData) => ({
                ...prevData,
                image: file,
            }));

            const logoutData = localStorage.getItem('userToken');
            document.querySelector('.loaderBox')?.classList?.remove("d-none");

            const formDataMethod = new FormData();
            formDataMethod.append('image', file);

            fetch(`${apiUrl}/public/api/user/profile-add-edit`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${logoutData}`,
                },
                body: formDataMethod,
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("datas", data.data);
                    // document.querySelector('.loaderBox').classList.add("d-none");

                    if (data?.status === true) {
                        model_listview()
                    } else {
                        // Handle other responses
                    }
                })
                .catch((error) => {
                    document.querySelector('.loaderBox').classList.add("d-none");
                    console.error("Error:", error);
                });
        }
    };
    const handleLogout = async () => {
        try {
            const response = await userLogoutRequest();

            if (response && response.status === true) {
                // toastAlert('Logged Out Successfully', ALERT_TYPES.SUCCESS);
                localStorage.removeItem("userToken");
                localStorage.removeItem("userrole");
                dispatch(logoutRequest());
                navigate("/login-page");
            } else {
                // toastAlert(response.statusText, ALERT_TYPES.ERROR);
            }
        } catch (error) {
            // toastAlert(error, ALERT_TYPES.ERROR);
        }
    };
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="profile_section_main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <div className="profile_left_part">
                                <div className="user_profile_main position-relative">
                                    <div className="user_profile_bk_img">
                                        <img src={userProfilePicBackground} className="img-fluid" />
                                    </div>

                                    <div className="user_profile_info text-center">
                                        <div type="button" onClick={showprofile}
                                            className="user_profile_picture"
                                            data-aos="flip-left"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-duration="3000"
                                        >
                                            <img src={(baseurl + modellistsprofileview?.profile_pic)} />
                                            <div className="profile_edit_icon">  <input type="file" name="image" onChange={handlefile} /> <i class="fa-regular fa-pen-to-square "></i>
                                            </div>
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
                                                <span className="hot_model_name">{modellistsprofileview?.name || 'HOTMODEL1234'}</span>
                                            </div>

                                            <div type="button" onClick={showprofile}
                                                className="mb-3"
                                                data-aos="fade-right"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="2000"
                                            >
                                                <span className="user_access">{modellistsprofileview?.email || 'HOTMODEL1234@gmail.com'}</span>
                                            </div>

                                            {/* <p
                        className="user_profile_desc"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                                         {modellistsprofileview?.bio || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard' }

                      </p> */}
                                        </div>

                                        {/* <div
                                            className="followers_div mb-4"
                                            data-aos="fade-left"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-duration="3000"
                                        >
                                            <span className="followers_title">followers</span>
                                            <span className="followers_number">
                                                <span className="no_of_follows">{modellistsprofileview?.follower || 0}</span>
                                            </span>
                                        </div> */}

                                        <div
                                            className="followers_div"
                                            data-aos="fade-right"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-duration="3000"
                                        >
                                            {/* <span className="followers_title">following</span> */}
                                            {/* <div
                                                data-aos="fade-right"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="3000"
                                            >
                                                <button className="give_tip_btn" onClick={flowmodel}>  {modellistsprofileview?.follow == true ? "Unfollow" : " follow"}  </button>
                                                <button className="give_tip_btn" onClick={following}>  following</button>

                                            </div>
                                            <span className="followers_number">
                                                <span className="no_of_follows">{modellistsprofileview?.following || 0} </span>
                                            </span> */}
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
                                            <button onClick={unlockcontents}
                                                className="followers_numbers"
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="3000"
                                            >
                                                <span className="profile_btn_icons"><i class="fa-solid fa-unlock-keyhole "></i></span>
                                                Unclocked Content
                                            </button>

                                            <button
                                                className=" followers_numbers"
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="3000"
                                                onClick={sendmessage} >
                                                <i class="fa-solid fa-envelope profile_btn_icons"></i>
                                                Inbox
                                            </button>
                                            <button
                                                className=" followers_numbers"
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="3000"
                                                onClick={following}>

                                                <i class="fa-solid fa-user-plus profile_btn_icons"></i>
                                                Following
                                            </button>
                                            <button
                                                className="followers_numbers"
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="3000"
                                                onClick={transaction} >
                                                <i class="fa-regular fa-credit-card profile_btn_icons"></i>
                                                Transaction
                                            </button>
                                            <button
                                                onClick={settings}
                                                className="followers_numbers"
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="3000"
                                            >
                                                <i class="fa-solid fa-gear profile_btn_icons"></i>
                                                Settings
                                            </button>
                                            <button
                                                className=" followers_numbers"
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="3000"
                                            >
                                                <i class="fa-solid fa-handshake-angle profile_btn_icons"></i>
                                                Partner Program
                                            </button>
                                            <button onClick={handleLogout}
                                                className="followers_numbers"
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-duration="3000"
                                            >
                                                <i class="fa-solid fa-arrow-right-from-bracket profile_btn_icons"></i>
                                                Log Out
                                            </button>
                                        </div>

                                        <div
                                            data-aos="fade-right"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-duration="3000"
                                        >
                                            <button onClick={givetip} className="followers_numbers">
                                                <i class="fa-solid fa-circle-dollar-to-slot profile_btn_icons"></i>
                                                Give Tip
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

                        <div className="col-lg-9 col-sm-12">
                            <div className="feet_container_main">














                                {setting && (


                                    <div className="row tabs_box">

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
                                                            <button className="update_btn">  Update Email </button>
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
                                                            <input class="pass" type="password" placeholder=" Confirm Password" name="password" required />
                                                        </form>
                                                        <div className="divider_row"></div>
                                                        <div className="btns_row">
                                                            <button className="update_btn">  Update Paasword </button>
                                                            <a href="#" className="delete_btns"> <i class="fa fa-trash" aria-hidden="true"></i>  Delete Account </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )}


















                                {modellist && (
                                    <div className="row  ">
                                        {modellists?.map((items, index) => (


                                            <div className="col-sm-6 col-lg-4">
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


















                                {unlock && (

                                    <div className="tabs_box box_height">
                                        <div className="row">
                                            <div   className="col-10 col-sm-6 col-lg-3 mx-auto">
                                                <div className="first_model_card">


                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        onSlideChange={() => console.log("slide change")}
                                                        onSwiper={(swiper) => console.log(swiper)}
                                                    >

                                                        <SwiperSlide  >
                                                            <div className="model_card_img position-relative">
                                                                <img
                                                                    src={modelImg03}
                                                                    className="img-fluid"
                                                                />
                                                                {/* {token && (
                                                                    <span
                                                                        type="button"
                                                                        onClick={() => handleHeart(item?.id)}
                                                                        className="heart_icon"
                                                                    >
                                                                        <i className={`fa ${item?.favourite == true ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
                                                                    </span>
                                                                )} */}

                                                            </div>

                                                            <div className="model_card_desc ">
                                                                <div className="model_div">
                                                                    <div className="image_with_text_row">
                                                                        <img className="img-fluid model_img" src={userProfilePic} />
                                                                        <p className="profile_name_one"> Brittanyvues </p>
                                                                    </div>


                                                                    <div className="image_with_text_row_two">
                                                                        <p className="free_locked_text">
                                                                            <span className="unlocked_icon">
                                                                                <i className="fa-solid fa-unlock"></i>
                                                                            </span>

                                                                            Free
                                                                        </p>
                                                                        <p className="lock_text_clr free_locked_text">
                                                                            <span className="locked_icon">
                                                                                <i className="fa-solid fa-lock"></i>
                                                                            </span>

                                                                            Locked
                                                                        </p>
                                                                    </div>

                                                                </div>
                                                                <div className="description_box">
                                                                    <a className="product_heading" href="#">Lorem Ipsum</a>
                                                                    <p className="product_description" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                        Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                                </div>










                                                            </div>

                                                        </SwiperSlide>


                                                    </Swiper>

                                                    <div className="model_card_top_corner_img">
                                                        <img src={modelCardTopCorner} />
                                                    </div>

                                                    <div className="model_card_bottom_corner_img">
                                                        <img src={modelCardBottomCorner} />
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












                                {givestip && (
                                    <div className="row paytab ">

                                        <div className="col-md-12">
                                            <h3 className="following_heading" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="3000" >Payment Information</h3>
                                            <div className="divider_row"></div>
                                        </div>
                                        <div className="col-md-4 choose_amount_column payment_right_side" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">


                                            <div className="payment_img_div">
                                                <img className="img-fluid payment_img" src={modelImg02} alt="Brittanyvues" />
                                                {/* <p className="image_text">Brittanyvues</p> */}
                                                <div className="model_div">
                                                    <div className="image_with_text_row">
                                                        <img className="img-fluid model_img" src={userProfilePic} />
                                                        <p className="profile_name_one"> Brittanyvues </p>
                                                    </div>


                                                    <div className="image_with_text_row_two">
                                                        <p className="free_locked_text">
                                                            <span className="unlocked_icon">
                                                                <i className="fa-solid fa-unlock"></i>
                                                            </span>

                                                            Free
                                                        </p>
                                                        <p className="lock_text_clr free_locked_text">
                                                            <span className="locked_icon">
                                                                <i className="fa-solid fa-lock"></i>
                                                            </span>

                                                            Locked
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>


                                        </div>
                                        <div className="col-md-8 choose_amount_column" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
                                            <h4 className="  text-white mt-2 mb-2">Choose Amount </h4>
                                            <div className="tipgap row  mx-auto    ">
                                                <div className="paytips col-md-3    mb-4 justify-content-center">
                                                    <input
                                                        className=""
                                                        id="t1"
                                                        type="radio"
                                                        checked={isChecked}
                                                        onClick={() => handleRadioChange(0)}
                                                    />   <label for="t1"> $100</label>
                                                </div>




                                                <div className="paytips col-md-3    mb-4 justify-content-center">
                                                    <input
                                                        className=""
                                                        id="t2"
                                                        type="radio"
                                                        checked={isChecked}
                                                        onClick={() => handleRadioChange(1)}
                                                    /> <label for="t2"> $200</label>
                                                </div>

                                                <div className="paytips col-md-3    mb-4 justify-content-center">
                                                    <input
                                                        className=""
                                                        id="t3"
                                                        type="radio"
                                                        checked={isChecked}
                                                        onClick={() => handleRadioChange(2)}
                                                    /> <label for="t3"> $300</label>
                                                </div>
                                                <div className="paytips col-md-3  mb-4 " >
                                                    <input
                                                        className=""
                                                        type="radio"
                                                        id="t4"
                                                        checked={isChecked}
                                                        onClick={() => handleRadioChange(3)}
                                                    />   <label for="t4"> $400</label>
                                                </div>
                                                <div type="btn" className="paytips col-md-3   mb-4 ">
                                                    <input
                                                        className=""
                                                        type="radio"
                                                        checked={isChecked}
                                                        id="t5"
                                                        onClick={() => handleRadioChange(4)}
                                                    />  <label for="t5"> $450</label>
                                                </div>
                                                <div className="paytips col-md-3  mb-4 ">
                                                    <input
                                                        className=""
                                                        id="t5"
                                                        type="radio"
                                                        checked={isChecked}
                                                        onClick={() => handleRadioChange(5)}
                                                    />  <label for="t5"> $500</label>
                                                </div>

                                            </div>

                                            <h4 className="  text-white mt-2 mb-2">Custom Amount </h4>
                                            <div className="custompay mb-4"> $
                                                <input className="custom" type="text" />
                                            </div>
                                            <button onClick={handlepay} className="paybtn mt -4">
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

export default UserProfile;