import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import DeckCard from './DeckCard'

class DeckHome extends React.Component {
  render() {
    const { title } = this.props.navigation.state.params
    const questions = this.props.decks[title] && this.props.decks[title].questions

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <DeckCard title={title} questions={questions} />

        <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('NewQuestion', {
                    title,
                    questions,
                });
            }}
            style={styles.addCard}>
            <Text style={styles.addCardTitle}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('Quiz', {
                    title,
                    questions,
                });
            }}
            style={styles.startQuiz}>
            <Text style={styles.startQuizTitle}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({ })

function mapStateToProps(state) {
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(DeckHome)
