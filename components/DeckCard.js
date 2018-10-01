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
