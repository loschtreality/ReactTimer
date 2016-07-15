var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');


describe('Timer', () => {
  it('should exist', () =>{
    expect(Timer).toExist()
  })

  it('should start counting when state is set to started', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>)
    timer.handleStatusChange('started')

    setTimeout(() => {
      expect(timer.state.count).toBe(3)
      expect(timer.state.timerStatus).toBe('started')
      done()
    }, 3001)
  })

  it('should set state to stopped and count is zero when timer is cleared', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>)
    timer.handleStatusChange('started')

    setTimeout(() => {
      timer.handleStatusChange('stopped')
      expect(timer.state.timerStatus).toBe('stopped')
      expect(timer.state.count).toBe(0)
      done();
    },2001)
  })

  it('should pause count when timer is paused', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>)
    timer.handleStatusChange('started')

    setTimeout(() => {
      timer.handleStatusChange('paused')
      expect(timer.state.timerStatus).toBe('paused')
      expect(timer.state.count).toBe(4)
      done();
    },4001)
  })

})
