import React from 'react';
import {
  View,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import LayoutJustify, {LayoutComplex} from './Flex';
import CustomButton from './CustomButton';
import HomeTableView from './HomeTableView';
import LifecycleComponent from './LifecycleComponent';

const router = StackNavigator({
  Home: {screen: HomeTableView},
  
  LayoutJustify: {screen: LayoutJustify},
  LayoutComplex: {screen: LayoutComplex},
  CustomButton: {screen: CustomButton},
  LifecycleComponent: {screen: LifecycleComponent},
});

export default router