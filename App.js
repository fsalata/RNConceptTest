import { createStackNavigator } from 'react-navigation'
import Home from './src/screens/Home'

console.disableYellowBox = true

export default createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    // see next line
    headerMode: 'none'
  }
)
