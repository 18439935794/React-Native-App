import {
  Dimensions,
  Platform,
  PixelRatio,
  StyleSheet,
} from 'react-native';


global.SCREEN = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    navBarHeight: 64,
    navBarPaddingTop: 20,
    onePix: 1 / PixelRatio.get(),
};

global.STYLES = StyleSheet.create({
  center: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
  },
  defaultText: {
	textAlign: 'center',
	fontSize: 20,
  },
});