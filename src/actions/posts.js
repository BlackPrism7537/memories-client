import * as api from "../api";

export const createPost = (post) => async (dispatch) => {
    await api
        .createPost(post)
        .then(({ data }) => dispatch({ type: "CREATE", payload: data }))
        .catch((err) => console.log(err.message));
};

export const getPosts = () => async (dispatch) => {
    await api
        .fetchPosts()
        .then(({ data }) => dispatch({ type: "FETCH_ALL", payload: data }))
        .catch((err) => console.log(err.message));
};

export const updatePost = (id, post) => async (dispatch) => {
    await api
        .updatePost(id, post)
        .then(({ data }) => dispatch({ type: "UPDATE", payload: data }))
        .catch((err) => console.log(err.message));
};

export const deletePost = (id) => async (dispatch) => {
    await api
        .deletePost(id)
        .then(() => dispatch({ type: "DELETE", payload: id }))
        .catch((err) => console.log(err.message));
};

export const likePost = (id) => async (dispatch) => {
    await api
        .likePost(id)
        .then(({ data }) => dispatch({ type: "LIKE", payload: data }))
        .catch((err) => console.log(err.message));
};
