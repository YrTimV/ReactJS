// Main import section.
import './Aside.css';
import React from 'react';

// Components import section.

// Component global data.
const articleListItems = [
  { link: 'in_the_beginning.html', title: 'In the beginning' },
  { link: 'my_first_article', title: 'My first article' },
  { link: 'into_the_future', title: 'Into the future' }
];
const asideClasses = 'aside';
const listClasses = 'articles';

// Component class.
export default class Aside extends React.Component {
  render() {
    return (
      <aside className={asideClasses}>
        <section>
          <h3>Articles</h3>
          <ul className={listClasses}>
            {articleListItems.map(item => <li key={item.link}><a href={`/${item.link}`}>{item.title}</a></li>)}
          </ul>
        </section>
      </aside>
    );
  }
}
