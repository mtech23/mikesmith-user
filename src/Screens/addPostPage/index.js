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
import CustomTextarea from "../../Components/CustomTextarea";

const AddPost = () => {
  const [file, setFile] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPostType, setSelectedPostType] = useState(null);
  const [selectedPostOption, setSelectedPostOption] = useState(null);
  const [formData, setFormData] = useState({
    file: [], // Initialize image as an empty string
  });
  const CATEGORY_OPTIONS = [
    { id: 0, title: "LOREM IPSUM" },
    { id: 1, title: "CLEAN" },
    { id: 2, title: "SKINNY" },
    { id: 3, title: "MIDDLE" },
    { id: 4, title: "MEDIUM" },
    { id: 5, title: "DIRTY" },
    { id: 6, title: "WIDE" },
  ];

  const POST_TYPES = [
    { id: 0, title: "FREE TEASE" },
    { id: 1, title: "PUBLIC" },
    { id: 2, title: "PRIVATE", subtext: "FOR CUSTOM ORDERS" },
  ];

  const handleChange = (e) => {
    const data = e.target.files[0];
    console.log(data);
    setFile(data);
  };

  console.log("file", file)
  const handleCategoryChange = (id) => {
    if (id === selectedCategory) {
      setSelectedCategory(null);
      return;
    }
    setSelectedCategory(id);
  };
  const handlePostTypeChange = (id) => {
    if (id === selectedPostType) {
      setSelectedPostType(null);
      return;
    }
    setSelectedPostType(id);
  };
  const handlePostOptionChange = (id) => {
    if (id === selectedPostOption) {
      setSelectedPostOption(null);
      return;
    }
    setSelectedPostOption(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let payload = {};
    for (let [file, value] of formData.entries()) {
      payload[key] = value;
    }
    for (let [key, value] of formData.entries()) {
      payload[key] = value;
    }
    payload["category_id"] = selectedCategory;
    payload["post_type"] = selectedPostOption;
    payload["type"] = selectedPostType;
    console.log("formData", formData)
    console.log("payload", payload)
  }





  const handleSubmits = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {};
  
    for (let [key, value] of formData.entries()) {
      // Check if the current form data entry is a file
      if (value instanceof File) {
        // If it's a file, add it to the payload as an array
        if (!payload[key]) {
          payload[key] = [value];
        } else {
          payload[key].push(value);
        }
      } else {
        // If it's not a file, directly assign the value to the payload
        payload[key] = value;
      }
    }
  
    // Assuming selectedCategory, selectedPostOption, and selectedPostType are defined elsewhere
    payload["category_id"] = selectedCategory;
    payload["post_type"] = selectedPostOption;
    payload["type"] = selectedPostType;
  
    console.log("formData", formData);
    console.log("payload", payload);
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
                  <h3 className="image__preview-heading"> 3</h3>
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
            <form onSubmit={(e) => handleSubmits(e)}>
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
                        name="post_title"
                        type="text"
                        className="form-control post-title__form"
                        placeholder="Lorem Ipsum is a dummy text"
                      />
                    </div>
                    <div className="post__title-checkboxes">
                      <div className="price add__post-checboxes">
                        <h3>PRICE</h3>
                        {/* <input
                          className="form-control post-title__form price-amount"
                          value="$12.34"
                        /> */}
                        <div className="input-group">
                          <input
                            name="price"
                            type="text"
                            className="form-control post-title__form price-amount"
                            placeholder="$12.34"
                          />
                        </div>
                      </div>
                      {/* <div className="add__post-checboxes">
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
                      </div> */}
                      {POST_TYPES.map((item, index) => (
                        <div key={index} className="add__post-checboxes">
                          <label class="custom_check-box">
                            <span class="custom_check-text">
                              {item.title}
                              {item.subtext && (
                                <span className="private__span">
                                  {" "}
                                  (For custom orders)
                                </span>
                              )}
                            </span>
                            <input
                              type="checkbox"
                              class="chackbox_input"
                              checked={selectedPostType === item.id}
                              onChange={() => handlePostTypeChange(item.id)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <CustomTextarea
                    label="Description"
                    labelClass="title"
                    placeholder="Description"
                    inputClass="form-control post-title__form"
                  />
                </div> */}
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
                  {CATEGORY_OPTIONS.map((item, index) => (
                    <label class="custom_check-box">
                      <span class="custom_check-text">{item.title}</span>
                      <input
                        type="checkbox"
                        class="chackbox_input"
                        checked={selectedCategory === item.id}
                        onChange={() => handleCategoryChange(item.id)}
                      />
                    </label>
                  ))}
                  {/* <label class="custom_check-box">
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
                  </label> */}
                  {/* ---------------------------------- */}
                  {/* <label class="custom_check-box">
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
                  </label> */}
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
                        <input
                          type="checkbox"
                          class="chackbox_input"
                          checked={selectedPostOption === 0}
                          onChange={() => handlePostOptionChange(0)}
                        />
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
                        <input
                          type="checkbox"
                          class="chackbox_input"
                          checked={selectedPostOption === 1}
                          onChange={() => handlePostOptionChange(1)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="add-post_btns">
                    <button class="sign_actionBtn black-bg">BOOST POST</button>
                    <button class="sign_actionBtn" type="submit">
                      SUBMIT
                    </button>
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
