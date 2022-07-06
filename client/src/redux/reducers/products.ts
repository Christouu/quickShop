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

export default (state = { isLoading: true, products: [] }, action: any) => {
  switch (action.type) {
    case FETCH_BY_SEARCH:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
