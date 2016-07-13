var React = require('react');

var Controls = React.createClass({
  propTypes: {
    coundownStatus: React.PropTypes.string.isRequired
  },
  render: function() {
    var {coundownStatus} = this.props
    var renderStartStopButton = () => {
      if (coundownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      }
      else if (coundownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    }
    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }

});

module.exports = Controls;
