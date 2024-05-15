

  // const handleSubmitss = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('category_id', selectedCategory);
  //   formData.append('post_type', selectedPostOption);
  //   formData.append('type', selectedPostType);
    
  //   // file.forEach((  index) => {
  //   //   // const fileBlob = 
  //   //   formData.append(`file${index}`, file, `file${index}.png`);
  //   // });
  
  //   // Now you can send formData via your preferred method, such as fetch
  //   // Example:
  //   fetch('your-upload-url', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //   .then(response => {
  //     // Handle response
  //   })
  //   .catch(error => {
  //     console.error("Error uploading file:", error);
  //   });
  // };


  // const handleChange = (event) => {
  //     const file = event.target.files[0]
  //     // console.log(file.name)
  //     if (file) {
  //       setFile((prevData) => ({
  //         ...prevData,
  //         image: file,
  //       }));
  //     }
  //     console.log(formData);
  //   };


  // const handleChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   const filesArray = Array.from(selectedFiles);
  //   setFiles.push(filesArray)

  // };

  // const handleChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   const filesArray = Array.from(selectedFiles);
  //   setFile(prevFiles => [...prevFiles, ...filesArray]);
  // };


  // const handleChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   const filesArray = Array.from(selectedFiles);
  //   setFile(filesArray);
  // };


  




    // const file = event.target.files[0]
    // // console.log(file.name)
    // if (file) {
    //   setFile((prevData) => ({
    //     ...prevData,
    //    image :  selectedFiles
    //   }));
    // }
    // console.log(formData);


    // const file = event.target.files[0]
    //   // console.log(file.name)
    //   if (file) {
    //     // setFile(file);
    //           setFile(prevDataUrls => [...prevDataUrls, file]);
    //   }
    //   console.log(formData);




      // const handleChange = (event) => {
  //   // Get the selected files from the input element
  //   const selectedFiles = event.target.files;

  //   // Convert the selected files to an array
  //   const filesArray = Array.from(selectedFiles);

  //   // Update the state with the array of selected files
  //   setFile(filesArray);
  // };








  // const handleChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   const filesArray = Array.from(selectedFiles);

  //   Promise.all(filesArray.map(file => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.onload = () => resolve(reader.result);
  //       reader.onerror = reject;
  //       reader.readAsDataURL(file);
  //     });
  //   })).then(dataUrls => {
  //     setFile(prevFiles => [...prevFiles, filesArray])
  //   });
  // }



    // const handleChange = (e) => {
  //   const data = e.target.files[0];
  //   console.log(data);
  //   setFile(data);
  // };




    // const handleChange = (e) => {
  //   const data = e.target.files[0];
  //   console.log(data);
  //   setFile(data);
  // };



  
  // const handleSubmits = (e) => {

  //   e.preventDefault();
  //   alert("data")
  //   // const formData = new FormData(e.currentTarget);
  //   // let payload = {};
  //   // // for (let [file, value] of formData.entries()) {
  //   // //   payload[key] = value;
  //   // // }
  //   // for (let [key, value] of formData.entries()) {
  //   //   payload[key] = value;
  //   // }
  //   // payload["category_id"] = selectedCategory;
  //   // payload["post_type"] = selectedPostOption;
  //   // payload["type"] = selectedPostType;
  //   // console.log("formData", formData)
  //   // console.log("payload", payload)


  // const formDataMethod = new FormData();
  // // for (const key in formData) {
  //   formDataMethod.append('category_id', selectedCategory);
  //   formDataMethod.append('post_type', selectedPostOption);
  //   formDataMethod.append('type', selectedPostType);
  //   formDataMethod.append('file', file);

  // }
  // }














  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // alert("data")

  //   // Create a new FormData object
  //   const formDataMethod = new FormData();
  //   formDataMethod.append('category_id', selectedCategory);
  //   formDataMethod.append('category_id', "data");
  //     formDataMethod.append('post_type', selectedPostOption);
  //     formDataMethod.append('type', selectedPostType);
  //     formDataMethod.append('file', file);

  //   console.log("formDataMethod " , formDataMethod);

  // };



  // formDataMethod.append('post_type', selectedPostOption);
  // formDataMethod.append('type', selectedPostType);







  
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formDataMethod = new FormData();
  //   formDataMethod.append('category_id', selectedCategory);
  //   formDataMethod.append('category_id', "data");
  //     formDataMethod.append('post_type', selectedPostOption);
  //     formDataMethod.append('type', selectedPostType);
  //     formDataMethod.append('file', file);
  //   // if (password === confirmPassword) {
  //   //   setPasswordsMatch(true);
  //   //   const formData = new FormData(event.currentTarget);
  //   //   let payload = {};
  //   //   for (let [key, value] of formData.entries()) {
  //   //     payload[key] = value;
  //   //   }
  //   //   console.log(payload);
  //     try {
  //       const response = await Addmodelpost(
  //         formDataMethod
  //       );

  //       if (response && response.success === true) {
  //         const userToken = response.data.token;

  //         localStorage.setItem("userToken", userToken);
  //         // dispatch(loginSuccess(response.data));

  //         // navigate("/login-page");
  //       } else {
  //         toastAlert(response.statusText, ALERT_TYPES.ERROR);
  //       }
  //     } catch (error) {
  //       console.error("Error in logging in:", error);

  //       toastAlert(error, ALERT_TYPES.ERROR);
  //     }
  //     // Passwords match, you can proceed with further actions here
  //   //  else {
  //   //   setPasswordsMatch(false);
  //   //   // Passwords don't match, you can display an error message or take other actions
  //   // }
  // };





  
  // console.log("handleSubmits" , handleSubmits)



  // const handleSubmitss = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const payload = [];
  //   // payload.append(file, file);
  //   for (let [key, value] of formData.entries()) {
  //     // Check if the current form data entry is a file
  //     if (value instanceof File) {

  //       if (!payload[key]) {
  //         payload[key] = [value];
  //       } else {
  //         payload[key].push(value);
  //       }
  //     } else {
  //       // If it's not a file, directly assign the value to the payload
  //       payload[key] = value;
  //     }
  //   }

  //   // Assuming selectedCategory, selectedPostOption, and selectedPostType are defined elsewhere
  //   payload["category_id"] = selectedCategory;
  //   payload["post_type"] = selectedPostOption;
  //   payload["type"] = selectedPostType;

  //   console.log("formData", formData);
  //   console.log("payload", payload);
  // };



        // if (response && response?.success === true) {
      //   const  data = response?.data;
      //   console.log("data" , data)
      //   setUserdata(data)




      //   // navigate("/");
      // } else {
      //   toastAlert(response.statusText, ALERT_TYPES.ERROR);
      // }



       {/* <h3 className="image__preview-heading">
                    Add New Image/Video
                  </h3>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image__preview">
                        <img src={addPostImg2} className="image__preview-img" />
                      </div>
                    </SwiperSlide>
                  </Swiper> */}



















                  const handleSubmit = async (event) => {
 
                    event.preventDefault();
                    // navigate('/')
                
                    toastAlert("Post Add Successfully", ALERT_TYPES.SUCCESS);
                    const formDataMethod = new FormData();
                    formDataMethod.append('category_id', selectedCategory); // Assuming selectedCategory is defined elsewhere
                    formDataMethod.append('post_type', selectedPostOption);
                    formDataMethod.append('type', selectedPostType);
                      file?.forEach((file, index) => {
                      formDataMethod.append(`file[${index}]`, file);
                    })
                 
                    //   for (const key in formData) {
                  //     formDataMethod.append(key, formData[key]);
                  // }
                
                  // const formDataString = JSON.stringify(formDataObject);
                      formDataMethod.append(`file`, JSON.stringify(formData) );    
                    //   file?.forEach((file, index) => {
                    //   formDataMethod.append(`file[${index}]`, file);
                    // });  
                    try {
                      const response = await Addmodelpost(formDataMethod);
                  
                      if (response && response.success === true) {
                        navigate('/payment-page');
                      } else {
                        toastAlert(response.statusText, ALERT_TYPES.ERROR);
                      }
                    } catch (error) {
                      console.error("Error in adding model post:", error); // Corrected the log message
                      toastAlert(error.message || "An error occurred", ALERT_TYPES.ERROR); // Show error message in toast
                    }
                  };
                  




































































































 
