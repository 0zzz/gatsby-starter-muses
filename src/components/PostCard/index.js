import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './PostCard.module.scss';

const DIRECTION = {
  BOTTOM: 'bottom',
  RIGHT: 'right',
}
const propTypes = {
  direction: PropTypes.oneOf([DIRECTION.BOTTOM, DIRECTION.RIGHT]),
};

const defaultProps = {
  size: 'small',
  direction: DIRECTION.BOTTOM,
};

class PostCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      bgSrc, categorys, consume, createTime, title, direction,
    } = this.props;
    const cls = classnames('post-card', {
      bottom: direction === DIRECTION.BOTTOM,
      right: direction === DIRECTION.RIGHT,
    });
    return (
      <div styleName={cls} >
        <div styleName="bg" style={{backgroundImage:`url(${bgSrc})`}}/>
        <div styleName="card">
          <div styleName="header blue">
            <span styleName="categorys">{categorys}</span>
            <span styleName="consume">{consume} MIN READ</span>
          </div>
          <div styleName="title">{title}</div>
          <div styleName="cretae-time">{createTime}</div>
        </div>
      </div>
    );
  }
}

PostCard.propTypes = propTypes;
PostCard.defaultProps = defaultProps;

export default PostCard;
