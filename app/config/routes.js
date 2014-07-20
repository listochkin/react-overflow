/** @jsx React.DOM */
var Route = require('react-nested-router').Route;

module.exports = (
  <Route location="history" handler={require('../components/app')}>
    <Route name="index" path="/" handler={require('../components/index')} />
    <Route name="users" path="/users" handler={require('../components/users')}>
      <Route name="user" path="/users/:id" handler={require('../components/user')} />
    </Route>
  </Route>
);

