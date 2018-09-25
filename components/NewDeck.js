import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { addDeck } from '../actions/';

class NewDeck extends Component {
  state = {
    title: ''
  }

  addDeck = () => {
    const { title } = this.state
    const deckKey = title.split(" ").join()
    const newDeck = {[deckKey]: {title: title, questions: []}};
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={{fontSize: 20}}>Enter the title of your new deck:</Text>

        <TextInput
          value={this.state.title}
          style={style.textInput}
          onChangeText={title => this.setState({title})} />

        <TouchableOpacity
            onPress={this.addDeck}
            style={style.touchableOpacity}>

            <Text style={style.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
      justifyContent: 'flex-start',
      backgroundColor: '#ed1044' /* red */
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

export default connect(mapStateToProps)(NewDeck);
