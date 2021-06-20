import * as api from "../api";

export const signIn = (authData, history) => async (dispatch) => {
    await api.signIn(authData).then(({ data }) => {
        dispatch({ type: "AUTH", payload: data });
        history.push("/");
    });
};

export const signUp = (authData, history) => async (dispatch) => {
    await api.signUp(authData).then(({ data }) => {
        dispatch({ type: "AUTH", payload: data });
        history.push("/");
    });
};
