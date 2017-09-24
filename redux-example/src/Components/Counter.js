import React, { Component, PropTypes } from 'react';
import Value from './Value';
import Control from './Control';

const propTypes = {
  
}

const defaultProps = {

}

class Conter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Value />
        <Control />
      </div>
    )
  }
}

Conter.propTypes = propTypes;
Conter.defaultProps = defaultProps;

export default Conter;
