import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
import React from 'react'
import MatchPage from '../../container/MatchPage'
import SplashPage from '../../container/Splash'
import ServicePage from '../../container/Service'

// import SplashPage from '../../container/Splash'

// import LoginPage from '../container/Login'

import {Platform} from 'react-native'
// import TabbarNavigation from './tabbarNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import { RootStackParamList ,ServiceRoute,MatchRoute} from '../NameRoute';
// export const matchRoute = 'MatchRoute';
// export const splashRoute = 'SplashRoute';
// export const loginRoute = 'LoginRoute';
// export const mainRoute = 'MainRoute';

// type StackParamList = {
//   [matchRoute]: undefined;
//   [splashRoute]: undefined;
//   [loginRoute]: undefined;
//   [mainRoute]: undefined;
// };

// type AllScreenType =  "MatchRoute" | "SplashRoute" | "LoginRoute" | "MainRoute" | undefined
const Stack = createStackNavigator<RootStackParamList>();

export default function ServiceRouteNavigation() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={ServiceRoute}
    headerMode="screen"
    >
        <Stack.Screen
        key={ServiceRoute}
        name={ServiceRoute}
        component={ServicePage} />
      <Stack.Screen  key={MatchRoute} name={MatchRoute} component={MatchPage} options={{title : "Match",headerShown: true}}/>
    </Stack.Navigator>
  );
}

 

export const ScreenOptions: StackNavigationOptions = {
    headerTintColor: "black",
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      paddingHorizontal: 16
    },
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
  