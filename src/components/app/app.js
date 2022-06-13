import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../../pages/random-planet/random-planet';
import ItemList from '../../pages/item-list/item-list';
import PersonDetails from '../../pages/person-details/person-details';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
