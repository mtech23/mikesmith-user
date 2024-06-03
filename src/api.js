import { ALERT_TYPES } from "./constants";
import { toastAlert } from "./utils";

// const url = "https://custom3.mystagingserver.site/Mike-Smith";
const url = process.env.REACT_APP_BASE_URL
//SIGN UP
export const userSignUpRequest = async (type, data) => {
  try {
    const res = await fetch(`${url}/public/api/${type}-register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.message, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.message, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};

//LOGIN
export const userLoginRequest = async (data) => {
  try {
    const res = await fetch(`${url}/public/api/user-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.message, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.message, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};

//LOGOUT
export const userLogoutRequest = async () => {
  try {
    const res = await fetch(`${url}/public/api/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};




const LogoutData = localStorage.getItem("userToken");

//AddPost
export const Addmodelpost = async (data) => {

  try {
    const res = await fetch(`${url}/public/api/model/post-add-edit`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: data,
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      console.log("productData?.msg", productData?.msg)
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};


//Editpost
export const Editmodelpost = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/post-add-edit/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};












//Post image Delete
export const PostImagedelete = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/post-image-delete/${id}/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};




//delete model post
export const deletemodelpost = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/post-delete/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};



//Get model post list
export const Getmodelpostlist = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/post-listing/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};





//Get model post  
export const Getmodelpost = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/post-listing`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};



//Get model post detail
export const Getmodelpostdetail = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/post-view/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};









//Get model friend Request list
export const modelfriendrequestlist = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/requests`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};





//Get model friend Request accept
export const modelfriendrequestaccept = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/request-accept/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};






//Get model Pofile View
export const modelprofileview = async () => {
  try {
    const res = await fetch(`${url}/public/api/model/profile-get`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON

    console.log(productData, "res");

    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      console.log("productData?.msg", productData?.msg)
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};




//Get model Pofile View list
export const modelprofillist = async () => {
  try {
    const res = await fetch(`${url}/public/api/package-listing`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON

    console.log(productData, "res");

    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      console.log("productData?.msg", productData?.msg)
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};










//Get model Pofile View list
export const modellist = async () => {
  try {
    const res = await fetch(`${url}/public/api/model-listing`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(" ")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON

    console.log(productData, "res");

    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      console.log("productData?.msg", productData?.msg)
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};



//Get model Pofile Edit
export const modelprofileedit = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/profile-add-edit`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};









//Get model Post Tag
export const modelprofiletag = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model/post-tag/${id}`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};











//Get User Profile view
export const Userprogileview = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/user/profile-get/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};






// Edit User Profile  
export const EditUserprofile = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/user/profile-add-edit`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};







// User Send Request
export const UserSendRequest = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/send-request/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};






// User Unflow Model
export const UserUnflowmodel = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/user/model-follow-unfollow/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};






// User unfavourite  Model
export const UserUnfavouritemodel = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/model-favourite-unfavourite/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};









// User Buy Post
export const UserBuyPost = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/user/buy-post/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};





//  Model Purchase Plane
export const modelpurchaseplane = async (id) => {
  try {
    const res = await fetch(`${url}/public/api/pick-subscription-package/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
 

    const productData = await res.json(); // Parse response JSON
    console.log(productData, "res");
    if (!res.ok) {
      toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);

    } else {
      toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};








//  Model  Catigory Plane
export const modelcatigorylist = async () => {
  try {
    const res = await fetch(`${url}/public/api/category-listing`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");

    const productData = await res.json();
    console.log(productData, "res");
    if (!res.ok) {
    } else {
    }

    return productData;
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error;
  }
};




//  Model  Packaged Plane
export const modelpackagelist = async () => {
  try {
    const res = await fetch(`${url}/public/api/package-listing`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    console.log(res, "res");
    // Ensure response is ok before proceeding

    const productData = await res.json();
    console.log(productData, "res");
    if (!res.ok) {
      // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
    } else {
      // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
    }

    return productData; // Return parsed data
  } catch (error) {
    toastAlert(error, ALERT_TYPES.ERROR); // Handle error
    throw error; // Rethrow error to be handled by caller
  }
};