import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
import React from 'react'
import MatchScreen from '../container/MatchPage'
import SplashPage from '../container/Splash'
import LoginScreen from '../container/Authen/Login'

import {Platform} from 'react-native'
import TabbarNavigation from './tabbarNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import MainStack from './tabbarNavigation'
import {RootStackParamList,LoginRoute, MainRoute,MatchRoute} from './NameRoute'




type AllScreenType =  "MatchRoute" | "LoginRoute"  | undefined
const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation(
  {initialRouteName} : {initialRouteName: AllScreenType}
  ) {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={initialRouteName}
    headerMode="none"
    
    >
      <Stack.Screen
        key={MainRoute}
        name={MainRoute}
        component={MainStack}
        options={{title : "Main Stack"}}
      />
      <Stack.Screen
        key={LoginRoute}
        name={LoginRoute}
        component={LoginScreen}
        options={{title : "Login"}}
      />
      
      
    </Stack.Navigator>
  );
}

 

export const ScreenOptions: StackNavigationOptions = {
    // headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    headerTintColor: "black",
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      paddingHorizontal: 16
    },
    // headerBackground : 'white',
    headerLeftContainerStyle: {
      paddingHorizontal: Platform.OS == 'ios' ? 16 : 0,
    },
    headerRightContainerStyle: {
      paddingHorizontal: 16,
    },
    
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'transparent',
      elevation: 0,
    },
  };
  