import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class IsLoadingAndError extends React.Component {

  componentDidMount() {
    if(this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;

        const config = {
          method: 'get',
          headers: {'Authorization': `Bearer ${jwt}`},
          baseURL: 'http://localhost:3001',
          url: '/test'
        }
        // this is an AJAX request
        axios(config)
          .then(results => console.log('came from my /auth-test route on the backend', results))
          .catch(err => console.error(err))
      })
    }
  }
  render() {
    return(



      this.props.auth0.isLoading ? 
        <div> Loading...</div>
        :
        this.props.auth0.error ?
          <div>Oops... {this.props.auth0.error.message}</div>
          :
          this.props.children
    );
  }
}

export default withAuth0(IsLoadingAndError);
