import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import DeckCard from './DeckCard'

class DeckHome extends React.Component {
  render() {
    const { title } = this.props.navigation.state.params
    const questions = this.props.decks[title] && this.props.decks[title].questions

    return (
      <View style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
        <View>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate('DeckHome', item)}>
            <DeckCard title={title} questions={questions} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Add New Question', {
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
      justifyContent: 'center',
      backgroundColor: '#ed1044'
    },
    textInput: {
      width: 300,
      padding: 10,
      borderWidth: 1,
      borderColor: '#000',
      backgroundColor: '#fff',
      margin: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      height: 44,
      borderRadius: 5,
      margin: 10
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

export default connect(mapStateToProps)(DeckHome)
