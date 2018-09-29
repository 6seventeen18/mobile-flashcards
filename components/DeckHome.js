import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import DeckCard from './DeckCard'
import { styles } from '../utils/styles'

class DeckHome extends React.Component {
  render() {
    const { title } = this.props.navigation.state.params
    const questions = this.props.decks[title] && this.props.decks[title].questions

    return (
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <View>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('DeckHome', item)}>
              <DeckCard title={title} questions={questions} />
            </TouchableOpacity>
          </View>
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

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       paddingTop: 20,
//       justifyContent: 'center',
//       backgroundColor: '#ed1044'
//     },
//     textInput: {
//       width: 300,
//       padding: 10,
//       borderWidth: 1,
//       borderColor: '#000',
//       backgroundColor: '#fff',
//       margin: 10,
//     },
//     button: {
//       backgroundColor: 'blue',
//       padding: 10,
//       height: 44,
//       borderRadius: 5,
//       margin: 10
//     },
//     submitText: {
//       color: '#fff',
//       fontSize: 20,
//       textAlign: 'center',
//     },
// })

function mapStateToProps(state) {
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(DeckHome)
