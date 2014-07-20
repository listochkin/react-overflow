/** @jsx React.DOM */

var React = require('react');
var Link = require('react-nested-router').Link;

var data = require('../../data.js');

var User = module.exports = React.createClass({
  getInitialState: function () {
    return {
      user: data.users.filter(function (user) {
        return user.id == this.props.params.id;
      }.bind(this))[0]
    };
  },
  render: function() {
    return (
      <div>
        <img src={'http://avatars.io/twitter/' + this.state.user.twitter}/>
        <h3>{this.state.user.name}</h3>
      </div>
    );
  }
});
