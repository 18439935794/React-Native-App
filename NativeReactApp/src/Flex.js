import React from 'react';
import {
  StyleSheet,
  AppRegistry,
  FlatList,
  Image,
  Text,
  ScrollView,
  View,
} from 'react-native';

export default class LayoutJustify extends React.Component {
  static navigationOptions = {
	title: 'Justify Content',
  };
  
  render() {
	return (
	  <View style={{paddingTop: 5,}}>
	{this.layoutRow('flex-start')}
	{this.layoutRow('center')}
	{this.layoutRow('flex-end')}
	{this.layoutRow('space-between')}
	{this.layoutRow('space-around')}
  </View>
  );
  }
  
  layoutRow = (justify) => {
  return (
<View style={{
  height: 120,
  flexDirection: 'row',
  justifyContent: justify,
}}>
<View style={{height: 50, width: 50, backgroundColor: 'skyblue',}}/>
<View style={{height: 50, width: 50, backgroundColor: 'powderblue',}}/>
<View style={{height: 50, width: 50, backgroundColor: 'steelblue',}}/>
<View style={{height: 50, width: 50, backgroundColor: 'paleturquoise',}}/>
</View>
)
}
}



export class LayoutComplex extends React.Component {
  static navigationOptions = {
	title: 'Page Layout',
  };
  
  render(){
	let topBtns = [];
	for(let i=0 ; i<8 ; i++){
	  topBtns.push(<View key={i} style={{width:60, height:60, margin: 15, backgroundColor: 'white'}}/>)
	};
	let middleIcons = [];
	for(let i=0 ; i<18 ; i++){
	  middleIcons.push(<View key={i} style={{width:60, height:60, margin: 15, backgroundColor: 'white'}}/>)
	};
	return (
	  <View style={{
	  flex: 1,
		flexDirection: 'column',
		backgroundColor: 'grey'
	}}>
  <View style={{flex: 1, flexDirection:'row', backgroundColor: 'powderblue'}}>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flex:1, flexDirection:'row' }}>
	{topBtns}
  </ScrollView>
	<View style={{ width: 80, backgroundColor:'grey'}}/>
	</View>
	<View style={{flex: 5, flexDirection: 'row', backgroundColor: 'skyblue'}} >
  <View style={{ width: 70, backgroundColor: 'white'}}/>
	<View style={{ flex:1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'pink'}}>
	{middleIcons}
  <View style={{width: 80, height:80, position: 'absolute', right: 0, bottom: 0, backgroundColor: 'red'}} />
	</View>
	</View>
	<View style={{flex: 2, flexDirection: 'row', backgroundColor: 'steelblue'}} >
  <View style={{ flex:1 }}/>
	<View style={{ flex:8, marginTop:"10%", marginBottom:"10%", justifyContent:'center', backgroundColor: 'blue'}}>
  <View style={{ width: 80, height:30 , alignSelf:'center', backgroundColor: 'lightgreen'}}/>
	</View>
	<View style={{ flex:1 }}/>
	</View>
	</View>
  );
  }
  
  
}