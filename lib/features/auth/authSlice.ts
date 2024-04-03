import {createSlice} from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  user: {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    type_profile: string,
  };
}


const initialState = {
  isAuthenticated: false,
  isLoading: true,
  token: null,
  user: {},
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: state => {
      // const access = localStorage.getItem("access");
      // @ts-ignore
      // const payload = jwtDecode(access);
      // @ts-ignore
      // state.user = payload.user;
      state.isAuthenticated = true;
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setAccessToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
      // @ts-ignore
      state.user = {};
    },
    finishInitialLoad: state => {
      state.isLoading = false;
    },
  },
});

export const {setAuth, setUser, setAccessToken, logout, finishInitialLoad} = authSlice.actions;
export default authSlice.reducer;
