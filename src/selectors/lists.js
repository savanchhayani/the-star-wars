import { createSelector } from 'reselect';

const getLists = state => state.lists.lists;
const getSearchedSeriesText = state => state.lists.searchedSeriesText;
const trimmedLowerCase = text => text.trim().toLowerCase();

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
    return lists.filter(item => 
      trimmedLowerCase(item.name)
        .includes(trimmedLowerCase(searchedSeriesText)));
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
}
