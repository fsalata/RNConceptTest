import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class Home extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

export default Home
