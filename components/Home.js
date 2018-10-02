import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native'
import { getDecksFromStorage } from '../utils/api'
import { receiveDecks } from '../actions'
import DeckCard from './DeckCard'
import { styles } from '../utils/styles'

import { AsyncStorage } from 'react-native'

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    getDecksFromStorage()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})))
  }

  renderDeck = ({item}) => (
    <View>
      <TouchableOpacity onPress={() =>
        this.props.navigation.navigate('DeckHome', item)}>
        <DeckCard title={item.title} questions={item.questions} />
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={
          {
            borderWidth: 0,
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontSize: 28
          }}>Choose A Deck!</Text>
        <View style={styles.cardsContainer}>
          <FlatList
            data={Object.values(this.props.decks).sort((a, b) => a.title > b.title)}
            renderItem={this.renderDeck}
            keyExtractor={(item, index) => index.toString()}/>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Home)
