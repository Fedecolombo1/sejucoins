import React from "react";
import {
  BrowserRouter as Router,
  Routes as Routess,
  Route
} from "react-router-dom";
import Home from './screens/Home'
import App from './App'

export default function Routes() {
  return (
    <Router>
        
        <Routess>
            <Route path="/" element={<App />} />
        </Routess>

    </Router>
  );
}