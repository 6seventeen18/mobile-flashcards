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
    console.log("Quiz this.props.navigation.state.params.questions", this.props.navigation.state.params.questions)
    console.log("---------------------------")
    const { showQuestion, questionIndex, correctAnswers } = this.state
    const { questions } = this.props.navigation.state.params
    console.log("Quiz questions ", questions)
    return (
      <View>
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
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.card}>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 24}}>{questions[questionIndex].question}</Text>
                  </View>
                </View>
              </View>)
            : (
              <View style={styles.card}>
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
    paddingTop: 20,
  },
  card: {
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
