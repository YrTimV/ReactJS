import './PokemonListItem.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class PokemonListItem extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

  render() {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
    const { url, name } = this.props;
    let pokemonId = url.split('/');

    pokemonId = pokemonId[pokemonId.length - 2];

    return (
      <div className="pokemonListItem">
        {pokemonId}.
        <Link to={`/pokemon/${pokemonId}`}>
          <img src={(imgUrl + pokemonId + '.png')} alt={name} />
          {name}
        </Link>
      </div>
    );
  }
}
