// In App.js in a new project


import { createStackNavigator, createAppContainer } from "react-navigation";
import {Home} from '../Screen/index'


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

export default createAppContainer(AppNavigator);