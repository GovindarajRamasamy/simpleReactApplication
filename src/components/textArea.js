import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => (  
  <div className="text-area">
      <textarea
      style={props.resize ? null : {resize: 'none'}}
      name={props.name}
      rows={props.rows}
      cols={props.columns}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} 
      maxLength={props.maxlen} 
      readOnly={props.readonly}/>
  </div>
);

TextArea.propTypes = {  
  title: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  resize: PropTypes.bool,
  placeholder: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  maxlen: PropTypes.number,
  readonly:PropTypes.bool,
};

export default TextArea;  