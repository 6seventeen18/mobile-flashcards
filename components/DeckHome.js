import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class DeckHome extends React.Component {
  render() {
    return (
      <View style={styles.deck}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>DeckHome</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    deck: {
        flexDirection: 'row',
        marginTop: 12,
        height: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
