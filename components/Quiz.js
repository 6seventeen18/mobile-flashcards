import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { styles } from '../utils/styles'
import { Ionicons } from '@expo/vector-icons'
import { lightGreen, lightRed } from '../utils/colors'

export default class Quiz extends React.Component {
  state = {
    showQuestion: true,
    questionIndex: 0,
    correctAnswers: 0,
  }

  restartQuiz = () => {
    this.setState({
      showQuestion: true,
      questionIndex: 0,
      correctAnswers: 0
    })
  }

  showAnswer = () => {
  	this.setState({
      showQuestion: false
    })
  }

  answeredCorrectly = (correct) => {
    let answerTotal = this.state.correctAnswers
    if (correct) {
      answerTotal += 1
    }

    this.setState({
      questionIndex: this.state.questionIndex + 1,
      correctAnswers: answerTotal,
      showQuestion: true,
    })
  }

  showHeader = () => {
    const { questionIndex, correctAnswers } = this.state
    const { questions } = this.props.navigation.state.params
    const questionNumber = questionIndex + 1 > questions.length
      ? questionIndex
      : questionIndex + 1

    return (
      <View style={styles.cardsContainer}>
        <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0, borderWidth: 0, padding: 5, margin: 5, fontSize: 18, color: '#666666'}}>
          Question { questionNumber } of { questions.length }
        </Text>

        <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0, borderWidth: 0, padding: 5, margin: 5, fontSize: 18, color: '#666666', textAlign: 'right'}}>
          Score: { correctAnswers }/{ questions.length }
        </Text>
      </View>
    )
  }

  showCard = () => {
    const { showQuestion } = this.state

    if (showQuestion) {
      return this.questionCard()
    } else {
      return this.answerCard()
    }
  }

  questionCard = () => {
    const { questionIndex } = this.state
    const { questions } = this.props.navigation.state.params

    return (
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={{fontSize: 24}}>{questions[questionIndex].question}</Text>

          <TouchableOpacity onPress={() => this.showAnswer()}>
            <Text style={{fontSize: 16, color: '#666666', marginTop: 30}}>show answer</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  answerCard = () => {
    const { questionIndex } = this.state
    const { questions } = this.props.navigation.state.params

    return (
        /** These are the cardsContainer styles, but they do not load correctly
            for this View when referencing the imported styles */
        <View style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
          flexDirection: 'row',
          alignContent: 'flex-start',
          alignSelf: 'flex-start',
          marginBottom: 5,
          marginTop: 15
        }}>
          <View style={styles.card}>
            <Text style={{fontSize: 24}}>{questions[questionIndex].answer}</Text>

            <View style={{borderWidth: 0, width: '100%', marginTop: 50, flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity onPress={() => this.answeredCorrectly(false)} >
                <Ionicons name='ios-thumbs-down' size={50} color={lightRed} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.answeredCorrectly(true)}  >
                <Ionicons name='ios-thumbs-up' size={50} color={lightGreen} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
  }

  showCompletedMessage = () => {
    return (
      <View>
        <Text style={{fontSize: 30}}>Your quiz is complete!</Text>

        <TouchableOpacity
          onPress={this.restartQuiz}
          style={styles.button}>
          <Text style={styles.submitText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const { questionIndex } = this.state
    const { questions } = this.props.navigation.state.params
    const quizComplete = questionIndex === questions.length

    return (
      <View style={styles.container}>
        { this.showHeader() }

        { quizComplete
          ? this.showCompletedMessage()
          : this.showCard()
        }
      </View>
    )
  }
}
