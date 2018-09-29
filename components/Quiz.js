import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationActions } from 'react-navigation'

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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#666666'}}>
            Current Question: {questionIndex + 1}/{questions.length}
          </Text>

          <Text style={{fontSize: 18, color: '#666666'}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 3,
    borderColor: '#666666'
  },
  cardsContainer: {
    borderWidth: 5,
    borderColor: '#efefef',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    margin: 10,
    padding: 14,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  }
})
