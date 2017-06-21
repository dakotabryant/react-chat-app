/* eslint-disable */
import {
  FETCH_RESTAURANT_REQUEST
} from '../actions';

const initialState = {
    error: null,
    usersConnected: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_REQUEST:
      return {
        ...state,
        currentRecipes: {...state.currentRecipes},
        listingsShowing: true
      }
    default:
      return state;
  }
}

export default reducer;
