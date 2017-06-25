/* eslint-disable */
import {
  LOAD_ROOM,
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} from '../actions';

const initialState = {
    error: null,
    usersConnected: false,
    currentRoom: 'Home',
    userList: {},
    roomsList: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROOM:
      return {
        ...state,
        usersConnected: true,
        currentRoom: action.room,
        userList: {...action.user}
      }
    case SEND_MESSAGE:
      return {
        ...state,
        usersConnected: true,
        currentRoom: action.room,
        userList: {...action.user}
      }
    case RECEIVE_MESSAGE:
      return {
        ...state,
        usersConnected: true,
        currentRoom: action.room,
        userList: {...action.user}
      }
    default:
      return state;
  }
}

export default reducer;
