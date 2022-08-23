import { } from "./actionTypes";

const initState = {
  token: "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "write type": {
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    }
    case "write type1": {
      return {
        ...state,
        token: payload,
        isAuth: true,
        isLoading: false,
        isError: false,
      };
    }
    case "write type2": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
