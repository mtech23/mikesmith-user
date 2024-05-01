import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

import "./style.css";
import {
  SmallCancel,
  addPostImg1,
  addPostImg2,
  addPostImg3,
  pageBottomImg,
  uploadIcon,
} from "../../Asserts/images";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Aos from "aos";
import "aos/dist/aos.css";

const AddPost = () => {
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    const data = e.target.files[0];
    setFile(data);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section class="add-post-page">
        <div>
          <Header />
        </div>

        <section className="image-preview_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div class="image-preview_item">
                  <h3 className="image__preview-heading image__preview-heading-1">
                    Image 1, preview (Unblurred)
                  </h3>
                  <Swiper 
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg1} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg1} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg1} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* <div className="image__preview">
                  <h3 className="image__preview-heading">Image 1, preview (Unblurred)</h3>
                  <img src={addPostImg1} className="image__preview-img" />
                </div> */}
              </div>
              <div className="col-md-4">
                <div class="image-preview_item">
                  <h3 className="image__preview-heading">Image 2</h3>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-md-4">
                <div class="image-preview_item">
                  <h3 className="image__preview-heading">Image 3</h3>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg3} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg3} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg3} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-md-4">
                <div class="image-preview_item">
                  <h3 className="image__preview-heading">Image 4</h3>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-md-4">
                <div class="image-preview_item">
                  <h3 className="image__preview-heading">Video</h3>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg3} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg3} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg3} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-md-4">
                <div class="image-preview_item">
                  <h3 className="image__preview-heading">Video</h3>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div class="upload__box">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          id="file1"
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                        <label
                          for="file1"
                          onChange={handleChange}
                          className="upload__container-btn"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="uoload-icon">
                            <img src={uploadIcon} />
                          </div>
                          {file && (
                            <div className="uploaded-image">
                              <img
                                src={URL.createObjectURL(file)}
                                width="100%"
                              />
                            </div>
                          )}
                          {/* <img
                        src={addPostImg1}
                        className="uploaded-image"
                        id="output"
                        width="100%"
                      /> */}
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="upload__box">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          id="file1"
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                        <label
                          for="file1"
                          onChange={handleChange}
                          className="upload__container-btn"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="uoload-icon">
                            <img src={uploadIcon} />
                          </div>
                          {file && (
                            <div className="uploaded-image">
                              <img
                                src={URL.createObjectURL(file)}
                                width="100%"
                              />
                            </div>
                          )}
                          {/* <img
                        src={addPostImg1}
                        className="uploaded-image"
                        id="output"
                        width="100%"
                      /> */}
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="upload__box">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          id="file1"
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                        <label
                          for="file1"
                          onChange={handleChange}
                          className="upload__container-btn"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="uoload-icon">
                            <img src={uploadIcon} />
                          </div>
                          {file && (
                            <div className="uploaded-image">
                              <img
                                src={URL.createObjectURL(file)}
                                width="100%"
                              />
                            </div>
                          )}
                          {/* <img
                        src={addPostImg1}
                        className="uploaded-image"
                        id="output"
                        width="100%"
                      /> */}
                        </label>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* <h3 className="image__preview-heading">
                    Add New Image/Video
                  </h3>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                  </Swiper> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="add-post">
          <div className="container">
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="post-title">
                    <h3
                      className="title"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      Post title
                    </h3>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control post-title__form"
                        placeholder="Lorem Ipsum is a dummy text"
                      />
                    </div>
                    <div className="post__title-checkboxes">
                      <div className="price add__post-checboxes">
                        <h3>PRICE</h3>
                        <span className="price-amount">$12.34</span>
                      </div>
                      <div className="add__post-checboxes">
                        <label class="custom_check-box">
                          <span class="custom_check-text">Free tease</span>
                          <input type="checkbox" class="chackbox_input" />
                        </label>
                      </div>
                      <div className="add__post-checboxes">
                        <label class="custom_check-box">
                          <span class="custom_check-text">Public</span>
                          <input type="checkbox" class="chackbox_input" />
                        </label>
                      </div>
                      <div className="add__post-checboxes">
                        <label class="custom_check-box">
                          <span class="custom_check-text">
                            Private{" "}
                            <span className="private__span">
                              (For custom orders)
                            </span>
                          </span>
                          <input type="checkbox" class="chackbox_input" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3
                    className="description-title"
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000"
                  >
                    Description
                  </h3>
                  <p className="description-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of{" "}
                  </p>
                </div>
              </div>
              <div className="categories">
                <h3
                  className="categories_title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="3000"
                >
                  CATEGORIES
                </h3>
                <div className="categories_checkboxes">
                  <label class="custom_check-box">
                    <span class="custom_check-text">Lorem Ipsum</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">Lorem Ipsum</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">Lorem Ipsum</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">Lorem Ipsum</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">Lorem Ipsum</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">Lorem Ipsum</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  {/* ---------------------------------- */}
                  <label class="custom_check-box">
                    <span class="custom_check-text">CLEAN</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">SKINNY</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">MIDDLE</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">MEDIUM</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">DIRTY</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                  <label class="custom_check-box">
                    <span class="custom_check-text">WIDE</span>
                    <input type="checkbox" class="chackbox_input" />
                  </label>
                </div>
              </div>
              <div className="tags-sec">
                <div className="row">
                  <div className="col-lg-4">
                    <h3
                      className="title"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      TAGS FRIENDS
                    </h3>
                    <div className="tag-friends">
                      <button className="tags-btn">
                        2MANYKIDS{" "}
                        <a href="javascript:;" class="small-cancel">
                          <img src={SmallCancel} />
                        </a>
                      </button>
                      <button className="tags-btn">
                        ROUGH-N-TOUGH
                        <a href="javascript:;" class="small-cancel">
                          <img src={SmallCancel} />
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="post_options">
                      <h3
                        className="title"
                        data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        POST OPTIONS
                      </h3>
                      <label class="custom_check-box">
                        <span class="custom_check-text">
                          Release for promotional use
                        </span>
                        <input type="checkbox" class="chackbox_input" />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="post_options">
                      <h3 className="title d-lg-block d-none">&nbsp;</h3>
                      <label class="custom_check-box">
                        <span class="custom_check-text">
                          PIN AT TOP OF MY MEMBER PAGE
                        </span>
                        <input type="checkbox" class="chackbox_input" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="add-post_btns">
                    <button class="sign_actionBtn black-bg">BOOST POST</button>
                    <button class="sign_actionBtn">SUBMIT</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <img src={pageBottomImg} className="page-bottom_img" />
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default AddPost;
