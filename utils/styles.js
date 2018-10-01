import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-start',
    padding: 10,
    borderColor: '#666666',
  },
  cardsContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 15,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 14,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
// Deck Home
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
