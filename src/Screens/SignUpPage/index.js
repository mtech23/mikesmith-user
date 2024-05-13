import React from "react";
// import Header from '../../Components/Layout/Header';
// import Footer from '../../Components/Layout/Footer';
import { mainLogo, top, btm } from "../../Asserts/images/index";
import CommonInput from "../../Components/CustomInput";
import { SelectBox } from "../../Components/CustomSelect";
import "./style.css";
import { useState } from "react";
import { userSignUpRequest } from "../../api";
import { toastAlert } from "../../utils";
import { useNavigate } from "react-router-dom";
import { ALERT_TYPES } from "../../constants";
import { loginSuccess } from "../../redux/slicers/user";
import { useDispatch } from "react-redux";

const SignUp = () => {
  //STATES
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [accountType, setAccountType] = useState("1");

  //CONST VALS
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ACCOUNT_TYPE_OPTIONS = [
    { id: "1", name: "User" },
    { id: "2", name: "Model" },
  ];
  //HANDLERS

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setPasswordsMatch(true);
      const formData = new FormData(event.currentTarget);
      let payload = {};
      for (let [key, value] of formData.entries()) {
        payload[key] = value;
      }
      console.log(payload);
      try {
        const response = await userSignUpRequest(
          accountType === "1" ? "user" : "model",
          payload
        );

        if (response && response.success === true) {
          const userToken = response.data.token;

          localStorage.setItem("userToken", userToken);
          localStorage.setItem("userrole", response.data?.user_role);
          dispatch(loginSuccess(response.data));

          navigate("/packages-page");
        } else {
          toastAlert(response.statusText, ALERT_TYPES.ERROR);
        }
      } catch (error) {
        console.error("Error in logging in:", error);

        toastAlert(error, ALERT_TYPES.ERROR);
      }
      // Passwords match, you can proceed with further actions here
    } else {
      setPasswordsMatch(false);
      // Passwords don't match, you can display an error message or take other actions
    }
  };
  return (
    <div>
      <section className="log sign">
        <div className="black mx-auto">
          <div className="container">
            <div className="gold">
              <img className="img-fluid top" src={top} />
              <div className="row">
                <div className="col-md-12">
                  <div className="imagerow">
                    <img className="img-fluid " src={mainLogo} />
                  </div>
                  <h4 className="sign">Welcome! Sign up to continue</h4>
                  <p className="txt">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                  </p>

                  <form
                    className="signup-form "
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <CommonInput
                      inputClass="mail"
                      type="text"
                      placeholder="Enter Your Email "
                      name="email"
                      label="Email"
                      labelClass="user"
                      required
                    />
                    <CommonInput
                      inputClass="pass"
                      type="password"
                      placeholder="Enter Your Password"
                      name="password"
                      label="Password"
                      labelClass="pass"
                      required
                      onChange={handlePasswordChange}
                    />
                    <CommonInput
                      inputClass="pass"
                      type="password"
                      placeholder="Re-Enter Your Password"
                      name="password_confirmation"
                      label="Re-Enter Password"
                      labelClass="pass"
                      required
                      onChange={handleConfirmPasswordChange}
                    />

                    <SelectBox
                      option={ACCOUNT_TYPE_OPTIONS}
                      value={accountType}
                      keepSelected
                      selectClass="select"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setAccountType(e.target.value);
                      }}
                      label="Account Type"
                      labelClass="pass"
                    />
                    {!passwordsMatch && (
                      <p style={{ color: "red" }}>Passwords do not match</p>
                    )}

                    <input type="submit" value="Sign Up" />
                  </form>
                  <div className="divider">
                    {" "}
                    <span className="line"> </span>{" "}
                    <span className="or"> OR </span>{" "}
                    <span className="line1"> </span>
                  </div>
                  <div className="create">
                    <button
                      className="account"
                      onClick={() => navigate("/login-page")}
                    >
                      Back To Login
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

export default SignUp;
