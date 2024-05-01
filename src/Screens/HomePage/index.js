import React, { useEffect } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import { Link } from "react-router-dom";

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
} from "../../Asserts/images/index";

import "./style.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="home_page_main">
      <div>
        <Header />
      </div>

      <div className="home_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-7">
              <div className="home_left_part">
                <div
                  className="platinum_feet_img"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src={platinumFeetText} className="img-fluid" />
                </div>

                <div className="actionBtns_and_searchBar">
                  <div>
                    <button className="sign_actionBtn">sign in</button>
                  </div>

                  <div>
                    <button className="sign_actionBtn">sign up</button>
                  </div>

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
                </div>

                <div className="row py-3">
                  <div className="col-12 col-sm-4 col-lg-5 mx-lg-auto mx-0">
                    <div
                      className="legs_img_with_corners"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="2000"
                    >
                      <img src={legsImage01} className="img-fluid" />
                    </div>

                    <div className="img_top_corner">
                      <img src={imgTopCorner} />
                    </div>

                    <div className="img_bottom_corner">
                      <img src={imgBottomCorner} />
                    </div>
                  </div>

                  <div className="col-12 col-sm-8 col-lg-12 col-xl-7 align-self-center">
                    <div
                      className="legs_both_parts"
                      data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="2000"
                    >
                      <div className="first_leg_part">
                        <h4 className="legs_right_part_text_01">no tricks</h4>
                        <h4 className="legs_right_part_text_02">no bots</h4>
                        <h4 className="legs_right_part_text_03">no baiting</h4>
                      </div>

                      <div>
                        <div className="hundred_percent_text_img">
                          <img src={hundredPercentage} />
                        </div>
                        <h4 className="legs_right_part_text_04">
                          authentic models
                        </h4>
                        <h4 className="legs_right_part_text_05">
                          clients ethics
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-5 mx-auto">
              <div className="home_right_part">
                <img src={homeImg01} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="models_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="models_main_container">
                <div
                  className="model_text_img text-center pb-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img src={modelText} />
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="first_model_card">
                <div className="model_card_img">
                  <img src={modelImg01} className="img-fluid" />
                </div>

                <div className="model_card_top_corner_img">
                  <img src={modelCardTopCorner} />
                </div>

                <div className="model_card_bottom_corner_img">
                  <img src={modelCardBottomCorner} />
                </div>

                <div className="model_card_desc">
                  <span className="card_short_para">
                    my pretty pink nails :)
                  </span>
                </div>

                <div className="framePic">
                  <img src={mainFrameImg} className="" />
                </div>

                <div>
                  <div className="model_have_a_look_btn">
                    <button className="have_alook_btn">have a look</button>
                    <span className="be_nice_span">
                      BE NICE, or we will crush you!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="second_model_card">
                <div className="second_model_card_img">
                  <img src={modelImg02} className="w-100" />
                </div>

                <div className="model_card_desc">
                  <span className="card_short_para">
                    Want to come play dress up with me?
                  </span>
                </div>

                <div className="framePic">
                  <img src={mainFrameImg} className="" />
                </div>

                <div>
                  <div className="model_have_a_look_btn">
                    <button className="have_alook_btn">have a look</button>
                    <span className="be_nice_span">
                      BE NICE, or we will crush you!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="second_model_card">
                <div className="second_model_card_img">
                  <img src={modelImg03} className="w-100" />
                </div>

                <div className="model_card_desc">
                  <span className="card_short_para">
                    Want to come play dress up with me?
                  </span>
                </div>

                <div className="framePic">
                  <img src={mainFrameImg} className="" />
                </div>

                <div>
                  <div className="model_have_a_look_btn">
                    <button className="have_alook_btn">have a look</button>
                    <span className="be_nice_span">
                      BE NICE, or we will crush you!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="first_model_card">
                <div className="model_card_img">
                  <img src={modelImg04} className="img-fluid" />
                </div>

                <div className="model_card_top_corner_img">
                  <img src={modelCardTopCorner} />
                </div>

                <div className="model_card_bottom_corner_img">
                  <img src={modelCardBottomCorner} />
                </div>

                <div className="model_card_desc">
                  <span className="card_short_para">
                    my first post, what do you think? :)
                  </span>
                </div>

                <div className="video_play_icon">
                  <img src={videoPlayIcon} />
                </div>

                <div className="framePic">
                  <img src={mainFrameImg} className="" />
                </div>

                <div>
                  <div className="model_have_a_look_btn">
                    <button className="have_alook_btn">have a look</button>
                    <span className="be_nice_span">
                      BE NICE, or we will crush you!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="second_model_card">
                <div className="second_model_card_img">
                  <img src={modelImg03} className="w-100" />
                </div>

                <div className="model_card_desc">
                  <span className="card_short_para">
                    come clean my feet with me, out in the...
                  </span>
                </div>

                <div className="framePic">
                  <img src={mainFrameImg} className="" />
                </div>

                <div>
                  <div className="model_have_a_look_btn">
                    <button className="have_alook_btn">have a look</button>
                    <span className="be_nice_span">
                      BE NICE, or we will crush you!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="first_model_card">
                <div className="model_card_img">
                  <img src={modelImg05} className="img-fluid" />
                </div>

                <div className="model_card_top_corner_img">
                  <img src={modelCardTopCorner} />
                </div>

                <div className="model_card_bottom_corner_img">
                  <img src={modelCardBottomCorner} />
                </div>

                <div className="model_card_desc">
                  <span className="card_short_para">
                    my pretty pink nails :)
                  </span>
                </div>

                <div className="video_play_icon">
                  <img src={videoPlayIcon} />
                </div>

                <div className="framePic">
                  <img src={mainFrameImg} className="" />
                </div>

                <div>
                  <div className="model_have_a_look_btn">
                    <button className="have_alook_btn">have a look</button>
                    <span className="be_nice_span">
                      BE NICE, or we will crush you!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="second_model_card">
                <div className="second_model_card_img">
                  <img src={modelImg06} className="w-100" />
                </div>

                <div className="model_card_desc">
                  <span className="card_short_para">
                    Want to come play dress up with me?
                  </span>
                </div>

                <div className="framePic">
                  <img src={mainFrameImg} className="" />
                </div>

                <div>
                  <div className="model_have_a_look_btn">
                    <button className="have_alook_btn">have a look</button>
                    <span className="be_nice_span">
                      BE NICE, or we will crush you!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="second_model_card">
                <div className="second_model_card_img">
                  <img src={modelImg07} className="w-100" />
                </div>

                <div className="model_card_desc">
                  <span className="card_short_para">
                    be nice or we will crush you!
                  </span>
                </div>

                <div className="framePic">
                  <img src={mainFrameImg} className="" />
                </div>

                <div>
                  <div className="model_have_a_look_btn">
                    <button className="have_alook_btn">have a look</button>
                    <span className="be_nice_span">
                      BE NICE, or we will crush you!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="text-center">
                <button className="sign_actionBtn">View More</button>
              </div>
            </div>
          </div>

          <div className="row py-lg-5 py-3 align-items-center">
            <div className="col-md-12">
              <div
                className="how_it_works_text_img text-center"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                <img src={howItWorksText} />
              </div>
            </div>

            <div className="col-sm-12 col-lg-8">
              <div className="how_it_works_left_part">
                <div
                  className="how_it_works_left_img position-relative"
                  data-aos="flip-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img src={howItWorksImg} className="img-fluid" />
                </div>

                <div className="how_it_works_play_icon">
                  <img src={videoPlayIcon} />
                </div>
              </div>
            </div>

            <div className="col-sm-10 col-lg-4 mx-auto">
              <div className="how_it_works_right_part">
                <div
                  className="step_bk"
                  data-aos="flip-down"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <div className="step_main">
                    <p className="step_number m-0">step: 1</p>

                    <p className="how_it_works_right_part_para how_work_p1 m-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>

                    <p className="text_with_stroke">step: 1</p>
                  </div>
                </div>

                <div className="row pt-2">
                  <div className="col-md-6">
                    <div
                      className="step_main_2"
                      data-aos="flip-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="2000"
                    >
                      <p className="step_number m-0">step: 2</p>

                      <p className="how_it_works_right_part_para m-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                      </p>

                      <p className="text_with_stroke">step: 2</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="step_main_2"
                      data-aos="flip-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="2000"
                    >
                      <p className="step_number m-0">step: 3</p>

                      <p className="how_it_works_right_part_para m-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                      </p>
                    </div>

                    <p className="text_with_stroke">step: 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pb-md-4 pb-0">
            <div className="col-md-12">
              <div className="for_clients_main mb-3">
                <div
                  className="for_client_text_img text-center"
                  data-aos="fade-down"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img src={forClientText} />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-6 mx-auto mb-3">
              <div
                className="for_client_left_img"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                <img src={forClientImg} className="img-fluid" />
              </div>
            </div>

            <div className="col-sm-12 col-lg-6 align-self-center">
              <div
                className="for_client_right_part"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                <p className="for_client_first_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since
                </p>

                <p className="for_client_second_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not
                </p>

                <p className="for_client_first_para text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <p className="for_client_second_para text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since
                </p>

                <p className="for_client_second_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div
                className="for_models_text text-center mb-3"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                <img src={forModelsText} />
              </div>
            </div>

            <div className="col-md-12">
              <div className="for_model_main">
                <div
                  className="for_models_main_img"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img src={formodelImg01} className="img-fluid" />
                </div>

                <div
                  className="for_models_right_content my-auto"
                  data-aos="fade-down"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <h4 className="for_models_heading_here">heading here</h4>

                  <p className="for_models_right_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>

                  <p className="for_models_right_para">
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries,
                  </p>

                  <p className="for_models_right_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>

                  <div class="text-left">
                    <button class="sign_actionBtn">View More</button>
                  </div>
                </div>

                <div
                  className="for_model_most_right_img"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img src={formodelImg02} />
                </div>
              </div>
            </div>

            {/* <div className='col-md-6 align-self-center'>
                <div className='for_models_right_content'>
                  <h4 className='for_models_heading_here'>heading here</h4>

                  <p className='for_models_right_para'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>

                  <p className='for_models_right_para'>
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                  </p>

                  <p className='for_models_right_para'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>

                  <div class="text-left">
                    <button class="sign_actionBtn">View More</button>
                  </div>

                </div>
              </div> */}
          </div>

          <div className="row">
            <div className="col-md-12">
              <div
                className="faq_heading_text_img text-center"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                <img src={faqText} />
              </div>
            </div>

            <div className="col-sm-12 col-lg-6 mx-auto">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn faq_button btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is a good common question about the website?
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Some placeholder content for the first accordion panel.
                      This panel is shown by default className.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn faq_button btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        When will I be charged for Boosts?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Some placeholder content for the second accordion panel.
                      This panel is hidden by default.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn faq_button btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        When can’t use Platinum Points?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      And lastly, the placeholder content for the third and
                      final accordion panel. This panel is hidden by default.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingfour">
                    <h2 className="mb-0">
                      <button
                        className="btn faq_button btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        If I have any questions, how do I get help?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapsefour"
                    className="collapse"
                    aria-labelledby="headingfour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      And lastly, the placeholder content for the third and
                      final accordion panel. This panel is hidden by default.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingfive">
                    <h2 className="mb-0">
                      <button
                        className="btn faq_button btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        How many platinum points can I use towards my
                        membership?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapsefive"
                    className="collapse"
                    aria-labelledby="headingfive"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      And lastly, the placeholder content for the third and
                      final accordion panel. This panel is hidden by default.
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

export default Home;
