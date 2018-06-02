import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Banner from '../components/Banner';

class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Banner></Banner>
      </div>
    )
  }
}

export default IndexPage
