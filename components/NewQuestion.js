import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { createQuestion } from '../utils/api'
import { addQuestion } from '../actions/'

class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  addQuestion = () => {
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }

    const { title, questions } = this.props.navigation.state.params
    const deckId = title
    const { dispatch, navigation } = this.props
    const params = { deckId, title, questions, card }

    createQuestion(deckId, card)
      .then(dispatch(addQuestion(params)))
      .then(
        navigation.navigate(
          'DeckHome', { title: title, questions: []}, Keyboard.dismiss()
        )
      )
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={{fontSize: 24}}>Question:</Text>

        <TextInput
          value={this.state.question}
          style={style.textInput}
          onChangeText={question => this.setState({ question })} />

          <Text style={{fontSize: 24}}>Answer:</Text>

          <TextInput
            value={this.state.answer}
            style={style.textInput}
            onChangeText={answer => this.setState({ answer })} />

        <TouchableOpacity
          onPress={this.addQuestion}
          style={style.touchableOpacity}>
          <Text style={style.submitText}>Add Question</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
      justifyContent: 'flex-start',
    },
    textInput: {
      width: 300,
      padding: 10,
      borderWidth: 1,
      borderColor: '#000',
      backgroundColor: '#fff',
      margin: 10,
    },
    touchableOpacity: {
      backgroundColor: 'blue',
      padding: 10,
      height: 44,
      borderRadius: 5
    },
    submitText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
    },
})

function mapStateToProps(state) {
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(NewQuestion)
