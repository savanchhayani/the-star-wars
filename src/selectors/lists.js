import { createSelector } from 'reselect';

const getLists = state => state.lists.lists;
const getSearchedSeriesText = state => state.lists.searchedSeriesText;

/**
 * filters the web series with the searched text.
 * if search text is empty than returns all web series.
 * else returns the list of the matched serch text web series.
 * @returns {Object [] || []}
 */
const getFilteredLists = createSelector(
  [getLists, getSearchedSeriesText],
  (lists, searchedSeriesText) => {
    if (searchedSeriesText.trim() === '') { return lists; }
    return lists.filter(item => item.name.trim().includes(searchedSeriesText.trim()));
  },
);

/**
 * @returns {String} - the no web series found string text.
 */
const getNoSearchResultMessage = createSelector(
  [getFilteredLists, getSearchedSeriesText],
  (lists, searchedSeriesText) => {
    if (searchedSeriesText.trim() !== '' && lists.length === 0) {
      return `No web series found match with ${searchedSeriesText}`;
    }
    return '';
  },
)

export {
  getFilteredLists,
  getSearchedSeriesText as getSearchedSeries,
  getNoSearchResultMessage,
}
