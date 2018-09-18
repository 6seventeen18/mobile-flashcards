import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import reducer from './reducers'
import { red, white, purple, black, green } from './utils/colors'
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
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
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
      header: null,
      // headerStyle: {
      //   backgroundColor: red
      // },
      backgroundColor: purple,
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      headerStyle: {
        backgroundColor: green,
      },
      headerTintColor: black,
    }
  },
  DeckHome: {
    screen: DeckHome,
    navigationOptions: {
      headerStyle: {
        backgroundColor: purple,
      },
      headerTintColor: black,
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
