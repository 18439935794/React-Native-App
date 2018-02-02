import './src/common/Global'
import React from 'react';
import {
    AppRegistry,
} from 'react-native';
// import HomeTableView from './src/HomeTableView';
// import Button from './src/Button';
// import LayoutAlign from './src/Flex'
import router from './src/Navigation'

// 整体js模块的名称
AppRegistry.registerComponent('MyReactNativeApp', () => router);