import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const propTypes = {};

const defaultProps = {};

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contentHeight, children } = this.props;
    return (
      <div styleName="footer">
        Copyright © Lzzzz 2015 - 2020
      </div>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
