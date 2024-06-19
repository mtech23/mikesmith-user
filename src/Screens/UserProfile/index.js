import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import afterimgframe from '../../Asserts/images/after-img-frame.png'
import dummy from '../../Asserts/images/dummy.jpg'

import { useDispatch } from "react-redux";
// Import Swiper styles
import Loader from "../../Components/loader";
import { Link } from 'react-router-dom';

import follow from '../../Asserts/images/follow.png'
import "swiper/css";
import "swiper/css/pagination";
import { logoutRequest } from "../../redux/slicers/user";
import { useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Getmodelpostlist, Userprogileview, UserUnflowmodel, userLogoutRequest, profileviewbyid } from '../../api'
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


    const [profilebyid, setprofilebyid] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(true);
    // const handleclick = () => {
    //   data-dismiss:"modal"
    //   navigate('/payment-page')
    // }

    const model_listpicbyid = async (id) => {
        try {
            const response = await profileviewbyid(id);


            if (response?.status == true) {

                const data = response?.data;
                console.log("data", data)
                setModelprofileview(data)


            } else {
                // toastAlert(response.statusText, ALERT_TYPES.ERROR);
                console.log("packege ", response.statusText)
            }
            setprofilebyid(response?.data)

        } catch (error) {
            console.error("Error in logging in:", error);

            // toastAlert(error, ALERT_TYPES.ERROR);
        }
    };



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
                // setLoading(false)

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
                setLoading(false)


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
        setSetting(false)
    }
    const sendmessage = () => {
        setSendmessage(true)
        setFollowing(false)
        setmodellisting(false)
        setUnlock(false)
        setTransactions(false)
        setGivestip(false)
        setSetting(false)
    }


    const transaction = () => {
        setTransactions(true)
        setFollowing(false)
        setSendmessage(false)
        setUnlock(false)
        setmodellisting(false)
        setGivestip(false)
        setSetting(false)
    }
    const showprofile = () => {
        setmodellisting(true)
        setTransactions(false)
        setFollowing(false)
        setUnlock(true)
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
        setSetting(false)
    }


    const [unlock, setUnlock] = useState(true)
    const unlockcontents = () => {
        setTransactions(false)
        setFollowing(false)
        setSendmessage(false)
        setmodellisting(false)
        setUnlock(true)
        setSetting(false)
        setGivestip(false)

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

    const plane_limit = localStorage.getItem('post_limit')



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


    const stylesForSidebar = {
        "marginTop": "0px",
        "height": "242px",
        "border-radius": "20px",
        "width": "192px",
        "padding": "12px 0px",
        "maxHeight": "300px",
        // "objectFit": "contain",
    };




    return (
        <>

            {isLoading ? (
                <Loader />
            ) : (

                <div>
                    <div>
                        <Header />
                    </div>

                    <div className="profile_section_main">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-3 col-sm-12">
                                    <div className="profile_left_part">
                                        <div className="user_profile_main position-relative">
                                            {/* <div className="user_profile_bk_img">
                                        <img src={userProfilePicBackground} className="img-fluid" />
                                    </div> */}

                                            <div className="user_profile_info text-center">
                                                <div type="button" onClick={showprofile}
                                                    className="user_profile_picture"
                                                    data-aos="flip-left"
                                                    data-aos-anchor-placement="center-bottom"
                                                    data-aos-duration="3000"

                                                >
                                                    <img src={(baseurl + modellistsprofileview?.profile_pic) && (modelImg01)} style={stylesForSidebar} />
                                                    <div className="profile_edit_icon">  <input type="file" className="edit_icon_input" name="image" onChange={handlefile} /> <i class="fa-regular fa-pen-to-square "></i>
                                                    </div>
                                                </div>
                                                {/* <div type="button" onClick={showprofile}
                                            className="user_profile_picture"
                                            data-aos="flip-left"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-duration="3000"
                                        >
                                            <img src={(baseurl + modellistsprofileview?.profile_pic)} />
                                            <div className="profile_edit_icon">  <input type="file" className="edit_icon_input" name="image" onChange={handlefile} /> <i class="fa-regular fa-pen-to-square "></i>
                                            </div>
                                        </div> */}

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


                                                </div>



                                                <div
                                                    className="followers_div"
                                                    data-aos="fade-right"
                                                    data-aos-anchor-placement="center-bottom"
                                                    data-aos-duration="3000"
                                                >

                                                </div>


                                                <div
                                                    className="followers_div mb-4"
                                                    data-aos="fade-left"
                                                    data-aos-anchor-placement="center-bottom"
                                                    data-aos-duration="3000"
                                                >
                                                    <span className="followers_title">Post Limit</span>
                                                    <span className="followers_number">
                                                        <span className="no_of_follows">{plane_limit - modellistsprofileview?.post_count || 10} / {plane_limit}</span>
                                                    </span>
                                                </div>



                                                <div className="d-flex justify-content-between align-items-center pt-4 sec-rqst-btns">

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
                                                    {/* <button
                                                        onClick={settings}
                                                        className="followers_numbers"
                                                        data-aos="fade-left"
                                                        data-aos-anchor-placement="center-bottom"
                                                        data-aos-duration="3000"
                                                    >
                                                        <i class="fa-solid fa-gear profile_btn_icons"></i>
                                                        Settings
                                                    </button> */}
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
                                                {/* 
                                        <div
                                            data-aos="fade-right"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-duration="3000"
                                        >
                                            <button onClick={givetip} className="followers_numbers">
                                                <i class="fa-solid fa-circle-dollar-to-slot profile_btn_icons"></i>
                                                Give Tip
                                            </button>
                                        </div> */}
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

                                <div className="col-lg-8 col-sm-12">
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
                                                                    <button className="create_btn">  Update Email </button>
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
                                                                    <button className="create_btn">  Update Paasword </button>
                                                                    <a href="#" className="delete_btns"> <i class="fa fa-trash" aria-hidden="true"></i>  Delete Account </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        )}



                                        {unlock && (
                                            <div className="row  ">
                                                {modellistsprofileview?.post_purchases?.map((items, index) => (


                                                    <div className="col-sm-6 col-lg-4">
                                                      

                                                        <div className="first_model_card profile_first_model">


                                                            <Swiper
                                                                spaceBetween={30}
                                                                slidesPerView={1}
                                                                onSlideChange={() => console.log("slide change")}
                                                                onSwiper={(swiper) => console.log(swiper)}
                                                            >
                                                                {items?.post_data?.map((data) => (
                                                                    // 
                                                                    <SwiperSlide   >
                                                                        <div
                                                                            className="model_card_img position-relative first_model_card profile_model_img"

                                                                        // data-target={items?.is_paid !== true ? ".exampleModal" : undefined}
                                                                        >
                                                                            <Link to={`/profile-page/${modellistsprofileview.id}`}>

                                                                                <img src={data?.file ? baseurl + data.file : dummy} className="img-fluid" />
                                                                            </Link>
                                                                            <span className="edit_icon_img">

                                                                            </span>

                                                                            <span className="share_icon_img">

                                                                            </span>

                                                                            <span className="boost_icon_img">

                                                                            </span>
                                                                            {items?.is_paid == true ? (
                                                                                <div className="onfront_image" data-toggle="modal"
                                                                                    data-target={items?.is_paid == true ? ".exampleModalunlock" : undefined} >
                                                                                    {/* <img src={onfrontimage} className="" /> */}
                                                                                </div>
                                                                            ) : (
                                                                                " "
                                                                            )}

                                                                            {/* <div className="lock_icon_image">
                            <img src={locked_icon}/>
                        </div> */}

                                                                        </div>

                                                                        <div>

                                                                        </div>
                                                                    </SwiperSlide>))}


                                                            </Swiper>

                                                            <div className="model_card_top_corner_img" id="">
                                                                <img src={modelCardTopCorner} />
                                                            </div>

                                                            <div className="model_card_bottom_corner_img" id="">
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
                                                {modellistsprofileview?.user_following?.map((data) => (
                                                    <div className="col-lg-3 col-md-4 col-sm-12 pt-4" data-aos="fade-up" data-aos-duration="3000">
                                                        <div className="follow_img_div">
                                                            <Link to={`/profile-page/${data?.friend_detail?.id}`}>
                                                                <img className="img-fluid follow_img" src={data?.friend_detail?.profile_pic ? baseurl + data?.friend_detail?.profile_pic : dummy} alt="Profile" />
                                                            </Link>                                                <p className="image_text">{data?.friend_detail?.name}</p>
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
                                                    </div>))}
                                           
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




















                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
};

export default UserProfile;
