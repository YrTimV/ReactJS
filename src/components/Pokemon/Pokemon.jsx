import './Pokemon.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import Loading from 'components/Loading';

export default class Pokemon extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      loading: true,
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    
    const { pokemon } = this.state;
    const { match } = this.props;

    return (
      <React.Fragment>
        <Link to="/">Back to Pokemon list</Link>
        <br />
        <div className="pokemon">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${match.params.pokemonId}.png`} alt={pokemon.name} />
          <p>Name: {pokemon.name}</p>
          <p>Base experience: {pokemon.base_experience}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <br /><br />
          <div>Stats:</div>
          <ul>
            {pokemon.stats.map((item) => <li key={item.stat.name}>{item.stat.name}: {item.base_stat}</li>)}
          </ul>
          <br /><br />
          <div>Abilities:</div>
          <ul>
            {pokemon.abilities.map((item) => <li key={item.ability.name}>{item.ability.name} (Slot #{item.slot})</li>)}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { match } = this.props;

    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.pokemonId}`)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          pokemon: result,
          loading: false,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
