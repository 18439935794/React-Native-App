import React from 'react';
import {
  View,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import LayoutJustify, {LayoutAlign} from './Flex';
import CustomButton from './CustomButton';
import HomeTableView from './HomeTableView';

const router = StackNavigator({
  Home: {screen: HomeTableView},
  
  LayoutAlign: {screen: LayoutAlign},
  LayoutJustify: {screen: LayoutJustify},
  CustomButton: {screen: CustomButton},
});

export default router