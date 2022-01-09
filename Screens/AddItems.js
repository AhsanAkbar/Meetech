import React, {useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../Components/Styles';

import {Text, View , ActivityIndicator,ScrollView,SafeAreaView} from 'react-native';

//colors
const {brand,darkLight,primary} = colors;

//API
import axios from 'axios';


// adding image from device

const AddItems = ({navigation}) => {

    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };





    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleLogin = (credentials, setSubmitting) =>{
        handleMessage(null);
        const url = 'http://192.168.137.1:3000/login';
        axios.post(url, credentials)
        .then((response)=>{
            const result = response.data;
            const {message, status, data} = result;

            if (status !== 'SUCCESS'){
                handleMessage(message, status);
            }
            else{
                navigation.navigate('Welcome', {...data[0]})
            }
            setSubmitting(false);

        })
        .catch(error =>{
            console.log(error);
            setSubmitting(false)
            handleMessage("An error occured. Please check your internet and try again")
        })
    }

    const handleMessage =(message, type = 'FAILED')=>{
        setMessage(message);
        setMessageType(type);
    }
    return (
        <StyledContainer>
                <StatusBar style="dark"/>
                <SafeAreaView>
                <ScrollView>
                <InnerContainer>
                    <PageTitle>Add Item</PageTitle>
                    <SubTitle>Details Of Item You Found</SubTitle>
                    <Line/>
                    <Formik
                        initialValues={{ItemName : '', ItemColor: '', PlaceName: '', Address:'', }}
                        onSubmit={(values, {setSubmitting}) =>{
                            // console.log(values);
                            // navigation.navigate("Welcome");
                            if(values.ItemName == '' || values.PlaceName == '' || values.Address == ''){
                                handleMessage('please fill all the necessary fields');
                                setSubmitting(false)
                            }
                            else{
                                handleLogin(values, setSubmitting);
                            }
                        }}
                    >
                    {({handleChange, handleBlur, handleSubmit, values, isSubmitting})=>(<StyledFormArea>
                    
                        <MyTextInput 
                            label= "Item Name"
                            icon= "briefcase"
                            placeholder = "Item Name"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('ItemName')}
                            onBlur = {handleBlur('ItemName')}
                            value = {values.ItemName}
                        />
                         <MyTextInput 
                            label= "Item Color"
                            icon= "tag"
                            placeholder = "Item Color"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('ItemColor')}
                            onBlur = {handleBlur('ItemColor')}
                            value = {values.ItemColor}
                        />
                        <MyTextInput 
                            label= "Place Item Found In"
                            icon= "location"
                            placeholder = "Place Name"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('PlaceName')}
                            onBlur = {handleBlur('PlaceName')}
                            value = {values.PlaceName}
                        />
                        <MyTextInput 
                            label= "Complete Address"
                            icon= "home"
                            placeholder = "Address item found in"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('Address')}
                            onBlur = {handleBlur('Address')}
                            value = {values.Address}
                        />

                        <MyTextInput 
                            label= "Enter Keywords"
                            icon= "key"
                            placeholder = "Laptop,Dell,Black,3 GEN"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('Keywords')}
                            onBlur = {handleBlur('Keywords')}
                            value = {values.Keywords}
                        />
                         <MyTextInput 
                            label= "Your Mobile Number"
                            icon= "rss"
                            placeholder = "03112607091"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('MobileNumber')}
                            onBlur = {handleBlur('MobileNumber')}
                            keyboardType= 'numeric'
                            value = {values.MobileNumber}
                        />

                        <StyledButton onPress={pickImage}>
                        <ButtonText>Pick Image</ButtonText>
                         
                        </StyledButton>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                       
                    
                        <MsgBox type={messageType}>{message}</MsgBox>
                        {!isSubmitting &&<StyledButton onPress={handleSubmit}>
                            <ButtonText>Add Item</ButtonText>
                        </StyledButton>}

                        {isSubmitting &&<StyledButton disabled = {true}>
                            <ActivityIndicator size="large" color={primary}/>
                        </StyledButton>}
                        <ExtraView>
                            <ExtraText>Want to go back on welcome page?</ExtraText>
                            <TextLink onPress={()=>navigation.navigate("Welcome")}>
                                <TextLinkContent> Click here</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}

                    </Formik>
                </InnerContainer>
                </ScrollView>
                </SafeAreaView>
            </StyledContainer>
    )
}

const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return(
        <View>
             <LeftIcon>
                 <Octicons name={icon} size={30} colors = {brand}/>
             </LeftIcon>
             <StyledInputLabel>{label}</StyledInputLabel>
             <StyledTextInput {...props}/>
        </View>
    )
} ;
export default AddItems;
