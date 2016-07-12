var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return (
    <div>
      <div>
        <Nav></Nav>
          <div>
            <p>Main.jsx Rendered</p>
            {props.children}
          </div>
      </div>
    </div>
  );
}

module.exports = Main;
