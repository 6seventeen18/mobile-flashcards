import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import DeckCard from './DeckCard'
import { styles } from '../utils/styles'

class DeckHome extends React.Component {
  render() {
    const { title } = this.props.navigation.state.params
    const questions = this.props.decks[title] && this.props.decks[title].questions

    return (
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <DeckCard title={title} questions={questions} />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('NewQuestion', {
                title,
                questions,
              })
            }}
            style={styles.button}>
            <Text style={styles.submitText}>Add New Question</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Quiz', {
                title,
                questions,
              })
            }}
            style={styles.button}>
            <Text style={styles.submitText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(DeckHome)
