import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import '../Layout/Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="layoutStyle">
       <AboutMe/>
      </div>
    )
  }
}

export default Layout;