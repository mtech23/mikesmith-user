
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