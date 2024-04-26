import React from 'react'
// import Header from '../../Components/Layout/Header';
// import Footer from '../../Components/Layout/Footer';
import {mainLogo, top, btm } from "../../Asserts/images/index";

import "./style.css";

const Login = () => {
  return (
    <div>
        <section className="log">
            <div className="black mx-auto">
         <div className="container">
               <div className="gold">
               <img className="img-fluid top" src={top}/>
               <div className="row">
                 
                    <div className="col-md-12">
                        <div className="imagerow">
                        <img className="img-fluid " src={mainLogo}/>
                        </div>
                        <h4 className='sign'>Welcome! Sign to continue</h4>
                        <p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

                        <form className="login-form ">
                            {/* <input type='text'></input> */}
                            <label class="user"> Email  </label>
                            <input class="mail" type="text" placeholder="Enter Your Email "  name="username" /> 
                           
                            <label class="pass"> Password </label>
                            <input   class="pass"  type="password" placeholder=" Enter Your Password" name="password"/>
                            
                            <input type="submit" value="Login"/>
                            </form>
                            <div className='for'>
                            <p className='forgot'>Forgot Password?</p>
                            </div>
                            <div className='divider'>  <span className='line'> </span> <span className='or'> OR </span> <span className='line1'> </span>
                            </div>
                            <div className='create'>
                            <button className='account'>Create Account</button>
                            </div>
                      

                    </div>                
                </div>
                <img className="img-fluid btm" src={btm}/>
            </div>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Login