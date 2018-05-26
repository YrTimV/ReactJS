import './Aside.scss';
import React from 'react';

const articleListItems = [
  { link: 'in_the_beginning.html', title: 'In the beginning' },
  { link: 'my_first_article', title: 'My first article' },
  { link: 'into_the_future', title: 'Into the future' }
];

export default class Aside extends React.PureComponent {
  render() {
    return (
      <aside className="aside">
        <section>
          <h3>Articles</h3>
          <ul className="articles">
            {articleListItems.map(item => <li key={item.link}><a href={`/${item.link}`}>{item.title}</a></li>)}
          </ul>
        </section>
      </aside>
    );
  }
}
