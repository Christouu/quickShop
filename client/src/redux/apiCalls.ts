import { AppDispatch } from "./store";

import { privateRequest, publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  deleteProductFail,
  deleteProductStart,
  deleteProductSuccess,
  getProductsFail,
  getProductsStart,
  getProductsSuccess,
} from "./productRedux";

export const login = async (dispatch: AppDispatch, user: any) => {
  dispatch(loginStart());

  try {
    const response = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch: AppDispatch) => {
  dispatch(getProductsStart());
  try {
    const response = await publicRequest.get("/product/find");
    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFail());
  }
};

export const deleteProduct = async (dispatch: AppDispatch, id: any) => {
  dispatch(deleteProductStart());
  try {
    const response = await privateRequest.delete(`/product/${id}`);

    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFail());
  }
};
