import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PokemonListContainer from 'containers/PokemonListContainer';
import Pokemon from 'components/Pokemon';

const routes = [
  {
    path: '/',
    component: PokemonListContainer,
    exact: true,
  },
  {
    path: '/pokemon/:pokemonId',
    component: Pokemon,
    exact: true,
  },
]

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
