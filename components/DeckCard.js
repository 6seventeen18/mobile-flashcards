import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { styles } from '../utils/styles'

export default class DeckCard extends React.Component {
  render() {
    const { title, questions } = this.props

    return (
      <View style={styles.card}>
        <Text style={{fontSize: 24}}>{title}</Text>
        <Text style={{fontSize: 18, color: '#666666'}}>
          {questions && questions.length} cards
        </Text>
      </View>
    )
  }
}

const styles1 = StyleSheet.create({
  deck: {
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
