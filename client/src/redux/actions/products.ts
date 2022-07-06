import * as api from "../../api";

import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  FETCH_COMMENTS,
} from "../../constants/types";

export const getPostBySearch = (searchQuery: any) => async (dispatch: any) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fecthProductsBySearch(searchQuery);

    const action = { type: FETCH_BY_SEARCH, payload: data };
    dispatch(action);
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
