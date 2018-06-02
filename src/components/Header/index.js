import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import { HEADER_ROUTE } from '../../constants/route';
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
        <div styleName="nav">
          {HEADER_ROUTE.map(route => (
            <Link
              to={route.path}
              styleName="item"
              >
                {route.title}
              </Link>
          ))}
        </div>

      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
