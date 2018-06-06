import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MainContent from '../components/MainContent';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import Divider from '../components/Divider';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner contentHeight="2.8125rem">
          <div style={{width: '100%', background:'red',height:'2.8125rem'}}></div>
        </Banner>

        <MainContent>
          <PostCard
            bgSrc='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528008340732&di=82325f15343c4d22018fb68372c403c3&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fh%2Fpic%2F20140410%2F24%2F4691403481450698356.jpg'
            categorys='js'
            consume='7'
            createTime='20'
            title='前端入门到放弃'
            direction='right'
          />
        </MainContent>
        <MainContent>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <PostCard
              bgSrc='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528008340732&di=82325f15343c4d22018fb68372c403c3&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fh%2Fpic%2F20140410%2F24%2F4691403481450698356.jpg'
              categorys='js'
              consume='7'
              createTime='20'
              title='前端入门到放弃'
            />
            <PostCard
              bgSrc='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528008340732&di=82325f15343c4d22018fb68372c403c3&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fh%2Fpic%2F20140410%2F24%2F4691403481450698356.jpg'
              categorys='js'
              consume='7'
              createTime='20'
              title='前端入门到放弃'
            />
            <PostCard
              bgSrc='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528008340732&di=82325f15343c4d22018fb68372c403c3&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fh%2Fpic%2F20140410%2F24%2F4691403481450698356.jpg'
              categorys='js'
              consume='7'
              createTime='20'
              title='前端入门到放弃'
            />
          </div>
        </MainContent>

        <Divider type="more"/>
        <Footer type="more"/>

      </div>
    )
  }
}

export default IndexPage
