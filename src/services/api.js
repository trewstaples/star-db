const AppUrls = {
  SWAPI_URL: 'https://swapi.dev/api',
  PEOPLE_URL: `/people/`,
  PLANETS_URL: `/planets/`,
  STARSHIPS_URL: `/starships/`,
};

export const getResourse = async (url) => {
  const res = await fetch(`${AppUrls.SWAPI_URL}${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, recieved ${404}`);
  }

  return await res.json();
};

export const getAllPeople = async () => {
  const res = await getResourse(AppUrls.PEOPLE_URL);
  return res.results;
};

export const getPerson = async (id) => {
  const person = await getResourse(`${AppUrls.PEOPLE_URL}${id}/`);
  return person.map(transformPerson);
};

export const getAllPlanets = async () => {
  const res = await getResourse(AppUrls.PLANETS_URL);
  return res.results.map(transformPlanet);
};

export const getPlanet = async (id) => {
  const planet = await getResourse(`${AppUrls.PLANETS_URL}${id}/`);
  return transformPlanet(planet);
};

export const getAllStarships = async () => {
  const res = await getResourse(AppUrls.STARSHIPS_URL);
  return res.results.map(transformStarship);
};

export const getStarship = (id) => {
  return getResourse(`${AppUrls.STARSHIPS_URL}${id}/`);
};

const extractId = (planet) => {
  const idRegExp = /\/([0-9]*)\/$/;
  const id = planet.url.match(idRegExp)[1];
  return id;
};

export const transformPlanet = (planet) => {
  return {
    id: extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diametr: planet.diametr,
  };
};

export const transformStarship = (starship) => {
  return {
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passsengers: starship.passsengers,
    cargoCapacity: starship.cargoCapacity,
  };
};

export const transformPerson = (person) => {
  return {
    id: extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birthYear,
    eyeColor: person.eyeColor,
  };
};
