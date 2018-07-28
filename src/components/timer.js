import React, { Component, PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NAME } from '../constants';
import * as actions from '../actions';


class Timer extends  PureComponent{
  constructor(props) {
    super(props);
    this.init();
    this.getServerTime = this.getServerTime.bind(this);
  }
 init(){
   let date= this.getTimeString();
   this.state = {
     serverTime: '',
     time: date,
   };
 }
 getTimeString() {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
  }
  componentDidMount() {
    this.getServerTime();
    const _this = this;
    this.timer = setInterval(function(){
      var date = _this.getTimeString();
      _this.setState({
        time: date
      })
    },1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.serverTime){
      this.state.serverTime = nextProps.serverTime.data;
    }
  }

  getServerTime(event){
    event ? event.preventDefault() : '';
    this.props.actions.fetchTime('fetchDate',[]);
  }

  render() {
    return (
      <section className="formContainer">
       <div className="timerContainer">
       <article className="localTimeContainer">
          <div>{this.state.time}</div>
        </article>
        <article className="timerContainer">          
          <div className="flexContainer">
            <input className="btn btn-lg" type="button" name="getCurrentTime" value="Get Server Time" onClick={this.getServerTime} />
          </div>
          <div className="flexContainer">
            <div className="serverTime"> <h1>{ this.state.serverTime }</h1></div>
          </div>
        </article>
        </div>
      </section>
    )
  }
}

Timer.propTypes = {
  actions: PropTypes.object,
  serverTime: PropTypes.object,
};

Timer.defaultProps = {
  actions: {},
  serverTime: {},
};

const mapStateToProps = state => ({ model : state[NAME],
  serverTime : state.appReducer.timer
});
const mapDispatchToProps = dispatch =>({actions : bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps,mapDispatchToProps)(Timer);