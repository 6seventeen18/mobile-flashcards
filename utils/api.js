import { AsyncStorage } from 'react-native';

export const DECKS_KEY = 'mobile-flashcards:decks'

let data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function createDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(deck))
}

export function getDecksFromStorage() {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(results => {
      return results === null
        ? sampleData()
        : JSON.parse(results)
  })
}

export function sampleData() {
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data))

  return data
}
