import { publicRequest } from "../requestMethods";
import { AppDispatch } from "./store";
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
