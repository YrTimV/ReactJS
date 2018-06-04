import './PokemonListContainer.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

import Loading from 'components/Loading';
import PokemonListItem from 'components/PokemonListItem';

export default class PokemonListContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      count: 0,
      offset: 0,
      limit: 20,
      loading: true,
    }
  }

  showNext = () => {
    const { offset, limit } = this.state;

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then((result) => result.json())
      .then((result) => {
        if (result.detail) {
          this.setState({
            loading: false,
          });
          
          throw new Error(result.detail);
        }

        this.setState({
          pokemons: this.state.pokemons.concat(result.results),
          count: result.count,
          offset: offset + limit,
          loading: false,
        })
      })
      .catch(console.error);
  }

  render() {
    const { pokemons, count, offset, limit, loading } = this.state;
    const pokemonList = pokemons.map((pokemon) => <PokemonListItem key={pokemon.name} {...pokemon} />);
    const next = count - offset;

    return (
      <React.Fragment>
        {count ? <h2 className="pokemonListHeader">Pokemons shown: {pokemons.length} / {count}</h2> : ''}
        {pokemonList}
        {loading ? <Loading /> : (next ? <Button onClick={this.showNext} className="buttonNext" color="primary">Show next {Math.min(limit, next)}</Button> : '')}
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.showNext();
  }
}
