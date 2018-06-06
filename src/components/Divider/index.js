import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Divider.module.scss';

const propTypes = {};

const defaultProps = {
  contentHeight: `${(450 / 160)}rem`,
};

class Divider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    return (
      <div styleName="divider">
        <div styleName="more">MORE</div>
      </div>
    );
  }
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
