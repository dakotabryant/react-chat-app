import React from 'react';
import {connect} from 'react-redux';

class ChatWindow extends React.Component {
  render() {
    return(
      <div className="chat-window">
        Current Chat Room: <strong>{this.props.room}</strong>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  console.log(state.currentRoom);
  return {room: state.currentRoom}
}
export default connect(mapStateToProps)(ChatWindow);
