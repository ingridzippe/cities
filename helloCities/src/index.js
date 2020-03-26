import React from 'react';

import AddContent from './AddContent/AddContent';
import Contents from './Contents/Contents';
import Content from './Contents/Content';
import colors from './theme';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

const ContentsNav = createStackNavigator(
  {
    Contents: {screen: Contents},
    Content: {screen: Content},
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
    },
  },
);

const Tabs = createBottomTabNavigator({
  Contents: {screen: ContentsNav},
  AddContent: {screen: AddContent},
});

export default Tabs;
