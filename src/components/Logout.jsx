import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap'

class Logout extends Component {
  render() {
    return (
      <Button
          className='btn-logout'
          variant='outline-light'
          onClick={this.props.logout}
        >
          Logout
      </Button>
    )
  }
}

export default withRouter(Logout);
