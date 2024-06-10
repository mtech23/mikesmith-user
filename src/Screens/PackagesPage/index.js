import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import goldpackage from '../../Asserts/images/Grouppackage.png'
 
// import { modelpurchaseplane } from '../../api'
import { modelpackagelist, modelpurchaseplane } from '../../api'
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
      if (response?.status === true) {

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

  console.log("pkg", pkg)

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



  const userrole = localStorage.getItem("userrole")
  // useEffect(() =>{
  //   packagecheckout()
  // } , [])
  console.log("modellists", modellists)

  return (
    <>
      <section class="packages-page">
        <div>
          <Header />
        </div>
        <section className="packages_section">
          <div className="container">

            <div className="row justify-content-center">




              {userdata?.map((data) => (
                <div className="col-lg-5 col-md-6">
                  <div
                    className="gold-package"
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000"
                  >
                    <img className="goldpkg" src={goldpackage} />

                    <p className=" ">{data?.plan?.name}</p>
                    <p>+ Good, Easy Money!</p>
                    <p>+ {data?.plan?.posts_limit} Request Posts/Day</p>
                    <p>+ {data?.plan?.messages_limit} Messages With Images  Per Month</p>
                    <p>+Earn  {data?.plan?.sales_percent}%  on Purchases </p>
                    <p>+ Keep {data?.plan?.tips_percent}% of Tips</p>
                    <p>+ Earn {data?.plan?.platinum_percent}% in Platinum Points on Sales</p>

                    {userrole == 2 ? (<p> Can Only {data?.plan?.requests} Requests</p>) : (" ")}



                    {/* <p>- 10 Posts/Month</p> */}
                    {userrole == 2 ? (<p>- {data?.plan?.boost_limit} Boosts/Month</p>) : (" ")}

                    <div className="custom-check-boxes">
                      <div className="checkbox-div1">
                        <label className="custom_check-box">

                          <span className="custom_check-text"> $ {data?.plan?.prices_options?.monthly?.price}/Month </span>
                          <input onChange={() => handlepkg(data?.plan?.prices_options?.monthly?.id)} type="checkbox" className="blackbox_custom" />
                        </label>


                        <label className="custom_check-box">

                          <span className="custom_check-text"> $ {data?.plan?.prices_options?.yearly?.price}/Year   </span>
                          <input onChange={() => handlepkg(data?.plan?.prices_options?.yearly?.id)} type="checkbox" className="blackbox_custom" />
                        </label>




                      </div>


                      <div className="checkbox-div1">


                        <label className="custom_check-box">

                          <span className="custom_check-text"> $ {data?.plan?.prices_options?.month_platinum_points?.price}/Month Platinum Points     </span>
                          <input onChange={() => handlepkg(data?.plan?.prices_options?.month_platinum_points?.id)} type="checkbox" className="blackbox_custom" />
                        </label>

                      </div>



                      {/* <div className="checkbox-div1">
                        <label className="custom_check-box">

                          <span className="custom_check-text"> $ {data?.plan?.prices_options?.yearly?.price}/Year   </span>
                          <input onChange={() => handlepkg(data?.plan?.prices_options?.yearly?.id)} type="checkbox" className="blackbox_custom" />
                        </label>

                      </div> */}

                    </div>
                    <div className="packages-btns">
                      <button onClick={() => packagecheckout(data.id)} className="gold-btn">CHECKOUT</button>
                    </div>

                  </div>

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

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Packages;
