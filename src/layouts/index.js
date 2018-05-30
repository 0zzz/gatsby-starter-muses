import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'amfe-flexible';



class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, data, ...props } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {children()}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
