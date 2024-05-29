import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import goldpackage from '../../Asserts/images/Grouppackage.png'
// import { modelpurchaseplane } from '../../api'
import { modelpackagelist , modelpurchaseplane } from '../../api'
import "./style.css";
import { pageBottomImg } from "../../Asserts/images";

import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { toastAlert } from "../../utils";
import { ALERT_TYPES } from "../../constants";
const Packages = () => {
  const [userdata, setUserdata] = useState([])
  console.log("userdata", userdata)
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate()

  const handleegtpackage = async (id) => {


    try {
      const response = await modelpackagelist();
      console.log("response", response)


      setUserdata(response?.data)
      if (response && response?.status === true) {

        const data = response?.data;
        console.log("data", data)
 
        // navigate('/payment-page')

      } else {
        // toastAlert(response.statusText, ALERT_TYPES.ERROR);
        console.log("packege ", response.statusText)
      }
    } catch (error) {
      console.error("Error in logging in:", error);

      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };







  useEffect(() => {
    handleegtpackage()
  }, [])
  const handlepayment = () => {
    navigate('/payment-page')
  }

  const [pkg, setPkg] = useState()
  const handlepkg = async (id) => {
    if (id === pkg) {

      setPkg(null)
    }
    setPkg(id)
  }

  console.log("pkg" , pkg)

  const [modellists, setModellists] = useState()

  const packagecheckout = async () => {
    try {
      const response = await modelpurchaseplane(pkg);
      console.log("response", response)

      if (response?.status == true) {
        navigate('/payment-page')
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
console.log("modellists" , modellists)

  return (
    <>
      <section class="packages-page">
        <div>
          <Header />
        </div>
        <section className="packages_section">
          <div className="container">

            <div className="row justify-content-center">
       
                <div className="col-lg-5 col-md-6">


<div
                  className="gold-package"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="3000"npm start
                >
                  <p>+ Awesome Money!</p>
                  <p>+ 10 Posts/Month</p>
                  <p>+ 20 Messages Per Month</p>
                  <p>+ Keep 80% of Sales</p>
                  <p>+ Keep 100% of Tips</p>
                  <p>+ Earn 2% in Platinum Points on Sales</p>
                  <p>- Can Only View Requests</p>
                  <p>- 10 Posts/Month</p>
                  <p>- 5 Boosts/Month</p>
                 
                    <div className="custom-check-boxes">
                      <div className="checkbox-div1">
                        <label className="custom_check-box">
                          <span className="custom_check-text">$12/Month</span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                        <label className="custom_check-box">
                          <span className="custom_check-text">$123/YEAR</span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                      </div>
                      <div className="checkbox-div2">
                        <label className="custom_check-box">
                          <span className="custom_check-text">
                            350/Month Platinum Points
                          </span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                      </div>
                    </div>
                    <div className="packages-btns">
                      <button onClick={handlepayment} className="platinum-btn">CHECKOUT</button>
                    </div>
                
                </div>

              </div>





























              <div className="col-lg-5 col-md-6">


<div
                  className="platinum-package"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="3000"
                >
                  <p>+ Awesome Money!</p>
                  <p>+ 10 Posts/Month</p>
                  <p>+ 20 Messages Per Month</p>
                  <p>+ Keep 80% of Sales</p>
                  <p>+ Keep 100% of Tips</p>
                  <p>+ Earn 2% in Platinum Points on Sales</p>
                  <p>- Can Only View Requests</p>
                  <p>- 10 Posts/Month</p>
                  <p>- 5 Boosts/Month</p>
                 
                    <div className="custom-check-boxes">
                      <div className="checkbox-div1">
                        <label className="custom_check-box">
                          <span className="custom_check-text">$12/Month</span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                        <label className="custom_check-box">
                          <span className="custom_check-text">$123/YEAR</span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                      </div>
                      <div className="checkbox-div2">
                        <label className="custom_check-box">
                          <span className="custom_check-text">
                            350/Month Platinum Points
                          </span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                      </div>
                    </div>
                    <div className="packages-btns">
                      <button onClick={packagecheckout} className="platinum-btn">CHECKOUT</button>
                    </div>
                
                </div>

              </div>
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
        <section className="checkout">
          <div className="container">
            <div className="checkout-content">
              <div className="row">
                <div className="col-md-12">
                  <h2
                    className="checkout__title"
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000"
                  >
                    CHECKOUT
                  </h2>
                </div>
              </div>
              <form action="/">
                <div className="row">
                  <div className="col-lg-7">
                    <div
                      className="checkbox-outer"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <label className="custom_check-box label-1">
                        <span className="custom_check-text">
                          PLATINUM MONTHLY MEMBERSHIP&nbsp; &nbsp;
                          <span className="actual-price">$34/Month</span>&nbsp;
                          &nbsp;
                          <span className="discount-price gradiant-text">
                            $34/Month
                          </span>
                        </span>
                        <input type="checkbox" className="blackbox_custom" />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="checkbox-outer"
                      data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <label className="custom_check-box lable-2">
                        <span className="custom_check-text">
                          ADD <span class="gradiant-text">$50</span> to my
                          platinum bank
                        </span>
                        <span className="small-tagline">
                          (FOR BOOST OR OTHER FEATURES)
                        </span>
                        <input type="checkbox" className="blackbox_custom" />
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="subtotal"
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      <h3>
                        SUBTOTAL: <span className="subtotal-price">$73</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label
                      htmlFor="promo"
                      data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      PROMO CODE
                    </label>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control promo"
                        id="promo"
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p
                      className="saved-price"
                      data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="3000"
                    >
                      YOU Saved <span className="five-dollers">$5</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div class="col-md-12">
                    <div className="text-center checkout-btn">
                      <button type="button" onClick={handlepayment} class="sign_actionBtn">GO TO PAYMENT</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <img src={pageBottomImg} className="page-bottom_img" />
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Packages;
