import React from "react";
import {
  BrowserRouter as Router,
  Routes as Routess,
  Route
} from "react-router-dom";
import Registrar from './screens/Registrar'
import App from './App'

export default function Routes() {
  return (
    <Router>
        
        <Routess>
            <Route path="/" element={<App />} />
            <Route path="/registrar" element={<Registrar />} />
        </Routess>

    </Router>
  );
}