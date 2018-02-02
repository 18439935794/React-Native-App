import { Dimensions, Platform, PixelRatio } from 'react-native';


global.SCREEN = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    navBarHeight: 64,
    navBarPaddingTop: 20,
    onePix: 1 / PixelRatio.get(),
}