import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {					
		return (
			<div className='App'>
        <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
        </Switch>
        </Router>
        </div>
      );
    }

export default App;