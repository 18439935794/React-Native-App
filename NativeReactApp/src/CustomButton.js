import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Button from './Button';

export default class CustomButton extends React.Component {
  
  constructor(props) {
	super(props);
	this.state = { countDown: 3 };
		
  }
  
  handler = () => {
	this.refs.confirm_button.disable();
	
	// 每1000毫秒对showText状态做一次取反操作
	this.timer = setInterval(() => {
	  this.setState(previousState => {
		if (previousState.countDown === 1) {
		  alert(this.refs.confirm_button.props.title)
		  this.refs.confirm_button.enable();
		  clearInterval(this.timer);
		  return {countDown: 3}
		};
		return { countDown: --previousState.countDown };
	  });
	}, 1000);
	
  };
  
  render() {
	
	return (
	  <View style={styles.container}>
		<Text style={styles.text} >{this.state.countDown}</Text>
	 
		<Button ref="confirm_button" title="确定" onPress={this.handler}/>
		{/*<Button ref="cancel_button" title="取消" onPress={this.handler} />*/}
	  </View>
	);
  }
  
  componentWillUnmount() {
	this.timer && clearTimeout(this.timer);
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
  },
  text: {
	// backgroundColor:
	color: 'skyblue',
	marginBottom: 100,
	fontSize: 50,
  },
});