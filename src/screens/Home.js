import React, { Component } from 'react'
import { View, Text, FlatList, Animated } from 'react-native'

class Home extends Component {
  items = [0, 1, 2]
  colors = ['#2699fb', '#F0BF21', '#258077']

  state = {
    bgColorIndex: null,
    lastColorIndex: null,
    animatedValue: new Animated.Value(0)
  }

  _onScrollEnd = e => {
    let contentOffset = e.nativeEvent.contentOffset
    let viewSize = e.nativeEvent.layoutMeasurement

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor((contentOffset.x + 205) / viewSize.width)
    console.log('scrolled to page ', pageNum)

    lastIndex = this.state.bgColorIndex

    this.setState(
      {
        bgColorIndex: pageNum,
        lastColorIndex: lastIndex,
        animatedValue: new Animated.Value(0)
      },
      () => {
        Animated.timing(this.state.animatedValue, {
          toValue: 100,
          timing: 300
        }).start()
      }
    )
  }

  render () {
    const previousColor = this.state.lastColorIndex
      ? this.colors[this.state.lastColorIndex]
      : this.colors[0]

    const nextColor = this.state.bgColorIndex
      ? this.colors[this.state.bgColorIndex]
      : this.colors[0]

    const interpolatedColor = this.state.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [previousColor, nextColor]
    })

    const animatedStyle = {
      flex: 1,
      backgroundColor: interpolatedColor
    }

    return (
      <Animated.View style={[animatedStyle]}>
        <FlatList
          horizontal
          horizontal
          decelerationRate={0}
          snapToAlignment='center'
          snapToInterval={310}
          style={{ marginTop: 80 }}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          data={this.items}
          renderItem={({ item }) => (
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: '#fff',
                borderRadius: 10
              }}
            >
              <Text>{item}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ padding: 5 }} />}
          onMomentumScrollEnd={this._onScrollEnd}
        />
        /&gt;
      </Animated.View>
    )
  }
}

export default Home
