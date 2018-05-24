// Main import section.
import './Layout.css';
import React from 'react';

// Components import section.
import Header from '../Header';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';

// Component global data.
const layoutClasses = 'layout';

// Component class.
export default class Layout extends React.Component {
  render() {

    return (
      <div className={layoutClasses}>
        <Header></Header>
        <Aside></Aside>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}
