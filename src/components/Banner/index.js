import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Banner.module.scss';

const propTypes = {};

const defaultProps = {};

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="banner" >
      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
