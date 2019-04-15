import {FETCH_FILTERS_SUCCESS} from "../types";
import api from "../api";

const filtersFetched = data => ({
  type: FETCH_FILTERS_SUCCESS,
  data
});

export const fetchFilters = () => dispatch =>
  api.filters
    .fetchAll().then(filters => {
      dispatch(filtersFetched(filters));
    });