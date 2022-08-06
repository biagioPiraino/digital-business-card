import React, { Component } from 'react'
import fb from '../images/FB.svg'
import gh from '../images/GitHub.svg'
import tw from '../images/Tweet.svg'
import ig from '../images/IG.svg'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <img src={tw} className="tw-logo" alt="logo"/>
        <img src={ig} className="fb-logo" alt="logo"/>
        <img src={fb} className="ig-logo" alt="logo"/>
        <img src={gh} className="gh-logo" alt="logo"/>
      </footer>
    );
  }
}

export default Footer;
