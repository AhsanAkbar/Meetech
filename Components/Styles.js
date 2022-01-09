import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const colors = {
    primary : "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
} 

const {primary, secondary,tertiary, darkLight,brand,green,red} = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 40px;
    ${'' /* justify-content: center; */}
`;

export const PageLogo = styled.Image`
    width: 230px;
    height: 140px;
`;

export const Avatar = styled.Image`
    width: 200px;
    height: 100px;
    margin: auto;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%
`;

export const PageTitle = styled.Text`
    font-size: 27px;
    text-align: center;
    font-weight : bold;
    color: ${brand};
    padding: 3px;

    ${(props)=>props.welcome && `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 17px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
   
    ${(props)=>props.welcome && `
        margin-bottom: 5px;
        font-weight: normal;
    `}

`;

export const StyledFormArea = styled.View`
    width: 90%
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 10px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height:50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 8px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 4px;
    height: 50px;

    ${(props)=> props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px

    ${(props)=> props.google == true && `
        padding: 25px
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color = ${(props)=>(props.type == 'SUCCESS' ? green : red)};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;
