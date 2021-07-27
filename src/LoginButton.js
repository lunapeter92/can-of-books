import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';


class LoginButton extends React.Component{
   

    render(){
        const { isAuthenticated, loginWithRedirect } = withAuth0();
        return !isAuthenticated &&(
            
                <>
                    <button onClick={loginWithRedirect}>Login</button>
                </>
           
        )
    }
}

export default withAuth0(LoginButton);