/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/**
 * 启动命令:
 * react-native run-android
 *
 *
 * react-navigation相关设置:
 * https://reactnavigation.org/docs/zh-Hans/getting-started.html
 *
 * npm install --save react-navigation
 * yarn add react-native-gesture-handler
 * react-native link react-native-gesture-handler（Link 所有的原生依赖）
 *
 *
 *
 *
 * ant-design相关设置:
 * https://rn.mobile.ant.design/components/button-cn/
 * yarn add @ant-design/react-native
 * react-native link @ant-design/icons-react-native（链接字体图标）
 *
 */
