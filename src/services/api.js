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

export const getPerson = (id) => {
  return getResourse(`${AppUrls.PEOPLE_URL}${id}/`);
};

export const getAllPlanets = async () => {
  const res = await getResourse(AppUrls.PLANETS_URL);
  return res.results;
};

export const getPlanet = (id) => {
  return getResourse(`${AppUrls.PLANETS_URL}${id}/`);
};

export const getAllStarships = async () => {
  const res = await getResourse(AppUrls.STARSHIPS_URL);
  return res.results;
};

export const getStarship = (id) => {
  return getResourse(`${AppUrls.STARSHIPS_URL}${id}/`);
};
