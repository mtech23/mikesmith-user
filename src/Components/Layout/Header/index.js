<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {
  headerBurgerIcon,
  mainLogo,
  headerSearchIcon,
  CLoseMenu,
  Cancel,
} from "../../../Asserts/images/index";
import "./style.css";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [ismenu, setIsMenu] = useState(false);

  const openMenu = () => {
    setIsMenu(!ismenu);
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
                <li>
                  <Link to={"/#!"}>Messages</Link>
                </li>
                <li>
                  <Link to={"/#!"}>My Dashboard</Link>
                </li>
                <li>
                  <Link to={"/add-post-page"}>Search posts</Link>
                </li>
                <li>
                  <Link to={"/add-post-page"}>Request board</Link>
                </li>
                <li>
                  <Link to={"/add-post-page"}>swag</Link>
                </li>
                <li>
                  <Link to={"/login-page"}>Sign up</Link>
                </li>
                <li>
                  <Link to={"/"}>how it works</Link>
                </li>
                <li>
                  <Link to={"/"}>FAQ</Link>
                </li>
                <li>
                  <Link to={"/packages-page"}>Platinum bank</Link>
                </li>
                <li>
                  <Link to={"/model-page"}>looking for page?</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="offcanvas-logout">
            <Link to={"/#!"}>Logout</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
=======

import React from 'react';
import { headerBurgerIcon, mainLogo, headerSearchIcon } from '../../../Asserts/images/index';
import "./style.css";
import { Link } from 'react-router-dom';


const Header = () => {

  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "280px";
  // }

  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }


  return (
    <div className='header_top'>
          <div className='main_header'>
              <div>
                <button className='header_menu_icon'>
                  <img src={headerBurgerIcon} alt='headerleftIcon'/>
                </button>
              </div>

              <div className='home_main_logo'>
                <Link to={"/"}>
                  <img src={mainLogo} alt="main_logo"/> 
                </Link>
                {/* <img src={mainLogo} alt="main_logo"/> */}
              </div>

              <div>
                <button className='header_search_icon'>
                  <img src={headerSearchIcon} alt='search_icon'/>
                </button>
              </div>

              <div id="mySidenav" class="sidenav">
                  <button className='closebtn'>close</button>
                  <h6>gggggggg</h6>
                  <h6>gggggggg</h6>
                  <h6>gggggggg</h6>
                  <h6>gggggggg</h6>
                  <h6>gggggggg</h6>
              </div>

            </div>
    </div>
  )
}

export default Header;
>>>>>>> origin/master
