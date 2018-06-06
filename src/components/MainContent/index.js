import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MainContent.module.scss';

const propTypes = {};

const defaultProps = {};

class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { children } = this.props;
    return (
      <div styleName="main-content">
        {children}
      </div>
    );
  }
}

MainContent.propTypes = propTypes;
MainContent.defaultProps = defaultProps;

export default MainContent;
