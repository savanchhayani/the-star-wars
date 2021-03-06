import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

class Login extends PureComponent {

  onLoginPressed= () => {
    const { username, password } = this.props;
    this.props.onLoginPressed({ username, password });
  }

  render() {
    const {
      username,
      password,
      isFetching,
    } = this.props;

    return (
      <form ref='form' className="login-container" onSubmit={this.onLoginPressed}>
          <input
            type='text'
            className='input-component'
            placeholder='Enter username'
            value={username}
            name='username'
            onChange={this.props.updateInputs}
            required
          />

          <input
            type='password'
            className='input-component'
            placeholder='*****'
            value={password}
            name='password'
            onChange={this.props.updateInputs}
            required
          />

          {
            isFetching
              ? <Spinner animation="border" />
              : <Button
                  type='submit'
                  variant="outline-light"
                  onClick={this.onLoginPressed}
                >
                  Login
                </Button>
          }
      </form>
    )
  }
}

export default withRouter(Login);
