import * as api from "../api";
import { AppDispatch } from "./store";

import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch: AppDispatch, user: any) => {
  dispatch(loginStart());

  try {
    const response = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
