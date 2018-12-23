
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  page1: {screen: FirstPage},
  page2: {screen: SecondPage},
  page3: {screen: ThirdPage},
  page4: {screen: FourthPage}
},{
  initialRouteName: 'page4',
});

export default AppNavigator
