import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 3,
    borderColor: '#666666',
  },
  cardsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    // flexWrap: 'nowrap',
    alignContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#60D394',
    marginBottom: 5,
    marginTop: 15
  },
  card: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-start',
    backgroundColor: '#fff',
    margin: 10,
    padding: 14,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  }
})
