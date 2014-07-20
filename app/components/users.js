/** @jsx React.DOM */

var React = require('react');
var Link = require('react-nested-router').Link;

var data = require('../../data.js');

var Users = module.exports = React.createClass({
  getInitialState: function () {
    return {
      users: data.users || []
    };
  },
  userList: function () {
    return this.state.users.map(function (user) {
      return <li><Link to="user" id={user.id}>{user.name}</Link></li>;
    });
  },
  render: function() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.userList()}
        </ul>

        {this.props.activeRoute}
      </div>
    );
  }
});
