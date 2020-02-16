import { createSelector } from 'reselect';

const getLists = state => state.lists.lists;
const getSearchedSeriesText = state => state.lists.searchedSeriesText;
const trimmedLowerCase = text => text.trim().toLowerCase();

/**
 * Calculates the planets by population and
 * adds the rank by its population.
 * @param {Object[]} lists - planet lists.
 */
const getRankedPlanets = (lists) => {
  const newLists = [...lists].map((item) => {
    const population = Number(item.population);
    return {
      ...item,
      population: population || 0,
    }
  });

  const sortedLists = [...newLists]
    .sort((a, b) => a.population - b.population)
    .map((i, index) => ({ ...i, rank: index + 1 }));

  const originalLists = newLists.map(item => {
    const sortedItem = sortedLists.find(i => i.name === item.name);
    return { ...item, rank: sortedItem.rank };
  });

  return originalLists;
}

/**
 * filters the planets with the searched text.
 * if search text is empty than returns all planets.
 * else returns the list of the matched search text planets.
 * @returns {Object [] || []}
 */
const getFilteredLists = createSelector(
  [getLists, getSearchedSeriesText],
  (lists, searchedSeriesText) => {
    if (searchedSeriesText.trim() === '') { return lists; }
    const filteredLists = lists.filter(item => 
      trimmedLowerCase(item.name)
        .includes(trimmedLowerCase(searchedSeriesText)));
    return filteredLists;
  },
);

/**
 * @returns {String} - the no planets found string text.
 */
const getNoSearchResultMessage = createSelector(
  [getFilteredLists, getSearchedSeriesText],
  (lists, searchedSeriesText) => {
    if (searchedSeriesText.trim() !== '' && lists.length === 0) {
      return `No planets found match with ${searchedSeriesText}`;
    }
    return '';
  },
)

export {
  getFilteredLists,
  getSearchedSeriesText as getSearchedSeries,
  getNoSearchResultMessage,
  getRankedPlanets,
}
