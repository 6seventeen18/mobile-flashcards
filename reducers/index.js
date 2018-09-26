import { RECEIVE_DECKS, ADD_DECK } from '../actions'

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
    default :
      return state
  }
}

export default decks
