import React from 'react'
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';

// import { Link } from 'react-router-dom';

// import {platinumFeetText, headerSearchIcon, legsImage01, imgTopCorner, imgBottomCorner, hundredPercentage, homeImg01, modelText, modelImg01 ,modelCardTopCorner, modelCardBottomCorner, modelImg02, modelImg03, modelImg04, framePic, hoverableImg, mainFrameImg, videoPlayIcon, modelImg05, modelImg06, modelImg07, howItWorksText, howItWorksImg, forClientText, forClientImg, forModelsText, formodelImg01, formodelImg02, faqText} from "../../Asserts/images/index";

import "./style.css";

const addPost = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>

        <div className='add_post_section'>
            <div className='container'>
                <div className='row'>

                </div>
            </div>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default addPost