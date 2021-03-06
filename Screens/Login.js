import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
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

import {View , ActivityIndicator} from 'react-native';

//colors
const {brand,darkLight,primary} = colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from './../Components/KeyboardAvoidingWrapper';

//API
import axios from 'axios';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
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
                <InnerContainer>
                    <PageLogo resizeMode = "cover" source={require('../assets/reallogo.png')}/>
                    {/* <PageTitle>Meetech</PageTitle> */}
                    <SubTitle>Account Login</SubTitle>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values, {setSubmitting}) =>{
                            // console.log(values);
                            // navigation.navigate("Welcome");
                            if(values.email == '' || values.password == ''){
                                handleMessage('please fill all the fields');
                                setSubmitting(false)
                            }
                            else{
                                handleLogin(values, setSubmitting);
                            }
                        }}
                    >
                    {({handleChange, handleBlur, handleSubmit, values, isSubmitting})=>(<StyledFormArea>

                        <MyTextInput 
                            label= "Email Address"
                            icon= "mail"
                            placeholder = "ahsan.123@gmail.com"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('email')}
                            onBlur = {handleBlur('email')}
                            value = {values.email}
                            keyboardType = 'email-address'
                        />

                        <MyTextInput 
                            label= "Password"
                            icon= "lock"
                            placeholder = "* * * * * * * * * "
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('password')}
                            onBlur = {handleBlur('password')}
                            value = {values.password}
                            secureTextEntry = {hidePassword}
                            isPassword = {true}
                            hidePassword= {hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MsgBox type={messageType}>{message}</MsgBox>
                        {!isSubmitting &&<StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>}

                        {isSubmitting &&<StyledButton disabled = {true}>
                            <ActivityIndicator size="large" color={primary}/>
                        </StyledButton>}

                        <Line />
                        <StyledButton google={true} onPress={handleSubmit}>
                        <Fontisto name="google" size={25} color={primary} />
                            <ButtonText>Sign In with Google</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an account already?</ExtraText>
                            <TextLink onPress={()=>navigation.navigate("Signup")}>
                                <TextLinkContent> Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}

                    </Formik>
                </InnerContainer>
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
             {isPassword && (
                    <RightIcon onPress = {()=> setHidePassword(!hidePassword)}>
                        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                    </RightIcon>
             ) }
        </View>
    )
} ;
export default Login;
