import React, { Component } from 'react'
import profilepic from '../images/profilepic.png'
import './Info.css'

class Info extends Component {
  render() {
    return (
      <div className='info'>
          <img src={profilepic} className="info--user-img" alt="img-profilepic"/>
          <h1 className="info--name">Cool Jenko</h1>
          <h3 className="info--role">Assembly Developer</h3>
          <small className="info--website">coolJenko.net</small>
          <div className="info--button-section">
            <button className="info--button" id='email'>Email</button>
            <button className="info--button" id='linkedin'>LinkedIn</button>
          </div>
      </div>
    );
  }
}

export default Info;
