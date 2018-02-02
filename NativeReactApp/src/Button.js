import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Button extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = { 
      status: 1,
      disabled: false,
    };
	}

  enable = () => {
    this.setState({
      disabled: false,
    });
  };

  disable = () => {
    this.setState({
      disabled: true,
    });
  };

	render() {

		const { title, onPress } = this.props;

		return (
		  <TouchableHighlight 
      		style={[styles.button, this.state.disabled && styles.disabled]} 
      		onPress={onPress}
          disabled={this.state.disabled}
      	  >
	    	<Text style={{color: 'white'}}>{title}</Text>
	      </TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: 'gray',
  },
});
