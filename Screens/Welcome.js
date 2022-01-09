import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ScrollView} from 'react-native';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../Components/Styles';


const Welcome = ({navigation}) => {
    return (
            <>
            <ScrollView>
                <SafeAreaView>
                <StatusBar style="dark"/>
                    <WelcomeContainer>
                    <PageTitle welcome = {true}>Welcome! Buddy</PageTitle>
                    
                    <StyledFormArea>
                    <Avatar resizeMode = "cover" source={require('../assets/reallogo.png')}/>
                    
                    <Line />
                        <StyledButton onPress={()=>{navigation.navigate("AddItems")}}>
                            <ButtonText>Add Item You Found</ButtonText>
                        </StyledButton>

                        <Line />
                        <StyledButton onPress={()=>{navigation.navigate("RegisteredItem")}}>
                            <ButtonText>My Registered Item</ButtonText>
                        </StyledButton>

                        <Line />
                        <StyledButton onPress={()=>{navigation.navigate("SearchItem")}}>
                            <ButtonText>Search Item You Lost</ButtonText>
                        </StyledButton>

                        <Line />
                        <StyledButton onPress={()=>{navigation.navigate("SearchItemByKeywords")}}>
                            <ButtonText>Search Item By Keywords</ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton onPress={()=>{navigation.navigate("Logout")}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>

                    </WelcomeContainer>
                    </SafeAreaView>
            </ScrollView>
            </>
    );
};
export default Welcome;
