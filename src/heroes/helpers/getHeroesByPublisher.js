import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["Marvel Comics", "DC Comics"];
  if (!validPublisher.includes) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
