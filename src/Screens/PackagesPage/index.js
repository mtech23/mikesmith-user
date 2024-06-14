import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import goldpackage from '../../Asserts/images/Grouppackage.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../Components/loader";

// import { modelpurchaseplane } from '../../api'
import { modelpackagelist, modelpurchaseplane  } from '../../api'
import "./style.css";
import { pageBottomImg } from "../../Asserts/images";

import gold_package_img from '../../Asserts/images/gold_package_img.png'
import silver_card_img from '../../Asserts/images/silver_card_img.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { toastAlert } from "../../utils";
import { ALERT_TYPES } from "../../constants";
const Packages = () => {

  const [userdata, setUserdata] = useState([])
  const [selected, setSelected] = useState(null);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false);

  const [notify, setNotify] = useState("")
  const handleegtpackage = async (id) => {

    setLoading(true)
    try {
      const response = await modelpackagelist();
      console.log("response", response)


      setUserdata(response?.data)
      if (response?.status === true) {
        setLoading(false)

        const data = response?.data;
        console.log("data", data)

        setNotify(response.statusText,);


      } else {
        console.log("packege ", response.statusText)
      }
    } catch (error) {
      console.error("Error in logging in:", error);


    }
  };







  useEffect(() => {
    handleegtpackage()
  }, [])
  const handlepayment = () => {
    navigate('/payment-page')
  }



  const [prices, setPrice] = useState(null)
  const handlepkg = (id, plan_id, price) => {
    setSelectedPlanId(plan_id);
    console.log("priceplane", price)
    setSelected(id);
    setPrice(price)
  };

  console.log("prices", prices, selected)

  const [modellists, setModellists] = useState()








  //   const packagecheckout = async (event) => {
  //     event.preventDefault();
  //     const formDataMethod = new FormData();
  //     formDataMethod.append('id', selected);
  //     formDataMethod.append('price', prices);
  //     try {
  //       const response = await modelpurchaseplane(selectedPlanId, selected, prices);

  //       if (response?.status === true) {
  //         setNotify(response?.msg);
  //         setUserdata(response?.data);
  //         // alert("data");
  // <Loader/>
  //         navigate('/payment-page');

  //       } else {

  //       }
  //     } catch (error) {
  //       console.error("Error in adding model post:", error);
  //     }
  //   };





  const packagecheckout = (event) => {
    event.preventDefault();
    const formDataMethod = new FormData();
    formDataMethod.append('id', selected);
    formDataMethod.append('price', prices);
    localStorage.setItem('planeid', selectedPlanId)
    localStorage.setItem('price', prices)
    localStorage.setItem('id ', selected)
    setLoading(true); // Show loader
    navigate('/payment-page')

  }
  const userrole = localStorage.getItem("userrole")

  console.log("modellists", modellists)

  return (
    <>

      {isLoading ? (
        <Loader />
      ) : (

        <div>
          <section class="packages-page">
            <div>
              <Header />
            </div>
            <section className="packages_section">
              <div className="container">

                <div className="row justify-content-center">



                  {userdata?.map((data) => (


                    <div className="col-lg-5 col-md-6 mb-4 gold-package">
                      <form onSubmit={packagecheckout}>
                        <div
                          className=""
                          data-aos="fade-right"
                          data-aos-anchor-placement="center-bottom"
                          data-aos-duration="3000"
                        >
                          <img className="img-fluid packages_name" src={data?.plan?.plan_type == "Gold" ? (gold_package_img) : (data?.plan?.plan_type == "Platinum Plus" ? (silver_card_img) : (silver_card_img))} />
                          <h5 className="packages_title"> {data?.plan?.plan_type} </h5>
                          <p className="platinum_text">{data?.plan?.name}</p>
                          <p>  Good, Easy Money!</p>
                          <p>  {data?.plan?.posts_limit}  </p>
                          <p>  {data?.plan?.messages_limit} </p>
                          {/* <p> Messages Per Month</p> */}
                          <p> {data?.plan?.sales_percent}</p>
                          <p>  {data?.plan?.tips_percent}</p>
                          <p>  {data?.plan?.platinum_percent} </p>

                          {userrole == 2 ? (<p> {data?.plan?.requests}  </p>) : (" ")}



                          {/* <p>- 10 Posts/Month</p> */}
                          {userrole == 2 ? (<p>- {data?.plan?.boost_limit}  </p>) : (" ")}

                          <div className="custom-check-boxes">
                            <div className="checkbox-div1">
                              <label className="custom_check-box">

                                <span className="custom_check-text"> $ {data?.plan?.prices_options?.monthly?.price}/Month </span>
                                <input
                                  onChange={() => handlepkg(data?.plan?.prices_options?.monthly?.id, data?.plan?.id, data?.plan?.prices_options?.monthly?.id, data?.plan?.id, data?.plan?.prices_options?.monthly?.price)}
                                  type="checkbox"
                                  className="blackbox_custom"
                                  checked={selected === data?.plan?.prices_options?.monthly?.id && selectedPlanId === data?.plan?.id}
                                />
                              </label>


                              <label className="custom_check-box">

                                <span className="custom_check-text"> $ {data?.plan?.prices_options?.yearly?.price}/Year   </span>
                                <input
                                  onChange={() => handlepkg(data?.plan?.prices_options?.yearly?.id, data?.plan?.id, data?.plan?.prices_options?.yearly?.price)}
                                  type="checkbox"
                                  className="blackbox_custom"
                                  checked={selected === data?.plan?.prices_options?.yearly?.id && selectedPlanId === data?.plan?.id}
                                />
                              </label>




                            </div>


                            <div className="checkbox-div1">


                              <label className="custom_check-box">

                                <span className="custom_check-text"> $ {data?.plan?.prices_options?.month_platinum_points?.price}/Month Platinum Points     </span>
                                <input
                                  onChange={() => handlepkg(data?.plan?.prices_options?.month_platinum_points?.id, data?.plan?.id, data?.plan?.prices_options?.month_platinum_points?.price)}
                                  type="checkbox"
                                  className="blackbox_custom"
                                  checked={selected === data?.plan?.prices_options?.month_platinum_points?.id && selectedPlanId === data?.plan?.id}
                                />                        </label>

                            </div>




                          </div>
                          <div className="packages-btns">
                            <button type="submit" className="gold-btn">CHECKOUT</button>
                          </div>

                        </div>
                      </form>
                    </div>

                  ))}

                </div>





              </div>



            </section>
            <section className="feedbacks">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="feedback-body"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="2000"
                    >
                      <p
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        “At the end of the day, our models make MORE money and have
                        higher sales.”
                      </p>
                      <h3
                        className="name"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="4000"
                      >
                        FOUNDERS
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="feedback-body"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="2000"
                    >
                      <p
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        “I feel I can be SO much more here, like I belong, and part
                        of a community!”
                      </p>
                      <h3
                        className="name"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="4000"
                      >
                        Stacy’s MOM,RI
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="feedback-body"
                      data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="2000"
                    >
                      <p
                        data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      >
                        “I couldn’t believe how quick I was able to turn a profit!
                        After just one short video, I already doubled my money!”
                      </p>
                      <h3
                        className="name"
                        data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="4000"
                      >
                        LINDSAY, WI
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <img src={pageBottomImg} className="page-bottom_img" />
          </section>
          <ToastContainer />
          <div>
            <Footer />
          </div>
        </div>)}
    </>
  );
};

export default Packages;
