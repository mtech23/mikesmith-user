import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

import {Addmodelpost} from '../../api'
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
                      className="searchbar_input_field"
                      type="text"
                      placeholder="search post here"
                    />
                    <button className="searchbar_actionBtn">
                      <img src={headerSearchIcon} />
                    </button>
                  </div>

                  <div className="dropdown">
                    <button
                      className="sign_actionBtn btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      add filter
                    </button>
                    <div class="dropdown-menu">
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                    </div>
                  </div>

                  <div className="dropdown">
                    <label className="sortby_label m-0">sort by: </label>

                    <button
                      className="ml-2 sign_actionBtn btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      date
                    </button>
                    <div class="dropdown-menu">
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>

                <div className="all_filtered_btn">
                  <div>
                    <button className="sign_actionBtn">featured</button>
                  </div>

                  <div>
                    <button className="sign_actionBtn">new</button>
                  </div>

                  <div>
                    <button className="sign_actionBtn">free teases</button>
                  </div>

                  <div>
                    <button className="sign_actionBtn">cute</button>
                  </div>

                  <div>
                    <button className="sign_actionBtn">thick</button>
                  </div>

                  <div>
                    <button className="sign_actionBtn">petite</button>
                  </div>

                  <div>
                    <button className="sign_actionBtn">polished</button>
                  </div>
                </div>
              </div>

              {listingCard &&
                listingCard.map((item, index) => (
                  <div key={index} className="col-sm-6 col-lg-3">
                    <div className="first_model_card">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        {item?.swipperData &&
                          item?.swipperData.map((data, index) => (
                            <SwiperSlide key={index}>
                              <div className="model_card_img position-relative">
                                <img
                                  src={data?.cardImage}
                                  className="img-fluid"
                                />
                                <span className="heart_icon">
                                  <i class="fa-solid fa-heart"></i>
                                </span>
                              </div>

                              <div className="model_card_desc">
                                <div className="name_with_status">
                                  <span className="online_circle">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span className="hot_model_name">
                                    {data?.modelName}
                                  </span>
                                </div>
                                <div>
                                  <span className="hotmodel_info">
                                    {data?.address}
                                  </span>
                                  <span className="send_tip_text">
                                    send tip
                                  </span>
                                </div>

                                <div className="pt-2">
                                  <button className="sign_actionBtn">
                                    view profile
                                  </button>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        <SwiperSlide>
                          <div className="model_card_img position-relative">
                            <img src={item?.cardImage} className="img-fluid" />
                            <span className="heart_icon">
                              <i class="fa-solid fa-heart"></i>
                            </span>
                          </div>

                          <div className="model_card_desc">
                            <div className="name_with_status">
                              <span className="online_circle">
                                <i class="fa-solid fa-circle"></i>
                              </span>
                              <span className="hot_model_name">
                                HOTMODEL1234
                              </span>
                            </div>
                            <div>
                              <span className="hotmodel_info">38-USA</span>
                              <span className="send_tip_text">send tip</span>
                            </div>

                            <div className="pt-2">
                              <button className="sign_actionBtn">
                                view profile
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img">
                            <img src={modelImg01} className="img-fluid" />
                            <span className="heart_icon">
                              <i class="fa-solid fa-heart"></i>
                            </span>
                          </div>

                          <div className="model_card_desc">
                            <div className="name_with_status">
                              <span className="online_circle">
                                <i class="fa-solid fa-circle"></i>
                              </span>
                              <span className="hot_model_name">
                                HOTMODEL1234
                              </span>
                            </div>
                            <div>
                              <span className="hotmodel_info">38-USA</span>
                              <span className="send_tip_text">send tip</span>
                            </div>

                            <div className="pt-2">
                              <button className="sign_actionBtn">
                                view profile
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img">
                            <img src={modelImg01} className="img-fluid" />
                            <span className="heart_icon">
                              <i class="fa-solid fa-heart"></i>
                            </span>
                          </div>

                          <div className="model_card_desc">
                            <div className="name_with_status">
                              <span className="online_circle">
                                <i class="fa-solid fa-circle"></i>
                              </span>
                              <span className="hot_model_name">
                                HOTMODEL1234
                              </span>
                            </div>
                            <div>
                              <span className="hotmodel_info">38-USA</span>
                              <span className="send_tip_text">send tip</span>
                            </div>

                            <div className="pt-2">
                              <button className="sign_actionBtn">
                                view profile
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="model_card_img">
                            <img src={modelImg01} className="img-fluid" />
                            <span className="heart_icon">
                              <i class="fa-solid fa-heart"></i>
                            </span>
                          </div>

                          <div className="model_card_desc">
                            <div className="name_with_status">
                              <span className="online_circle">
                                <i class="fa-solid fa-circle"></i>
                              </span>
                              <span className="hot_model_name">
                                HOTMODEL1234
                              </span>
                            </div>
                            <div>
                              <span className="hotmodel_info">38-USA</span>
                              <span className="send_tip_text">send tip</span>
                            </div>

                            <div className="pt-2">
                              <button className="sign_actionBtn">
                                view profile
                              </button>
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

                      <div className="framePic">
                        <img src={framePic} className="" />
                      </div>
                    </div>
                  </div>
                ))}

              <div className="col-sm-6 col-lg-3">
                <div className="first_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="model_card_img position-relative">
                        <img src={modelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
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

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="second_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="w-100" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="second_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={hotModelImg01} className="w-100" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={hotModelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={hotModelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={hotModelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="first_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="model_card_img position-relative">
                        <img src={modelImg04} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg04} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg04} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg04} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
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

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="second_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="w-100" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="first_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="model_card_img position-relative">
                        <img src={modelImg07} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg07} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg07} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg07} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
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

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="first_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="model_card_img position-relative">
                        <img src={modelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
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

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="second_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg05} className="w-100" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg05} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg05} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg05} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="first_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="model_card_img position-relative">
                        <img src={modelImg04} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg04} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg04} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="model_card_img">
                        <img src={modelImg04} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>

                        <div className="video_play_icon">
                          <img src={videoPlayIcon} />
                        </div>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
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

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="second_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={hotModelImg01} className="w-100" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={hotModelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={hotModelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={hotModelImg01} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="second_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg05} className="w-100" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg05} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg05} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg05} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="framePic">
                    <img src={framePic} className="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="second_model_card">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="w-100" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="second_model_card_img position-relative">
                        <img src={modelImg02} className="img-fluid" />
                        <span className="heart_icon">
                          <i class="fa-solid fa-heart"></i>
                        </span>
                      </div>

                      <div className="model_card_desc">
                        <div className="name_with_status">
                          <span className="online_circle">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                          <span className="hot_model_name">HOTMODEL1234</span>
                        </div>
                        <div>
                          <span className="hotmodel_info">38-USA</span>
                          <span className="send_tip_text">send tip</span>
                        </div>

                        <div className="pt-2">
                          <button className="sign_actionBtn">
                            view profile
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="framePic">
                    <img src={framePic} className="" />
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

export default Model;
