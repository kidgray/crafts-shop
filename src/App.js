import React from 'react';
import './App.css';

/* Import Route */
import { Switch, Route } from 'react-router-dom';

/* Import HomePage */
import { HomePage } from './pages/homepage/homepage.component';

/* Import ShopPage */
import { ShopPage } from './pages/shop/shop.component';

/* Import Header */
import { Header } from './components/header/header.component';

function App() {
  return (
    <div>

      {/* By placing the Header Component outside of the Switch/Route
      Component tree, the site's Header will always be rendered no matter
      which specific page is rendered by React. */}
      <Header />

      {/* Switch component from react-router-dom package ensures
      that as soon as a route inside of it finds a matching path,
      we do not render anything but that route. */}
      <Switch>
        {/* // Use react-router-dom's Route Component
        // to display pages */}

        {/* Home Page */}
        <Route exact={true} path='/' component={HomePage} />

        {/* Shop Page */}
        <Route exact={true} path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
