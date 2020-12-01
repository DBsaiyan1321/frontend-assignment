const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  return heroes.filter(hero => hero.publisher === "Marvel Comics");
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  for (let hero of heroes) { 
    hero.characters = hero.characters.split(" ");
  }
  return heroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let heroesGroupedByPublisher = {}
  heroes.forEach(hero => {
    const heroPublisher = hero.publisher;
    if (heroPublisher in heroesGroupedByPublisher) { 
      heroesGroupedByPublisher[heroPublisher].push(hero);
    } else { 
      heroesGroupedByPublisher[heroPublisher] = [hero]; 
    }
  })
  return heroesGroupedByPublisher;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => { 
  /*
  The length of the hero.characters array must be greater than two, because 
  the last name and first name of the character are seperate elements. 
  */
  return heroes.filter(hero => hero.publisher === "DC Comics" && hero.characters.length > 2);
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
