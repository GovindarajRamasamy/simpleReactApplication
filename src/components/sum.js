import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NAME } from '../constants';
import * as actions from '../actions';
import Inputtext from './textInput';


class AddNumber extends  PureComponent {
  constructor(props) {
    super(props);
    this.init();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  init(){
    this.state = {
      inputOne: '',
      inputTwo: '',
      sumValue: '',
    };
  } 
  componentWillReceiveProps(nextProps){
    if(nextProps.totalVal && nextProps.totalVal.data){
      this.setState({
        sumValue : nextProps.totalVal.data,
      })
    }
  }

  handleFormSubmit(event){
    event ? event.preventDefault() : '';
    let params= [this.state.inputOne,this.state.inputTwo];
    this.props.actions.fetchTotal('fetchTotal', params);
  }

  handleClearForm(event){
    event ? event.preventDefault() : '';
    this.setState({
      inputOne: '',
      inputTwo: '',
      sumValue: '',
    })
  }

  handleInputChange(event){
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name] : parseInt(value) ? parseInt(value) : this.state[name],
    });
  }

  render() {
    return (
      <section className="formContainer">
        <form onSubmit={this.handleFormSubmit}>
          <Inputtext  inputType="text" title="first input" name="inputOne" label="Input 1" controlFunc={this.handleInputChange} content={this.state.inputOne} maxLength={9} placeholder="Enter Input"/>
          <Inputtext  inputType="text" title="second input" name="inputTwo" label="Input 2" controlFunc={this.handleInputChange} content={this.state.inputTwo}  maxLength={9} placeholder="Enter Input"/>          
          <div className="btnContainer">
          { this.state.sumValue &&
            <div>
              <h3> Total value is  { this.state.sumValue } </h3>
            </div>
          }
          <div>
            <input type="submit" className="btn btn-primary" value="Add"/>
            <button className="btn" onClick={this.handleClearForm}>Clear form</button>
          </div>
          </div>
        </form>
      </section>
    )
  }
}

AddNumber.propTypes = {
  actions: PropTypes.object,
  totalVal: PropTypes.object,
};

AddNumber.defaultProps = {
  actions: {},
  totalVal: {},
};

const mapStateToProps = state => ({ model : state[NAME],
  totalVal : state.appReducer.totalValue
});
const mapDispatchToProps = dispatch =>({actions : bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps,mapDispatchToProps)(AddNumber);