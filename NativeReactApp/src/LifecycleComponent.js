import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class LifecycleComponent extends React.Component {
  static navigationOptions = {
	title: 'Life Cycle',
  };
  
  constructor(props) {
	super(props);
	console.log('----------constructor----------');
	
	this.state = {
	  count: 0,
	  reload: false,
	};
	
  }
  
  componentWillMount() {
	console.log('----------componentWillMount----------')
  }
  
  componentDidMount() {
	console.log('----------componentDidMount----------')
  }
  
  shouldComponentUpdate() {
	console.log('----------shouldComponentUpdate----------')
	return true;
  }
  
  componentWillUpdate() {
	console.log('----------componentWillUpdate----------')
  }
  
  componentDidUpdate() {
	console.log('----------componentDidUpdate----------')
  }
  
  render() {
	console.log('----------render----------')
	var views = this.state.reload ? this._updateViews() : null;
 
	return (
	  <View style={{marginTop: 50}}>
		
		<Text style={[STYLES.defaultText, {color: 'gray'}]}>----------constructor----------</Text>
		<Text style={[STYLES.defaultText, {color: 'gray'}]}>----------componentWillMount----------</Text>
		<Text style={[STYLES.defaultText, {color: 'red'}]}>----------render----------</Text>
		<Text style={[STYLES.defaultText, {color: 'gray'}]}>----------componentDidMount----------</Text>
	 
		<Text
		  style={[STYLES.defaultText, {marginTop: 20, marginBottom: 20 }]}
		  onPress={() => {
			this.setState({
			  reload: !this.state.reload,
			});
		  }}
		>
		  UPDATE</Text>
		{views}
	  </View>
	)
  }
  
  _updateViews = () => {
    return <View>
	  <Text style={[STYLES.defaultText, {color: 'skyblue'}]}>------shouldComponentUpdate------</Text>
	  <Text style={[STYLES.defaultText, {color: 'skyblue'}]}>----------componentWillUpdate----------</Text>
	  <Text style={[STYLES.defaultText, {color: 'red'}]}>----------render----------</Text>
	  <Text style={[STYLES.defaultText, {color: 'skyblue'}]}>----------componentDidUpdate----------</Text>

	</View>
  }
}

