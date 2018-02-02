import React from 'react';
import {
  StyleSheet,
  AppRegistry,
  FlatList,
  Image,
  Text,
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
        // flex: 1,
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

export class LayoutAlign extends React.Component {
  static navigationOptions = {
    title: 'Align Items',
  };
  
  render() {
    return (
      <View style={{paddingTop: 5,}}>
        {this.layoutRow('flex-start')}
        {this.layoutRow('center')}
        {this.layoutRow('flex-end')}
        {/*{this.layoutRow('stretch')}*/}
      </View>
    );
  }
  
  layoutRow = (align) => {
    return (
      <View style={{
        // flex: 1,
        height: 200,
        flexDirection: 'column',
        // backgroundColor: 'red',
        alignItems: align,
      }}>
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue',}}/>
        <View style={{height: 50, width: 50, backgroundColor: 'powderblue',}}/>
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue',}}/>
        <View style={{height: 50, width: 50, backgroundColor: 'paleturquoise',}}/>
      </View>
    )
  }
}