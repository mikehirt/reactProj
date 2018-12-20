import React, { Component } from 'react';

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ProfilePicture from '../Picure/ProfilePicture'
const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    ...
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    ...
  </div>
)

class Homepage extends Component {
  render() {
    return (
        <>
<div>hellohome</div>

         <ProfilePicture></ProfilePicture>

</>
    );
  }
}

export default Homepage;