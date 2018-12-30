import React from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {Icon} from '../../icon'

import IndexFragment from './IndexFragment'
import ActivityFragment from './ActivityFragment'
import ShopcarFragment from './ShopcarFragment'
import MineFragment from './MineFragment'

const BottomTabs = createBottomTabNavigator(
  {
    MainTab: {
      screen: IndexFragment,
      path: '/',
      navigationOptions: {
        header: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'shouye' : 'shouye-blur'}
            size={26}
            color={tintColor}
          />
        ),
      },
    },
    ActivityTab: {
      screen: ActivityFragment,
      path: '/activity',
      navigationOptions: {
        tabBarLabel: 'activity',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'shoucang' : 'shoucang-blur'}
            size={26}
            color={tintColor}
          />
        ),
      },
    },
    ShopcarTab: {
      screen: ShopcarFragment,
      path: '/shopcar',
      navigationOptions: {
        tabBarLabel: 'shopcar',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'caigou' : 'caigou-blur'}
            size={26}
            color={tintColor}
          />
        ),
      },
    },
    MineTab: {
      screen: MineFragment,
      path: '/mine',
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'yonghu' : 'yonghu-blur'}
            size={26}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default BottomTabs