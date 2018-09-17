import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, Animated, FlatList } from 'react-native'
import { purple, white, red } from '../utils/colors'
import { getDecksFromStorage } from '../utils/api'
import { receiveDecks } from '../actions'

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    getDecksFromStorage()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})));
  }

  renderDeck = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() =>
        this.props.navigation.navigate('DeckHome', item)}>

        <View style={styles.deck}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>{item.title}</Text>
            <Text style={{fontSize: 16, color: '#b7bdc1'}}>
                {item.questions && item.questions.length} cards
            </Text>
          </View>
        </View>

      </TouchableOpacity>
    </View>
  )

  render() {
    console.log("Home render this.props.decks: ", this.props.decks)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={Object.values(this.props.decks).sort((a, b) => a.title > b.title)}
          renderItem={this.renderDeck}
          keyExtractor={(item, index) => index}/>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  }
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
    padding: 14,
    borderRadius: 5,
    height: 65,
    borderColor: '#000',
    width: 320,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps)(Home);
