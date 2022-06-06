const getResourse = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, recieved ${404}`);
  }

  const body = res.json();
  return body;
};

getResourse('https://swapi.dev/api/people/1328428/')
  .then((body) => console.log(body))
  .catch((err) => console.error('Cound not fetch', err));
