import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import ListGroup from 'react-bootstrap/ListGroup';


class Profile extends React.Component {
    render(){
        const {user} =this.props.auth0;
        return(
            <>
                <ListGroup>
                    <ListGroup.Item>{user.name}</ListGroup.Item>
                    <ListGroup.Item>{user.email}</ListGroup.Item>
                </ListGroup>

            </>
        )
    }
}

export default withAuth0(Profile);