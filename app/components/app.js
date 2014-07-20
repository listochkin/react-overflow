/** @jsx React.DOM */

var React = require('react');
var Link = require('react-nested-router').Link;

var App = module.exports = React.createClass({

  render: function() {
    // for React extension
    if (window) {
      window.React = React;
    }

    return (
      <div className="container">
        <h1>App</h1>
        <ul>
          <li><Link to="index">Home</Link></li>
          <li><Link to="users">Users</Link></li>
        </ul>
        {this.props.activeRoute}
      </div>
    );
  }
});

