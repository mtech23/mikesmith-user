import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import "./style.css";
// import { CustomInput } from '../../Components/CustomInput';
import { line } from "../../Asserts/images";
import { Cancel } from "../../Asserts/images";

const Payment = () => {
  return (
    <div>
      <section className="payment">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <h5 className="pay">PAYMENT</h5>
              <form className="login-forms ">
                <img className="img-fluid cancel " src={Cancel} />
                <label className="namin"> Name </label>
                <input
                  className="nam"
                  type="text"
                  placeholder="FIRST LAST"
                  name="Name"
                />
                <label className="namin"> Card Number </label>
                <input
                  className="card"
                  type="number"
                  placeholder="1234-5678-9101-1213"
                  name="Name"
                />
                <div class="slct select-cvv">
                  <div class="drop">
                    <label for="exampleFormControlSelect1" class="namin">
                      EXPIRATION DATE
                    </label>
                    <div class="drop1">
                      <select
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
                      name="Name"
                    />
                  </div>
                </div>
                <label className="namin"> ADDRESS </label>
                <input
                  className="card"
                  type="number"
                  placeholder="1234-5678-9101-1213"
                  name="Name"
                />
                <label className="namin"> City </label>
                <input
                  className="card"
                  type="number"
                  placeholder="1234-5678-9101-1213"
                  name="Name"
                />

                <div class="slct">
                  <div className="slct-first">
                    <div class="drop">
                      <label className="namin"> State </label>
                      <input
                        className="state"
                        type="text"
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
                      />
                    </div>
                  </div>
                  <div class="drop">
                    {/* <input type="submit" class="sub" value="CONFIRM"/> */}
                    <button class="sub">CONFIRM</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
