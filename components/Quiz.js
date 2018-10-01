import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { styles } from '../utils/styles'

export default class Quiz extends React.Component {
  state = {
    showQuestion: true,
    questionIndex: 0,
    correctAnswers: 0,
  }

  render () {
    const { showQuestion, questionIndex, correctAnswers } = this.state
    const { questions } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0, borderWidth: 0, padding: 5, margin: 5, fontSize: 18, color: '#666666'}}>
            Question {questionIndex + 1} of {questions.length}
          </Text>

          <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0, borderWidth: 0, padding: 5, margin: 5, fontSize: 18, color: '#666666', textAlign: 'right'}}>
            Score: {correctAnswers}/{questions.length}
          </Text>
        </View>

        {
          showQuestion
            ? (
              <View style={styles.cardsContainer}>
                <View style={styles.card}>
                  <Text style={{fontSize: 24}}>{questions[questionIndex].question}</Text>
                </View>
              </View>)
            : (
              <View style={styles.cardContainer}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 24}}>{questions[questionIndex].answer}</Text>
                </View>
              </View>)
        }
      </View>
    )
  }
}
