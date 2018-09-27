import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

function decks (state = {}, action) {
  console.log("reducers/index.js state: ", state)
  console.log("---------------------------------")
  console.log("reducers/index.js action: ", action)
  console.log("---------------------------------")
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck,
      }
    case ADD_QUESTION :
      const { deckId, title, questions, card} = action.params
      const updatedQuestions = JSON.parse(JSON.stringify(questions)).concat([ card ])

      return {
        ...state,
        [deckId]: { ...state[title], questions: updatedQuestions },
      }
    default :
      return state
  }
}

export default decks
