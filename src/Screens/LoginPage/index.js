import React from "react";
// import Header from '../../Components/Layout/Header';
// import Footer from '../../Components/Layout/Footer';
import { mainLogo, top, btm } from "../../Asserts/images/index";

import "./style.css";
import { useNavigate } from "react-router-dom";
import { userLoginRequest } from "../../api";
import { toastAlert } from "../../utils";
import { ALERT_TYPES } from "../../constants";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slicers/user";
import CustomInput from '../../Components/CustomInput'
const Login = () => {
  //CONST VALS
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //HANDLERS
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let payload = {};
    for (let [key, value] of formData.entries()) {
      payload[key] = value;

    }
    console.log(payload);
    try {
      const response = await userLoginRequest(payload);

      if (response && response.success === true) {
        await new Promise((resolve) => {
          // notifys();
          setTimeout(resolve, 3000); // Assuming the toast display duration is 3 seconds
        });
        const userToken = response?.data;
        toastAlert('you have successfully logged in', ALERT_TYPES.SUCCESS);
        localStorage.setItem("userToken", userToken?.token);
        localStorage.setItem("userrole", userToken?.user_role);
        localStorage.setItem("email", response.data?.email);
        localStorage.setItem("plan", response.data?.plan);
        localStorage.setItem("post_limit", response.data?.post_limit);
        localStorage.setItem("boost_limit", response.data?.boost_limit);
        dispatch(loginSuccess(response.data));
        const usertype = localStorage.getItem('userrole')
        console.log("usertype", usertype)
        if (usertype == 2) {
          navigate("/model-profile-page");
        } else {
          navigate("/model-page");
        }
        // navigate("/");
      } else {
        toastAlert(response.statusText, ALERT_TYPES.ERROR);
      }
    } catch (error) {
      console.error("Error in logging in:", error);

      toastAlert(error, ALERT_TYPES.ERROR);
    }
  };
  return (
    <div>
      <section className="log">
        <div className="black mx-auto">
          <div className="container">
            <div className="gold">
              <img className="img-fluid top" src={top} />
              <div className="row">
                <div className="col-md-12">
                  <div className="imagerow">
                    <img className="img-fluid " src={mainLogo} />
                  </div>
                  <h4 className="sign">Welcome! Sign in to continue</h4>
                  <p className="txt">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                  </p>

                  <form className="login-form " onSubmit={handleSubmit}>
                    {/* <input type='text'></input> */}
                    <label required class="user">
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      class="mail"
                      type="text"
                      placeholder="Enter Your Email "
                      name="email"
                      required
                    />

                    <label class="pass" required>
                      {" "}
                      Password{" "}
                    </label>
                    <input
                      class="pass"
                      type="password"
                      placeholder=" Enter Your Password"
                      name="password"
                      required
                    />

                    <input type="submit" value="Login" />
                  </form>
                  <div className="for">
                    {/* <p className="forgot">Forgot Password?</p> */}
                  </div>
                  <div className="divider">
                    {" "}
                    <span className="line"> </span>{" "}
                    <span className="or"> OR </span>{" "}
                    <span className="line1"> </span>
                  </div>
                  <div className="create">
                    <button
                      className="account"
                      onClick={() => navigate("/signup-page")}
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
              <img className="img-fluid btm" src={btm} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
