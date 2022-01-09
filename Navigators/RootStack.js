import React from 'react';

import { colors } from '../Components/Styles';
const {primary, tertiary} = colors;
// react navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './../Screens/Login';
import Signup from './../Screens/Signup';
import Welcome from './../Screens/Welcome';
import AddItems from './../Screens/AddItems';
import EditYourRegisteredItem from './../Screens/EditYourRegisteredItem';
import SearchItem from './../Screens/SearchItem';
import SearchItemByKeywords from './../Screens/SearchItemByKeywords';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: 'transparent'
            },
            headerTintColor: tertiary,
            headerTransparent: true,
            headerTitle: '',
        }}
        initialRouteName="AddItem"
        >
        <Stack.Screen name="EditYourRegisteredItem" component={EditYourRegisteredItem} options={{headerShown: false}} />
        <Stack.Screen name="SearchItem" component={SearchItem} options={{headerShown: false}}  />
        <Stack.Screen name="SearchItemByKeywords" component={SearchItemByKeywords} options={{headerShown: false}}  />
        <Stack.Screen name="AddItems" component={AddItems} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}  />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default RootStack;