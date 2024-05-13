import React, { useEffect } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import { Link, useNavigate } from "react-router-dom";

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

const Faqs = () => {
  //CONST VALS
  const navigate = useNavigate();
  const handleclick = () =>{
  navigate('/model-page')
}
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="home_page_main">
      <div>
        <Header />
      </div>

  

      <div className="models_section">
        <div className="container">
         
         

          

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

export default Faqs;
