import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NAME } from '../constants';
import * as actions from '../actions';
import TextArea from './textArea';


class SpaceFreeText extends  PureComponent {
  constructor(props) {
    super(props);
    this.init();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  init(){
    this.state = {
      textAreaInput: '',
      textAreaOutput: '',
      charCount: 0,
    };
  } 
  componentWillReceiveProps(nextProps){
    if(nextProps.resultText && nextProps.resultText.data){
      this.setState({
        textAreaOutput : nextProps.resultText.data,
      });
    }
  }

  handleFormSubmit(event){
    event ? event.preventDefault() : '';
    let postObj = {
      data : this.state.textAreaInput ? this.state.textAreaInput.trim() : '',
    };

    let params= postObj;
    params && params.data ? this.props.actions.fetchSpaceFreeText('fetchText', params) : this.handleClearForm();
  }

  handleClearForm(event){
    event ? event.preventDefault() : '';
    this.setState({
      textAreaInput: '',
      textAreaOutput: '',
      charCount: 0,
    })
  }

  handleInputChange(event){
    const { target } = event;
    const { name, value } = target;
    
    this.setState({
      [name] : value,
      charCount: name == 'textAreaInput' ? value.length : this.state.charCount,
    });
  }

  render() {
    return (
      <section className="formContainer textAreaContainer">
        <form onSubmit={this.handleFormSubmit}>
        <h3> Enter text with space </h3>
          <TextArea  title="input text" name="textAreaInput" rows= {15} columns={50} maxlen={500} readonly={false} controlFunc={this.handleInputChange} content={this.state.textAreaInput} placeholder="Enter Input"/>
          <span><h3>character(s) count {this.state.charCount}</h3></span>
          <div className="btnContainer">
          <div>
            <input type="submit" className="btn btn-primary" value="Submit"/>
            <button className="btn" onClick={this.handleClearForm}>Clear form</button>
          </div>
          </div>
        </form>
        <form onSubmit={this.handleFormSubmit}>
        <h3> Space free text </h3>
          <TextArea  title="input text" name="textAreaOutput" rows= {15} columns={50} maxlen={500} readonly={true} controlFunc={this.handleInputChange} content={this.state.textAreaOutput} placeholder="Output Text"/>
        </form>
      </section>
    )
  }
}

SpaceFreeText.propTypes = {
  actions: PropTypes.object,
  resultText: PropTypes.object,
};

SpaceFreeText.defaultProps = {
  actions: {},
  resultText: {},
};

const mapStateToProps = state => ({ model : state[NAME],
  resultText : state.appReducer.trimText
});
const mapDispatchToProps = dispatch =>({actions : bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps,mapDispatchToProps)(SpaceFreeText);