import React,{memo, useEffect} from 'react';
import { Text, TouchableOpacity, View ,FlatList} from 'react-native';
// import { MacthRoute } from '../../navigation';
import { connect, useDispatch } from 'react-redux';
import ListMatchComponent from './component/ListMatchComponent'
import {matchAction} from '../../redux/action/match'
import {MainRoute, NameRoute} from '../../navigation'
import {
    useFocusEffect,
    useNavigation,
  } from '@react-navigation/native';
//   import {showLoading,dismissLoading} from '../../../App'
import {showLoading,dismissLoading} from '../../utils'
const DocumentPage = (props : any) => {
    //variable
    const { macthResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    // life cycle

    useEffect(() => {
        // setTimeout(() => {
            // showLoading()
            // setTimeout(() => {
            //     dismissLoading()
            // },300)
        // }, 100);
        
        
        // setTimeout(() => {
        //   dismissLoading()
        // },2000)
        // global.showLoading()
      },[])

    function onClick() {
        navigation.navigate(NameRoute.MatchRoute)
    }
    return (
        <View style={{flex : 1,flexDirection : 'row',justifyContent : 'center',alignItems : 'center'}}>
            <TouchableOpacity onPress={onClick}>
                <Text style={{color : 'red'}}>DocumentPage</Text>
            </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = (state: any) => {
    return {
        // macthResponse : state.match.matchResponse
    };
  };
  
  export default DocumentPage;