import React,{useEffect} from 'react'
import { Text, View } from 'react-native';
import {
    useFocusEffect,
    useNavigation,
  } from '@react-navigation/native';

const SplashPage = () => {
    // global.showLoading()
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('LoginRoute')
        }, 100);
    })
    return (
        <View style={{backgroundColor : 'green',flex : 1}}>
            <Text>LeaguePage</Text>
        </View>
    )
}

export default SplashPage