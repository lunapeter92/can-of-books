import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {withAuth0} from '@auth0/auth0-react';
import BestBooks from './BestBooks';
import Login from './Login';
import LogoutButton from './LogoutButton';
import Profile from './Profile';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/profile">
                  <Profile />
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>

        <Login />
        {this.props.auth0.isAuthenticated &&
                <>
                <Profile />
                <BestBooks />
                <LogoutButton />
                </>
              }  
        
      </>
    );
  }
}

export default withAuth0(App);
