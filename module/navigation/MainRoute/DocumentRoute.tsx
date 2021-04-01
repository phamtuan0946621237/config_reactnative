import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
import React from 'react'
import MatchPage from '../../container/MatchPage'
import SplashPage from '../../container/Splash'
import DocumentPage from '../../container/Document'
// import LoginPage from '../container/Login'

import {Platform} from 'react-native'
// import TabbarNavigation from './tabbarNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import { MatchRoute, DocumentRoute } from '../NameRoute';


export const documentRoute = 'DocumentRoute';

type StackParamList = {
  [documentRoute]: undefined;
  [MatchRoute]: undefined;

};

const Stack = createStackNavigator<StackParamList>();

export default function DocumentRouteNavigation() {
  return (
    <Stack.Navigator 
    screenOptions={ScreenOptions}
    initialRouteName={documentRoute}
    headerMode="screen"
    >
      <Stack.Screen
        key={DocumentRoute}
        name={DocumentRoute}
        component={DocumentPage} />
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
  