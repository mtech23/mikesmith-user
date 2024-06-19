import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import { ALERT_TYPES } from "../../constants/index";
import { ToastContainer, toast } from 'react-toastify';
// import { toast } from 'react-toastify';

import Footer from "../../Components/Layout/Footer";
import { modelpackagelist, modelpurchaseplane } from '../../api'
import { toastAlert } from "../../utils/index";
import "./style.css";
import Loader from "../../Components/loader";
import { line } from "../../Asserts/images";
import { Cancel } from "../../Asserts/images";
import { useNavigate } from "react-router-dom";


import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js'
import 'react-toastify/dist/ReactToastify.css';
 

const notifys = () => toast("Plan Purchase Successfully");

const Payment = () => {
  const [formData, setFormData] = useState()
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setLoading] = useState(true);
  const getusertype = localStorage.getItem('userrole')
  const [notify, setNotify] = useState("")

  const [stiprtoken, setstiprtoken] = useState()
  const handlechanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (token) {
      setstiprtoken(token?.id)
      handleclick(token?.id)
    } else {
    }
  };


  const planeid = localStorage.getItem('planeid')
  const price = localStorage.getItem('price')
  const id = localStorage.getItem('id ')

  // const notifys = () => toast("Plan Purchase Successfully");

  // const handleclick = async (stiprtoken) => {
  //   const formDataMethod = new FormData();
  //   for (const key in formData) {
  //     formDataMethod.append(key, formData[key]);
  //   }
  //   formDataMethod.append('stripe_token', stiprtoken);
  //   formDataMethod.append('id', id);
  //   formDataMethod.append('price', price);
  //   try {

  //     const response = await modelpurchaseplane(planeid, formDataMethod);

  //     if (response?.status == true) {
  //       localStorage.removeItem('planeid')
  //       localStorage.removeItem('price')
  //       localStorage.removeItem('id ')
  //       setNotify(response?.mgs)

  //       notifys()



  //       toastAlert(response.statusText, ALERT_TYPES.ERROR);
  //       notifys()

  //     } else {
  //       toastAlert(response.statusText, ALERT_TYPES.ERROR);
  //     }
  //   } catch (error) {
  //     console.error("Error in adding model post:", error);
  //     toastAlert(error.message || "An error occurred", ALERT_TYPES.ERROR);
  //   }
  // };





  const handleclick = async (stiprtoken) => {
    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }
    formDataMethod.append('stripe_token', stiprtoken);
    formDataMethod.append('id', id);
    formDataMethod.append('price', price);

    try {
      const response = await modelpurchaseplane(planeid, formDataMethod);

      if (response?.status == true) {
        localStorage.removeItem('planeid');
        localStorage.removeItem('price');
        localStorage.removeItem('id');
        setNotify(response?.mgs);

        // Show the notification and wait for it to finish
        await new Promise((resolve) => {
          // notifys();
          setTimeout(resolve, 3000); // Assuming the toast display duration is 3 seconds
        });

        // Navigate to another route (e.g., home page)
        navigate('/');

        toastAlert(response.statusText, ALERT_TYPES.ERROR);
      } else {
        toastAlert(response.statusText, ALERT_TYPES.ERROR);
      }
    } catch (error) {
      console.error("Error in adding model post:", error);
      toastAlert(error.message || "An error occurred", ALERT_TYPES.ERROR);
    }
  };

  setTimeout(() => {
    setLoading(false)
  }, 1000)
  return (
    <div>

      {isLoading ? (
        <Loader />
      ) : (

        <div>
          <Header />
          <section className="payment">
            <div class="container">
              <div class="row">
                <div class="col-md-10 mx-auto">

                  <h5 className="pay">PAYMENT</h5>
                  <form className="login-forms  justify-content-center mx-auto  d-flex" onSubmit={handleSubmit} >

                    <div className="row justify-content-center d-flex">
                      <div className="col-md-9">

                        <label className="namin"> Name </label>
                        <input
                          className="nam"
                          type="text"
                          placeholder="Name"
                          required
                          name="Name"
                          onChange={handlechanges}
                        />
                      </div>




                      {/* <div className="col-md-9 mt-3">
                        <label className="namin"> Card Number </label>
                        <input
                          className="nam"
                          type="number"
                          placeholder="MM/YY CVC"
                          required
                          name="card_number"
                          onChange={handlechanges}
                        />
                      </div> */}
                      <>

                        <div className="col-md-9 mt-2 mb-3 ">

                          <CardElement className=" custom_element_input"

                            options={{
                              style: {
                                base: {
                                  fontSize: '15px',
                                  color: '#fff',

                                },
                                invalid: {
                                  color: '#fff',
                                },
                              },
                            }} />
                        </div>

                      </>

                      <div className="col-md-9 ">

                        <label className="namin"> ADDRESS </label>
                        <input
                          className="nam"
                          type="text"
                          placeholder="Address"
                          name="address"
                          required
                          onChange={handlechanges}
                        />
                      </div>



                      <div className="col-md-4">

                        <label className="namin"> City </label>
                        <input
                          className="nam"
                          type="text"
                          placeholder="City"
                          name="city"
                          required
                          onChange={handlechanges}
                        />

                      </div>



                      <div className="col-md-3">

                        <label className="namin"> State </label>
                        <input
                          className="nam"
                          type="text"
                          required
                          placeholder="AZ"
                          name="state"
                          onChange={handlechanges}
                        />


                      </div>

                      <div className="col-md-2">

                        <label className="namin"> ZIP CODE </label>
                        <input
                          className="nam"
                          type="number"
                          placeholder="9876"
                          name="zip_code"
                          required
                          onChange={handlechanges}
                        />


                      </div>

                    </div>






                    <div class="slct">
                      <div className="slct-first">


                      </div>
                      <div class="drop">
                        {/* <input type="submit" class="sub" value="CONFIRM"/> */}
                        <button type="submit" class="sub">CONFIRM</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          <ToastContainer />

        </div>)}
    </div>
  );
};

export default Payment;
