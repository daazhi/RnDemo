
import BottomTabs from './home/HomePage';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  home: {
    screen: BottomTabs,
    navigationOptions: {
      header: null
    }
  },
  page1: {screen: FirstPage},
  page2: {screen: SecondPage},
  page3: {screen: ThirdPage},
  page4: {screen: FourthPage}
},{
  initialRouteName: 'home',
  mode: 'card'
});

export default AppNavigator
