import React, {PropTypes} from 'react';

export default class ExampleApplication extends React.Component {
  render() {
    return (
    	<div>
      <label className="mycomp">{this.props.message}</label>
      <p className="mycomp2">{this.props.submessage}</p>       
      </div>
    );
  }
}

ExampleApplication.propTypes = {
  message: PropTypes.string,
  submessage: PropTypes.string,
};

