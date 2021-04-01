/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import { StyleSheet,StatusBar ,ActivityIndicator,View,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './module/redux/configStore';
import { NavigationContainer } from '@react-navigation/native';
import {MainRoute} from './module/navigation'
// import {global} from './module/utils'
import Navigation from './module/navigation/navigation'
import * as Sentry from '@sentry/react-native';
import ModalApp from 'react-native-modal';
import { LoginRoute } from './module/navigation/NameRoute';


console.disableYellowBox = true;
Sentry.init({
  dsn:
    'https://622a27801e3d4c7e8fbc94013cd384dc@o414679.ingest.sentry.io/5528662',
  enableNative: true,
  enableNativeCrashHandling: true,
});


export declare const global: {
  showLoading: () => void | null;
  dismissLoading: () => void | null;
  
};

const AppLoading = () => {
  const [isShowLoading, setIsShowLoading] = useState<boolean>(false);
  useEffect(() => {
    global.showLoading = () => {
      setIsShowLoading(true);
    };
    global.dismissLoading = () => {
      setIsShowLoading(false);
    };
  }, []);

  return (
    <ModalApp isVisible={isShowLoading}>
      <View style={styles.loading}>
        <ActivityIndicator size="large" 
        color= 'white'
        />
      </View>
    </ModalApp>
  );
};

const App = () => {

  
  return (
    <>
    <StatusBar
        translucent
        backgroundColor="transparent"
      />
    <Provider store={store}>
      <NavigationContainer
      fallback={<Text>Loading...</Text>}
      >
        <Navigation initialRouteName={LoginRoute}/>
      </NavigationContainer>
      </Provider>
      <AppLoading />
      </>
  );
};


export default App;


const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  // alert: {
  //   width: '80%',
  //   minHeight: '25%',
  //   maxHeight: '40%',
  //   margin: 'auto',
  //   borderRadius: AppFontSize.fontSize(12),
  //   backgroundColor: 'white',
  // },
  // titleAlert: {
  //   textAlign: 'center',
  //   marginTop: AppFontSize.fontSize(10),
  //   fontWeight: 'bold',
  //   fontSize: AppFontSize.fontSize(18),
  //   fontFamily: AppFont.bold,
  //   color: AppColors.grey1EerieBlack,
  // },
  // messAlert: {
  //   textAlign: 'center',
  //   marginTop: AppFontSize.fontSize(10),
  //   fontSize: AppFontSize.fontSize(16),
  //   marginLeft: AppFontSize.fontSize(10),
  //   marginRight: AppFontSize.fontSize(10),
  //   fontFamily: AppFont.regular,
  //   color: AppColors.grey1EerieBlack,
  // },
  // horizontal: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   padding: 10,
  // },
});
