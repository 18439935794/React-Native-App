import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class ZoomComponent extends React.Component {
  constructor(props) {
	super(props);
	
	this.state = {
	  size: {height: 50, width: 50},
	  disabled: false,
	};
  }
  
  
  render() {
	
	// 解构
	// var {name, ...others} = this.props;
	
	console.log(this.props)
	return (
	  <View>
		<Text
		  style={STYLES.defaultText}
		  onPress={() => {
		    var size = this.state.size;
		  this.setState({
			size: {height: size.height+10, width: size.width+10}
		  })
		}}>zoom in
		</Text>
		<Text
		  style={STYLES.defaultText}
		  onPress={() => {
			var size = this.state.size;
			this.setState({
			  size: {height: size.height-10, width: size.width-10}
			})
		  }}>zoom out
		</Text>
		<Image
		  style={this.state.size}
		  source={require('./resource/icon_react.png')}/>
		
	  </View>
	  
	);
  }
}


