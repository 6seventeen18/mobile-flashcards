import { RECEIVE_DECKS, ADD_DECK } from '../actions'

function decks (state = {}, action) {
  console.log("reducers/index.js state: ", state)
  console.log("---------------------------------")
  console.log("reducers/index.js action: ", action)
  console.log("---------------------------------")
  switch (action.type) {
    case RECEIVE_DECKS :
      console.log('reducers decks > RECEIVE_DECKS')
      console.log("---------------------------------")
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      console.log('reducers decks > ADD_DECK', ...state)
      console.log("---------------------------------")
      return {
        ...state,
        decks: state.decks.concat(action.deck),
      }
    default :
      console.log('reducers decks > default')
      console.log("---------------------------------")
      return state
  }
}

export default decks
