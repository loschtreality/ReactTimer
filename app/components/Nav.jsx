var React = require('react');
var {Router, Route, Link, IndexLink} = require('react-router')


var Nav = React.createClass({

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li> <IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
            <li> <Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <div className="menu">
            <li className="menu-text">Created by <a href="https://github.com/loschtreality" target="_blank">Michael Loschaivo</a></li>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Nav;