import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { useAppContext } from '../../context/Context';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CreatePost() {
    const { userData } = useAppContext();
    const [isTextInputVisible, setIsTextInputVisible] = useState(false);
    const [inputText, setInputText] = useState(`What's in your mind?`);
    const [newText, setNewText] = useState(`What's in your mind?`);

    const toggleTextInput = () => {
        setIsTextInputVisible(!isTextInputVisible);
    };
    const handlePressOutside = () => {
        if (isTextInputVisible) {
            setIsTextInputVisible(false);
            setInputText(newText);
        }
    };
    const [selectedImages, setSelectedImages] = useState([]);
    const openImagePicker = async () => {
        try {
            const result = await launchImageLibrary({ mediaType: 'photo', quality: 0, selectionLimit: 3 });
            if (!result.didCancel && result.assets && result.assets.length > 0) {
                const newSelectedImages = result.assets.map(asset => ({ uri: asset.uri }));
                setSelectedImages(prevSelectedImages => [...prevSelectedImages, ...newSelectedImages]);
                console.log('Selected Images:', selectedImages);
            }
        } catch (error) {
            console.error('Error opening image picker:', error);
        }
    };
    const clearSelectedImages = () => {
        setSelectedImages([]);
    };
    const handlePostSubmission = async () => {
        const token = await AsyncStorage.getItem('userToken');
        let formData = new FormData();  // Declare formData using let
        try {
            const apiUrl =
                'https://custom3.mystagingserver.site/gr00pz/backend/public/api/user/post-add-update';
            selectedImages.forEach((image, index) => {
                formData.append(`images[${index}]`, {
                    uri: image.uri,
                    type: 'image/jpeg',
                    name: `image_${index}.jpg`,
                });
            });
            formData.append('description', newText);
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log('Response Data:', responseData);
                // navigation.navigate('shope');
            } else {
                console.error(
                    'Failed to submit post. Server returned:',
                    response.status,
                    response.statusText
                );
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
        
        }
    };
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    translucent={true}
                    backgroundColor="transparent"
                />
                <TouchableWithoutFeedback style={styles.touchable} onPress={handlePressOutside}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <Image source={{ uri: `https://custom3.mystagingserver.site/gr00pz/backend/public/${userData?.image}` }} style={styles.userImage} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.userName}>{userData?.first_name} {userData?.last_name}</Text>
                                <Text style={styles.userProfassion}>{userData?.profession}</Text>
                            </View>
                        </View>
                        <View style={styles.postTextBox}>
                            {isTextInputVisible ? (
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={(text) => setNewText(text)}
                                    value={newText}
                                    multiline
                                    placeholderTextColor="#717171"
                                    textAlignVertical='top'
                                />
                            ) : (
                                <TouchableOpacity onPress={toggleTextInput}>
                                    <Text style={styles.buttonText}>{inputText}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', position: 'relative', marginVertical: 15 }}>
                            {selectedImages.slice(0, 2).map((image, index) => (
                                <View key={index} style={{ width: selectedImages.length === 1 ? '98%' : '48%', margin: 2 }}>
                                    <Image source={{ uri: image.uri }} style={{ width: '100%', height: 180 }} />
                                </View>
                            ))}
                            {selectedImages.length > 0 && (
                                <TouchableOpacity onPress={clearSelectedImages}>
                                    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 10, borderRadius: 100, position: 'absolute', top: 10, right: 10 }}>
                                        <Icon name="close" size={25} color={'#fff'} />
                                    </View>
                                </TouchableOpacity>
                            )}
                            {selectedImages.slice(2, 5).map((image, index) => (
                                <View key={index} style={{ width: selectedImages.length === 2 ? '48%' : '32%', margin: 2 }}>
                                    <Image source={{ uri: image.uri }} style={{ width: '100%', height: 120 }} />
                                </View>
                            ))}
                            {selectedImages.length > 5 && (
                                <View style={{ margin: 2, position: 'absolute', bottom: 50, right: 50, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: '600' }}>{`+ ${selectedImages.length - 5}`}</Text>
                                </View>
                            )}
                        </View>

                        <TouchableOpacity onPress={openImagePicker}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                <FontAwesome name="camera" size={18} color={'#626262'} />
                                <Text style={{ color: '#161616', fontSize: 15, paddingLeft: 10 }}>Photo</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={openImagePicker}>
                            <View style={{flexDirection:'row', alignItems:'center'  ,marginVertical:5}}>
                            <FontAwesome6 name="user-tag" size={18} color={'#626262'} />
                            <Text style={{color:'#161616' ,fontSize:15 ,paddingLeft:10}}>Tag User</Text>
                            </View>
                        </TouchableOpacity> */}
                           <TouchableOpacity onPress={handlePostSubmission}>
                        <Text>done</Text>
                    </TouchableOpacity>
                    </View>
                 
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        // backgroundColor: '#fff',
    },
    touchable: {
        flex: 1,
    },
    postTextBox: {
        backgroundColor: '#EBEDF0',
        padding: 6,
        width: '100%',
        height: 168,
        borderRadius: 10,
        borderColor: 'rgba(212, 211, 216, 1.0)',
        borderWidth: 1,
    },
    buttonText: {
        color: '#626262',
        padding: 5,
        fontSize: 16,
    },
    textInput: {
        padding: 8,
        width: '100%',
        height: 154,
        marginBottom: 10,
        color: '#000',
        borderWidth: 1,
        borderColor: '#C8C8C8',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        paddingTop: 15,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#161616'
    },
    userProfassion: {
        fontSize: 14,
        color: '#626262'
    },
});