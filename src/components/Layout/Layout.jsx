import './Layout.scss';
import React from 'react';

import Header from '../Header';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';

export default class Layout extends React.PureComponent {
  render() {

    return (
      <div className="layout">
        <Header></Header>
        <Aside></Aside>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}
