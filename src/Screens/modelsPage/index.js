import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

import { Addmodelpost, modellist, UserUnfavouritemodel } from '../../api'

import "swiper/css";

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
  userProfilePic,
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
  hotModelImg01,
} from "../../Asserts/images/index";

// import {modelText, headerSearchIcon} from "../../Asserts/images/index";

import "./style.css";
import { useNavigate } from "react-router-dom";


const listingCard = [
  {
    swipperData: [
      {
        modelName: "HOTMODEL1234",
        address: "38-USA",
        cardImage: modelImg01,
      },
      {
        modelName: "HOTMODEL1234",
        address: "38-USA",
        cardImage: modelImg02,
      },
    ],
  },
  {
    swipperData: [
      {
        modelName: "HOTMODEL1234",
        address: "38-USA",
        cardImage: modelImg02,
      },
      {
        modelName: "HOTMODEL1234",
        address: "38-USA",
        cardImage: modelImg01,
      },
    ],
  },
  {
    swipperData: [
      {
        modelName: "HOTMODEL1234",
        address: "38-USA",
        cardImage: modelImg04,
      },
      {
        modelName: "HOTMODEL1234",
        address: "38-USA",
        cardImage: modelImg05,
      },
    ],
  },
  {
    swipperData: [
      {
        modelName: "HOTMODEL1234",
        address: "38-USA",
        cardImage: modelImg05,
      },
      {
        modelName: "HOTMODEL1234",
        address: "38-USA",
        cardImage: modelImg04,
      },
    ],
  },
];





const Model = () => {


  const token = localStorage.getItem("userToken")
  const [heart, setHearts] = useState(false)
  const [hearts, setHeart] = useState(false)

  // const handleHeart = () => {
  //   setHeart(!hearts);
  // }


  const handleHeart = async (id) => {
    try {
      const response = await UserUnfavouritemodel(id);
      console.log("response", response)

      if (response?.status == true) {

        const data = response?.data;
        setHearts(data)

        modesllist()

      } else {
        // toastAlert(response.statusText, ALERT_TYPES.ERROR);
        console.log("packege ", response.statusText)
      }
      setModellists(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  }
 
  const [inputValue, setInputValue] = useState('');
  const baseurl = `${process.env.REACT_APP_BASE_URL}/public/`
  console.log("baseurl", baseurl)
  const [modellists, setModellists] = useState([])


  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const filterData = modellists?.filter(item =>
    item?.name?.toLowerCase().includes(inputValue.toLowerCase())
  );



 
  const modesllist = async () => {
    try {
      const response = await modellist();
      console.log("response", response)


      setModellists(response?.data)

    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };
  const navigate = useNavigate()

  const handleclick = (id) => {
    // navigate('/profile-page')
    navigate(`/profile-page/${id}`)
  }
  useEffect(() => {
    modesllist()
  }, [])
 
  return (
    <div>
      <div className="model_main_section">
        <div>
          <Header />
        </div>

        <div className="model_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 pb-4">
                <div
                  className="model_text_img text-center pb-5"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="3000"
                >
                  <img src={modelText} />
                </div>

                <div className="all_filters_with_search">
                  <div className="main_searchBar">
                    <input
                      value={inputValue} inputClass="mainInput" onChange={handleChange}
                      className="searchbar_input_field"
                      type="text"
                      placeholder="search post here"
                    />
                    <button className="searchbar_actionBtn">
                      <img src={headerSearchIcon} />
                    </button>
                  </div>


                </div>


              </div>

              {listingCard &&
                filterData?.map((item, index) => (
                  <div key={index} className="col-10 col-sm-6 col-lg-3 mx-auto">
                    <div className="first_model_card">


                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >

                        <SwiperSlide key={index}>
                          <div className="model_card_img position-relative">
                            <img
                              src={baseurl + item?.profile_pic}
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
                                        <img className="img-fluid model_img" src={userProfilePic}/>
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
                                  <div className="view_collection_btn_div">
                                    <button className="view_collection_btn"  onClick={() => handleclick(item?.id)}> View Collection </button>
                                  </div>
              
            
                            {/* <div className="name_with_status">
                              <span className="online_circle">
                                <i class="fa-solid fa-circle"></i>
                              </span>
                              <span className="hot_model_name">
                                {item?.name}
                              </span>
                            </div> */}
                            {/* <div>
                              <span className="hotmodel_info">
                                {item?.address}
                              </span>
                              <span className="send_tip_text">
                                send tip
                              </span>
                            </div> */}









                          </div>

                        </SwiperSlide>


                      </Swiper>

                      <div className="model_card_top_corner_img">
                        <img src={modelCardTopCorner} />
                      </div>

                      <div className="model_card_bottom_corner_img">
                        <img src={modelCardBottomCorner} />
                      </div>

                      {/* <div className="framePic">
                        <img src={framePic} className="" />
                      </div> */}
                    </div>
                  </div>



                ))}


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

export default Model;
