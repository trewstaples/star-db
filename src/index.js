import { getPerson } from './services/api.js';

getPerson(3)
  .then((people) => console.log(console.log(people.name)))
  .catch((err) => console.error('Cound not fetch', err));
