import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Banner.module.scss';

const propTypes = {};

const defaultProps = {
  contentHeight: `${(450 / 160)}rem`,
};

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contentHeight, children } = this.props;
    return (
      <div
        styleName="banner"
        style={{
          marginBottom:`calc(${contentHeight} - ${styles['padding-height']})`
        }
      }>
        <div styleName="content">
          {children}
        </div>
      </div>
    );
  }
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
