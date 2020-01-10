import React from 'react';
import './App.css';

/* Import Route */
import { Switch, Route } from 'react-router-dom';

/* Import HomePage */
import { HomePage } from './pages/homepage/homepage.component';

const DollsPage = () => (
  <div>
    <h1>DOLLS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      {/* Switch component from react-router-dom package ensures
      that as soon as a route inside of it finds a matching path,
      we do not render anything but that route. */}
      <Switch>
        {/* // Use react-router-dom's Route Component
        // to display pages */}

        {/* Home Page */}
        <Route exact={true} path='/' component={HomePage} />

        {/* Dolls Page */}
        <Route exact={true} path='/dolls' component={DollsPage} />
      </Switch>
    </div>
  );
}

export default App;
