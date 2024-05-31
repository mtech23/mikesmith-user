import React, { useEffect, useState } from "react";
import {
  headerBurgerIcon,
  mainLogo,
  headerSearchIcon,
  CLoseMenu,
  Cancel,
} from "../../../Asserts/images/index";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";




import Aos from "aos";
import "aos/dist/aos.css";
import { logoutRequest } from "../../../redux/slicers/user";
import { useDispatch } from "react-redux";
import { toastAlert } from "../../../utils";
import { ALERT_TYPES } from "../../../constants";
import { userLogoutRequest } from "../../../api";

const Header = () => {
  const [ismenu, setIsMenu] = useState(false);

  const LogoutData = localStorage.getItem("userToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usertype = localStorage.getItem('userrole')

  const openMenu = () => {
    setIsMenu(!ismenu);
  };


  const handleLogout = async () => {
    try {
      const response = await userLogoutRequest();

      if (response && response.status === true) {
        // toastAlert('Logged Out Successfully', ALERT_TYPES.SUCCESS);
        localStorage.removeItem("userToken");
        localStorage.removeItem("userrole");
        dispatch(logoutRequest());
        navigate("/login-page");
      } else {
        // toastAlert(response.statusText, ALERT_TYPES.ERROR);
      }
    } catch (error) {
      // toastAlert(error, ALERT_TYPES.ERROR);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="header_top">
        <div className="main_header">
          <div>
            <button className="header_menu_icon" onClick={openMenu}>
              <img src={headerBurgerIcon} alt="headerleftIcon" />
            </button>
          </div>

          <div className="home_main_logo">
            <Link to={"/"}>
              <img src={mainLogo} alt="main_logo" />
            </Link>
            {/* <img src={mainLogo} alt="main_logo"/> */}
          </div>

          <div>
            <button
              className="header_search_icon"
              data-toggle="modal"
              data-target=".search-modal"
            >
              <img src={headerSearchIcon} alt="search_icon" />
            </button>
          </div>

          <div id="mySidenav" class="sidenav">
            <button className="closebtn">close</button>
            <h6>gggggggg</h6>
            <h6>gggggggg</h6>
            <h6>gggggggg</h6>
            <h6>gggggggg</h6>
            <h6>gggggggg</h6>
          </div>
        </div>
      </div>

      <div
        class="modal fade search-modal"
        // id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered my-modal">
          <div class="modal-content">
            <div class="search-modal_content">
              <div className="search-modal_close">
                <a
                  href="javaScript:;"
                  className="cancel-a"
                  data-dismiss="modal"
                >
                  <img src={Cancel} />
                </a>
              </div>
              <div className="main_searchBar">
                <input
                  className="searchbar_input_field"
                  type="text"
                  placeholder="search post here"
                />
                <button className="searchbar_actionBtn">
                  <img src={headerSearchIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {ismenu && (
        <div
          className="menuSection"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <div className="nav">
            <div className="offcanvas-logo">
              <Link className="offcanvas-logo_img">
                <img src={mainLogo} />
              </Link>
              <div className="closeBtn">
                <button className="header_menu_icon" onClick={openMenu}>
                  <img src={CLoseMenu} alt="headerleftIcon" />
                </button>
              </div>
            </div>
            <nav className="offcanvas-nav">
              <ul>
                {usertype === 3 && (
                  <li>
                    <Link to={"/#!"}>Messages</Link>
                  </li>)}
                {/* {usertype  == 2 ? "<li>
                  <Link to={"/"}> My Dashboard</Link>
                </li>" : ''}  */}
                {usertype === 2 && (
                  <li>
                    <Link to={"/"}>My Dashboard</Link>
                  </li>
                )}
                {/* {usertype == 2 && (
                  <li>
                    <Link to={"/model-profile-page"}>My Profile</Link>
                  </li>
                )} */}

                {usertype == 3 && (
                  <li>
                    <Link to={"/profile-page"}>My Profile</Link>
                  </li>
                )}


                {/* <li>
                  <Link to={"/add-post-page"}>Search posts</Link>
                </li> */}

                {usertype == 2 && (

                  <li>
                    <Link to={"/add-post-page"}>Request board</Link>
                  </li>
                )}
                <li>
                  {/* <Link to={"/add-post-page"}>swag</Link> */}
                </li>
                {/* <li>
                  <Link to={"/signup-page"}>Sign up</Link>
                </li> */}
                {!LogoutData && (
                  <li>
                    <Link to={"/signup-page"}>Sign up</Link>
                  </li>
                )}
                {/* <li>
                  <Link to={"/"}>how it works</Link>
                </li> */}
                {/* <li>
                  <Link to={"/"}>FAQ</Link>
                </li> */}
                <li>
                  <Link to={"/packages-page"}>Platinum bank</Link>
                </li>

                <li>
                  <Link to={"/model-page"}>Models</Link>
                </li>
                {usertype === 2 && (
                  <li>
                    <Link to={"/model-page"}>looking for page?</Link>
                  </li>)}

                <li>
                  <Link to={"/faqs"}>Faqs</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="offcanvas-logout">
            {LogoutData && (
              <Link onClick={handleLogout}>Logout</Link>
            )}

            {!LogoutData && (
              <Link to={"/login-page"}>Sign In</Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
