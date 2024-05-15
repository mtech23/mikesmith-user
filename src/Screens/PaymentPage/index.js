import React from "react";
import Header from "../../Components/Layout/Header";
import { ALERT_TYPES } from "../../constants/index";

import Footer from "../../Components/Layout/Footer";
import { toastAlert } from "../../utils/index";
import "./style.css";
// import { CustomInput } from '../../Components/CustomInput';
import { line } from "../../Asserts/images";
import { Cancel } from "../../Asserts/images";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Payment = () => {
  const navigate = useNavigate()
  const getusertype = localStorage.getItem('userrole')
  const notify =  () => {
    
    toastAlert("You've successfully submitted a payment!", ALERT_TYPES.SUCCESS);
    // alert("xaxsax")
  }
  const handleclick = async (event) =>{
    event.preventDefault();
    toastAlert("You've successfully submitted a payment!", ALERT_TYPES.SUCCESS);
    if (getusertype == 2) {
    // notify()
    toastAlert("You've successfully submitted a payment!", ALERT_TYPES.SUCCESS);
    navigate('/add-post-page')

  }
  else if (getusertype == 3) {
    // notify()
    // toastAlert("You've successfully submitted a payment!", ALERT_TYPES.SUCCESS);
    navigate('/profile-page')
  }

  else {
    navigate('/')
  }
  }

  // const handleclick = async (event) => {
  //   event.preventDefault();
  //   navigate('/')
  //   toastAlert("Post Add Successfully", ALERT_TYPES.SUCCESS); 
  // }

  // const handleclick = async (event) => {
  //   event.preventDefault();
  //    toastAlert("Post Add Successfully", ALERT_TYPES.SUCCESS);  

  //   //  navigate('/')
  //    // const formDataMethod = new FormData();
  //   // formDataMethod.append('category_id', selectedCategory); // Assuming selectedCategory is defined elsewhere
  //   // formDataMethod.append('post_type', selectedPostOption);
  //   // formDataMethod.append('type', selectedPostType);
  //   // formDataMethod.append('file', file);

     

  //   // try {
  //   //   const response = await Addmodelpost(formDataMethod);

  //   //   if (response && response.success === true) {
  //   //     navigate('/payment-page')
  //   //   } else {
  //   //     toastAlert(response.statusText, ALERT_TYPES.ERROR);
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Error in adding model post:", error); // Corrected the log message
  //   //   toastAlert(error.message || "An error occurred", ALERT_TYPES.ERROR); // Show error message in toast
  //   // }
  // };


  return (
    <div>
      <Header />
      <section className="payment">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <h5 className="pay">PAYMENT</h5>
              <form className="login-forms " onSubmit={handleclick} >
                {/* <img className="img-fluid cancel " src={Cancel} /> */}
                <label className="namin"> Name </label>
                <input
                  className="nam"
                  type="text"
                  placeholder="First Name"
                  required
                  name="Name"
                />
                <label className="namin"> Card Number </label>
                <input
                  className="card"
                  type="number"
                  placeholder="1234-5678-9101-1213"
                  required
                  name="Name"
                />
                <div class="slct select-cvv">
                  <div class="drop">
                    <label for="exampleFormControlSelect1" class="namin">
                      EXPIRATION DATE
                    </label>
                    <div class="drop1">
                      <select
                        required
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>MM</option>
                        <option>Januray</option>
                        <option>Febuary</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                      </select>
                      <img className="img-fluid slash" src={line} />
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        required
                      >
                        <option>YYYY</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                      </select>
                    </div>
                  </div>
                  <div class="cvc">
                    <label className="namin"> CVV CODE </label>
                    <input
                      className="cv"
                      type="number"
                      placeholder="123"
                      required
                      name="Name"
                    />
                  </div>
                </div>
                <label className="namin"> ADDRESS </label>
                <input
                  className="nam"
                  type="text"
                  placeholder="Address"
                  name="Name"
                  required
                />
                <label className="namin"> City </label>
                <input
                  className="nam"
                  type="text"
                  placeholder="City"
                  name="Name"
                  required
                />

                <div class="slct">
                  <div className="slct-first">
                    <div class="drop">
                      <label className="namin"> State </label>
                      <input
                        className="state"
                        type="text"
                        required
                        placeholder="AZ"
                        name="Name"
                      />
                    </div>
                    <div class="drop">
                      <label className="namin"> ZIP CODE </label>
                      <input
                        className="code"
                        type="number"
                        placeholder="9876"
                        name="Name"
                        required
                      />
                    </div>
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
    </div>
  );
};

export default Payment;
