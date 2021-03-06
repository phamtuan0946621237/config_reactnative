import React, { memo } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';


interface ListMatchComponent {
  items :  Array<ListMatchesItem>,
  nameLeague : string
}

interface ListMatchesItem {
  away : InfoTeam,
  home : InfoTeam,
  id : number,
  leagueId : number,
  status : StatusListMatchesItem
}
interface InfoTeam {
  id : number,
  name : string,
  score : number
}
interface StatusListMatchesItem {
  cancelled : boolean,
  finished : boolean,
  startDateStr : string,
  startTimeStr : string,
  started : boolean,
  whoLostOnAggregated : string,
  scoreStr : string,
  reason : {long : string,short : string}
}

const ListMatchComponent = (props: ListMatchComponent) => {

  function _buildMatchItem(nameHome : string,iconHome : number,result : string,awayNameClub : string,iconAway : number) {
    return (
      <View style={styles.itemMatch}>
        {/* <View> */}
          <View style={[styles.infoTeam,{justifyContent : "flex-end"}]}>
          <Text style={styles.infoHomeClub}>{nameHome}</Text>
            <Image style={{ width: 16, height: 16 }} source={{ uri: "https://www.fotmob.com/images/team/" + iconHome  }} />
          </View>
        {/* </View> */}

        <View style={styles.resultMatch}>
          <Text>{result}</Text>
          {/* <Text>{}</Text> */}
        </View>

        <View style={styles.infoTeam}>
        <Image style={{ width: 16, height: 16 }} source={{ uri: "https://www.fotmob.com/images/team/" + iconAway }} />
        <Text style={styles.infoAwayClub}>{awayNameClub}</Text>
          
        </View>
      </View>
    )
  }
  return (

    <View>
      <View style={styles.section}>
      <Text>{props.nameLeague}</Text>
      </View>
      {props.items.map((item,index) => {
        return (
          <View key={index}>
          {_buildMatchItem(item.home.name,item.home.id,item.status.started === true ? item.status.scoreStr : item.status.startTimeStr,item.away.name,item.away.id)}
          </View>
        )
      })}
    </View>
  );
};

ListMatchComponent.defaultProps = {

};

export default memo(ListMatchComponent);
const styles = StyleSheet.create({
  infoTeam: {
    flexDirection: 'row',
    flex : 3,
    marginHorizontal : 16,
    alignItems : 'center'
  },
  itemMatch : {
    flexDirection : 'row',
    padding : 16,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    borderColor : '#F9F9FA',
    backgroundColor : 'white'
  },
  resultMatch : {
    flex : 1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  },
  infoHomeClub : {
    marginHorizontal : 16,
    textAlign : 'right'
  },
  infoAwayClub : {
    marginHorizontal : 16,
    textAlign : 'left'
  },
  section : {
    padding : 8
  }
});
