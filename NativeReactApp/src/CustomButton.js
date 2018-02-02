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
	this.state = { countDown: 10 };
 
	// 每1000毫秒对showText状态做一次取反操作
	// setInterval(() => {
	//   this.setState(previousState => {
	//     // console.log(previousState.countDown);
	// 	if (previousState.countDown === 1) {
	// 	  return {countDown: 10}
	// 	};
	// 	return { countDown: --previousState.countDown };
	//   });
	// }, 1000);
	
  }
  
  handler = () => {
	this.refs.confirm_button.disable();

	this.timer = setTimeout(() => {
	  this.refs.confirm_button.enable();
	  alert(this.refs.confirm_button.props.title)
	}, 2000);
	
	
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
  	// flex: 5,
  },
});