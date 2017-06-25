export const LOAD_ROOM = 'LOAD_ROOM'
export const loadRoom = (room, user) => ({type: LOAD_ROOM, room, user})
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const receiveMessage = (message) => ({type: RECEIVE_MESSAGE, message})
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessage = (message) => ({type:SEND_MESSAGE, message})

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
