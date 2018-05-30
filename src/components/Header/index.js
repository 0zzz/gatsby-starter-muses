import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import './Header.module.scss';

const propTypes = {};

const defaultProps = {};

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="header" >
        11111
      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
