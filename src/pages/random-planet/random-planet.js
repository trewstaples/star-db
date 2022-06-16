import React from 'react';
import { useEffect, useState } from 'react';

import { getPlanet } from '../../services/api';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './random-planet.css';

const RandomPlanet = () => {
  const [activePlanet, setActivePlanet] = useState({
    planet: {},
    loading: true,
    error: false,
  });

  useEffect(() => {
    const id = Math.floor(Math.random() * 20) + 3;
    getPlanet(id).then(onPlanetLoaded).catch(onError);
  }, []);

  const onError = (err) => {
    setActivePlanet({
      error: true,
      loading: false,
    });
  };

  const onPlanetLoaded = (planet) => {
    setActivePlanet({
      planet,
      loading: false,
    });
  };

  const render = () => {
    const { planet, loading, error } = activePlanet;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  };

  return render();
};

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="Planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default RandomPlanet;
