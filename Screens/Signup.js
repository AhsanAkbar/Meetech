import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
//datetime picker
import DateTimePicker from '@react-native-community/datetimepicker';

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

import {View, TouchableOpacity} from 'react-native'; 

import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';

//colors
const {brand,darkLight,primary} = colors;
    
const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setshow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [email, setEmail] = useState('');
    const [fullName,setfullName] = useState('');
    const [password, setPassword] = useState('');

    //actual date of birth to be sent
    const [dob, setDob] = useState();

    sendCred=()=>{
        fetch('http://10.0.2.2:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "fullName":fullName,
                "email":email,
                "dob":dob,
                "password":password
            })
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
    }


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setshow(false);
        setDate(currentDate);
        setDob(currentDate);
    }
    
    const showDatePicker = () =>{
        setshow(true);
    }
    return (
        <>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    {/* <PageLogo resizeMode = "cover" source={require('../assets/reallogo.png')}/> */}
                    <PageTitle>Meetech</PageTitle>
                    <SubTitle>Account Signup</SubTitle>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}

                    <Formik
                        initialValues={{fullName: '', email: '', dateOfBirth: '', password: ''}}
                        onSubmit={(values) =>{
                        console.log(values); 

                        navigation.navigate("Welcome")
                        }}
                    >
                    {({handleChange, handleBlur, handleSubmit, values})=>(<StyledFormArea>

                        <MyTextInput 
                            label= "Full Name"
                            icon= "person"
                            placeholder = "Ahsan Akbar"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('fullName')}
                            onBlur = {handleBlur('fullName')}
                            value = {values.fullName}
                        />

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
                            label= "Date of Birth"
                            icon= "calendar"
                            placeholder = "YYYY - MM - DD"
                            placeholderTextColor = {darkLight}
                            onChangeText = {handleChange('dateOfBirth')}
                            onBlur = {handleBlur('dateOfBirth')}
                            value = {dob ? dob.toDateString() : ''}
                            isDate = {true}
                            editable = {false}
                            showDatePicker={showDatePicker}
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

                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText onPress={()=>sendCred()}>Signup</ButtonText>
                        </StyledButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Already have an account?</ExtraText>
                            <TextLink onPress={()=>navigation.navigate("Login")}>
                                <TextLinkContent> Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}

                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </>
    )
}

const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, isDate, showDatePicker, ...props}) => {
    return(
        <View>
             <LeftIcon>
                 <Octicons name={icon} size={30} colors = {brand}/>
             </LeftIcon>
             <StyledInputLabel>{label}</StyledInputLabel>
             {!isDate && <StyledTextInput {...props}/> }
             {isDate && (
                 <TouchableOpacity onPress={showDatePicker}>
                     <StyledTextInput {...props}/>
                 </TouchableOpacity>
             )}

             {isPassword && (
                    <RightIcon onPress = {()=> setHidePassword(!hidePassword)}>
                        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                    </RightIcon>
             ) }
        </View>
    )
} ;
export default Signup;
