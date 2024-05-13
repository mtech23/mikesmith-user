import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import { useDispatch } from "react-redux";
import { modelcatigorylist, Addmodelpost } from '../../api'
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
import { toastAlert } from "../../utils";
import { ALERT_TYPES } from "../../constants";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
  const [file, setFile] = useState([]);

  // const handleChange = (event) => {
  //   // Get the selected files from the input element
  //   const selectedFiles = event.target.files;

  //   // Convert the selected files to an array
  //   const filesArray = Array.from(selectedFiles);

  //   // Update the state with the array of selected files
  //   setFile(filesArray);
  // };








  // const handleChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   const filesArray = Array.from(selectedFiles);

  //   Promise.all(filesArray.map(file => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.onload = () => resolve(reader.result);
  //       reader.onerror = reject;
  //       reader.readAsDataURL(file);
  //     });
  //   })).then(dataUrls => {
  //     setFile(prevFiles => [...prevFiles, filesArray])
  //   });
  // }

  const handleChange = (event) => {
    const selectedFiles = event.target.files;
    const filesArray = Array.from(selectedFiles);

    Promise.all(filesArray.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    })).then(dataUrls => {
      setFile(prevDataUrls => [...prevDataUrls, ...dataUrls]);

    }).catch(error => {
      console.error("Error reading file:", error);
    });







    // const file = event.target.files[0]
    // // console.log(file.name)
    // if (file) {
    //   setFile((prevData) => ({
    //     ...prevData,
    //    image :  selectedFiles
    //   }));
    // }
    // console.log(formData);


    // const file = event.target.files[0]
    //   // console.log(file.name)
    //   if (file) {
    //     // setFile(file);
    //           setFile(prevDataUrls => [...prevDataUrls, file]);
    //   }
    //   console.log(formData);
  }




  // const handleChange = (event) => {
  //     const file = event.target.files[0]
  //     // console.log(file.name)
  //     if (file) {
  //       setFile((prevData) => ({
  //         ...prevData,
  //         image: file,
  //       }));
  //     }
  //     console.log(formData);
  //   };


  // const handleChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   const filesArray = Array.from(selectedFiles);
  //   setFiles.push(filesArray)

  // };

  // const handleChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   const filesArray = Array.from(selectedFiles);
  //   setFile(prevFiles => [...prevFiles, ...filesArray]);
  // };


  // const handleChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   const filesArray = Array.from(selectedFiles);
  //   setFile(filesArray);
  // };
  const navigate = useNavigate()

  const [userdata, setUserdata] = useState()
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPostType, setSelectedPostType] = useState(null);
  const [selectedPostOption, setSelectedPostOption] = useState(null);
  const [formData, setFormData] = useState({
    // Initialize image as an empty string
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

  // const handleChange = (e) => {
  //   const data = e.target.files[0];
  //   console.log(data);
  //   setFile(data);
  // };


  const dispatch = useDispatch()

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

  // const handleSubmits = (e) => {

  //   e.preventDefault();
  //   alert("data")
  //   // const formData = new FormData(e.currentTarget);
  //   // let payload = {};
  //   // // for (let [file, value] of formData.entries()) {
  //   // //   payload[key] = value;
  //   // // }
  //   // for (let [key, value] of formData.entries()) {
  //   //   payload[key] = value;
  //   // }
  //   // payload["category_id"] = selectedCategory;
  //   // payload["post_type"] = selectedPostOption;
  //   // payload["type"] = selectedPostType;
  //   // console.log("formData", formData)
  //   // console.log("payload", payload)


  // const formDataMethod = new FormData();
  // // for (const key in formData) {
  //   formDataMethod.append('category_id', selectedCategory);
  //   formDataMethod.append('post_type', selectedPostOption);
  //   formDataMethod.append('type', selectedPostType);
  //   formDataMethod.append('file', file);

  // }
  // }


  console.log("selectedCategory", selectedCategory)
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // alert("data")

  //   // Create a new FormData object
  //   const formDataMethod = new FormData();
  //   formDataMethod.append('category_id', selectedCategory);
  //   formDataMethod.append('category_id', "data");
  //     formDataMethod.append('post_type', selectedPostOption);
  //     formDataMethod.append('type', selectedPostType);
  //     formDataMethod.append('file', file);

  //   console.log("formDataMethod " , formDataMethod);

  // };



  // formDataMethod.append('post_type', selectedPostOption);
  // formDataMethod.append('type', selectedPostType);

  const handleSubmits = (event) => {
    event.preventDefault();
    const formDataMethod = new FormData();
    formDataMethod.append('category_id', selectedCategory);
    formDataMethod.append('category_id', "data");
    formDataMethod.append('post_type', selectedPostOption);
    formDataMethod.append('type', selectedPostType);
    formDataMethod.append('file', file);

    // console.log("formDataMethod", formDataMethod);
  };



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formDataMethod = new FormData();
  //   formDataMethod.append('category_id', selectedCategory);
  //   formDataMethod.append('category_id', "data");
  //     formDataMethod.append('post_type', selectedPostOption);
  //     formDataMethod.append('type', selectedPostType);
  //     formDataMethod.append('file', file);
  //   // if (password === confirmPassword) {
  //   //   setPasswordsMatch(true);
  //   //   const formData = new FormData(event.currentTarget);
  //   //   let payload = {};
  //   //   for (let [key, value] of formData.entries()) {
  //   //     payload[key] = value;
  //   //   }
  //   //   console.log(payload);
  //     try {
  //       const response = await Addmodelpost(
  //         formDataMethod
  //       );

  //       if (response && response.success === true) {
  //         const userToken = response.data.token;

  //         localStorage.setItem("userToken", userToken);
  //         // dispatch(loginSuccess(response.data));

  //         // navigate("/login-page");
  //       } else {
  //         toastAlert(response.statusText, ALERT_TYPES.ERROR);
  //       }
  //     } catch (error) {
  //       console.error("Error in logging in:", error);

  //       toastAlert(error, ALERT_TYPES.ERROR);
  //     }
  //     // Passwords match, you can proceed with further actions here
  //   //  else {
  //   //   setPasswordsMatch(false);
  //   //   // Passwords don't match, you can display an error message or take other actions
  //   // }
  // };





  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/')
    // const data = {
    //   file: file,
    //   selectedPostOption: selectedPostOption,
    //   selectedPostType: selectedPostType,
    //   selectedCategory: selectedCategory


    // }
    // const formDataMethod = new FormData();
    // formDataMethod.append('category_id', selectedCategory); // Assuming selectedCategory is defined elsewhere
    // formDataMethod.append('post_type', selectedPostOption);
    // formDataMethod.append('type', selectedPostType);
    // formDataMethod.append('file', file);

    // Uncomment and modify this block for password matching logic
    // if (password === confirmPassword) {
    //   setPasswordsMatch(true);
    //   const formData = new FormData(event.currentTarget);
    //   let payload = {};
    //   for (let [key, value] of formData.entries()) {
    //     payload[key] = value;
    //   }
    //   console.log(payload);
    // } else {
    //   setPasswordsMatch(false);
    //   // Passwords don't match, you can display an error message or take other actions
    //   return; // Return here or handle accordingly
    // }

    // try {
    //   const response = await Addmodelpost(formDataMethod);

    //   if (response && response.success === true) {
    //     navigate('/payment-page')
    //   } else {
    //     toastAlert(response.statusText, ALERT_TYPES.ERROR);
    //   }
    // } catch (error) {
    //   console.error("Error in adding model post:", error); // Corrected the log message
    //   toastAlert(error.message || "An error occurred", ALERT_TYPES.ERROR); // Show error message in toast
    // }
  };


  // console.log("handleSubmits" , handleSubmits)



  // const handleSubmitss = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const payload = [];
  //   // payload.append(file, file);
  //   for (let [key, value] of formData.entries()) {
  //     // Check if the current form data entry is a file
  //     if (value instanceof File) {

  //       if (!payload[key]) {
  //         payload[key] = [value];
  //       } else {
  //         payload[key].push(value);
  //       }
  //     } else {
  //       // If it's not a file, directly assign the value to the payload
  //       payload[key] = value;
  //     }
  //   }

  //   // Assuming selectedCategory, selectedPostOption, and selectedPostType are defined elsewhere
  //   payload["category_id"] = selectedCategory;
  //   payload["post_type"] = selectedPostOption;
  //   payload["type"] = selectedPostType;

  //   console.log("formData", formData);
  //   console.log("payload", payload);
  // };


  const handleGetcatigory = async () => {


    try {
      const response = await modelcatigorylist();
      console.log("response", response)
      setUserdata(response?.data)
      // if (response && response?.success === true) {
      //   const  data = response?.data;
      //   console.log("data" , data)
      //   setUserdata(data)




      //   // navigate("/");
      // } else {
      //   toastAlert(response.statusText, ALERT_TYPES.ERROR);
      // }
    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };




  useEffect(() => {
    Aos.init();
    handleGetcatigory()



  }, []);



  console.log("userdata", userdata)
  return (
    <>
      <section class="add-post-page">
        <div>
          <Header />
        </div>

        <section className="image-preview_sec">
          <div className="container">
            <div className="row">


              {file?.map((dataUrl, index) => (
                <div key={index} className="col-md-4">
                  <div className="image__preview">
                    <img src={dataUrl} className="image__preview-img" alt={`Image ${index}`} />
                  </div>
                </div>
              ))}


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


                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="upload__box">

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

                            </div>
                          )}

                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="upload__box">

                        <label
                          for="file1"
                          onChange={handleChange}
                          className="upload__container-btn"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="uoload-icon">
                            <img src={uploadIcon} />
                          </div>

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
            <form  >
              <div className="row">
                <div className="col-md-6">
                  <div className="post-title">
                    <h3
                      className="title"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >Post title
                    </h3>
                    <div className="input-group">
                      <input
                        required
                        name="post_title"
                        type="text"
                        className="form-control post-title__form"
                        placeholder="Enter Title"
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
                            placeholder="12.34"
                          />
                        </div>
                      </div>

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
                              // checked={selectedPostType === item.id}
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
                    DESCRIPTION
                  </h3>
                  <p className="description-text">
                    <textarea className="description-text" required placeholder="Enter Description" id="des"></textarea>

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
                  {userdata?.map((item, index) => (
                    <label class="custom_check-box">
                      <span class="custom_check-text">{item.name}</span>
                      <input
                        type="checkbox"
                        class="chackbox_input"
                        // checked={selectedCategory === item.id}
                        onChange={() => handleCategoryChange(item.id)}
                      />
                    </label>
                  ))}

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
                      <button type="button" className="tags-btn">
                        2MANYKIDS{" "}
                        <a href="javascript:;" class="small-cancel">
                          <img src={SmallCancel} />
                        </a>
                      </button>
                      <button type="button" className="tags-btn">
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
                          // checked={selectedPostOption === 1}
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
                    <button class="sign_actionBtn" type="button" onClick={handleSubmit}>
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
