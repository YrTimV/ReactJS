import './UserRegistration.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { registerUser } from 'actions/users';

class UserRegistration extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = this.resetState(this.state);
  }

  resetState() {
    return {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      age: 0,
    }
  }

  handlePropertyChange = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  
  handleRegisterClick = (event) => {
    const invalidProperty = Object.keys(this.state).find((key) => !this.state[key]);

    if (invalidProperty) {
      console.error(`Register form field '${invalidProperty}' is not defined.`);

      return;
    }

    this.props.register(this.state);
    
    this.setState(this.resetState());

    event.preventDefault();
  }

  render() {
    const { username, password, email, firstName, lastName, age } = this.state;

    return (
      <div className="userRegistration">
        <form method="post">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" onChange={this.handlePropertyChange('username')} value={username} />
          <br/><br/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={this.handlePropertyChange('password')} value={password} />
          <br/><br/>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={this.handlePropertyChange('email')} value={email} />
          <br/><br/>
          <label htmlFor="firstName">First name:</label>
          <input type="text" name="firstName" id="firstName" onChange={this.handlePropertyChange('firstName')} value={firstName} />
          <br/><br/>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" name="lastName" id="lastName" onChange={this.handlePropertyChange('lastName')} value={lastName} />
          <br/><br/>
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age" onChange={this.handlePropertyChange('age')} value={age} />
          <br/><br/>
          <Button color="primary" onClick={this.handleRegisterClick}>Register</Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    userInfo: {
      ...state.users,
    },
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    register: (userInfo) => registerUser(dispatch, userInfo),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
