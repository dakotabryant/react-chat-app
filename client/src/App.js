/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import ChatWindow from './components/ChatWindow'
import './App.css';
import {connect} from 'react-redux';


export function App(props) {

  return (
      <ChatWindow>

      </ChatWindow>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(App);
