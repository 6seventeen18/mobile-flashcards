import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, Animated, FlatList } from 'react-native'
import { purple, white, red } from '../utils/colors'
import { getDecksFromStorage } from '../utils/api'
import { receiveDecks } from '../actions'
import DeckCard from './DeckCard'

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    getDecksFromStorage()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})));
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={Object.values(this.props.decks).sort((a, b) => a.title > b.title)}
          renderItem={this.renderDeck}
          keyExtractor={(item, index) => index.toString()}/>
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
