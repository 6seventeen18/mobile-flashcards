import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import reducer from './reducers'
import { red, white, purple, black, green, gray } from './utils/colors'
import Home from './components/Home'
import NewDeck from './components/NewDeck'
import DeckHome from './components/DeckHome'

function StyledStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: green,
    style: {
      height: 56,
      backgroundColor: green,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Deck List'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'New Deck'
    }
  },
  DeckHome: {
    screen: DeckHome,
    navigationOptions: {
      title: 'Deck Home',
    },
  },
})

export default class App extends React.Component {
  render() {
    const store = createStore(reducer)
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StyledStatusBar
            backgroundColor="purple"
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
