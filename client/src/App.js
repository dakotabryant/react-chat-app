/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';


export function App(props) {

  return (
    <Router>
      <div>
      </div>
    </Router>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  listingsShowing: state.listingsShowing
})

export default connect(mapStateToProps)(App);
