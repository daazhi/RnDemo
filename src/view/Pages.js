
import HomePage from './HomePage';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  home: {screen: HomePage},
  page1: {screen: FirstPage},
  page2: {screen: SecondPage},
  page3: {screen: ThirdPage},
  page4: {screen: FourthPage}
},{
  initialRouteName: 'home',
});

export default AppNavigator
