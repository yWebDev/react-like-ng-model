import React, { Component } from 'react';
import './App.css';

import ManagedForm from './component/ManagedForm';

class App extends Component {
  onFormSubmit(model) {
    console.log(model);
  }

  render() {
    return (
      <ManagedForm model={{ login: 'Yuri', password: 'pass333', message: 'My message' }}
                   onSubmit={this.onFormSubmit.bind(this)}>
        <div className="form-content">
          <div className="form-field">
            <label htmlFor="login">Login:</label><br/>
            <input type="text" name="login" id="login"/>
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label><br/>
            <input type="text" name="password" id="password"/>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label><br/>
            <textarea name="message" id="message" cols="30" rows="10">
            </textarea>
          </div>
          <input type="submit" value="Submit"/>
        </div>
      </ManagedForm>
    );
  }
}

export default App;
