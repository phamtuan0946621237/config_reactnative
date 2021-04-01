import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatchPage from '../container/MatchPage'
import DocumentPage from '../container/Document'

import {ServiceStackRoute,DocumentStackRoute,HomeStackParamList} from './NameRoute'
import ServiceScreen from '../container/Service'
import DocumentScreen from '../container/Document'
import ServiceStack from './MainRoute/ServiceRoute'
import DocumentStack from './MainRoute/DocumentRoute'

const Tab = createBottomTabNavigator<HomeStackParamList>();

export default function HomeBottomTabNavigator() {

    return (
      <>
        <Tab.Navigator
          initialRouteName={ServiceStackRoute}
          tabBarOptions={{
          }}>
          <Tab.Screen
            name={ServiceStackRoute}
            component={ServiceStack}
            options={{
              tabBarLabel: 'Service',
              title : 'Dịch vụ'
            }}
          />
          <Tab.Screen
            name={DocumentStackRoute}
            component={DocumentStack}
            options={{
                title : "Document",
              tabBarLabel: 'Document',
            }}
          />
        </Tab.Navigator>
        {/* <ApiStatusHandler /> */}
      </>
    );
  }