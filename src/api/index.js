import axios from "axios";

const API = axios.create({
    baseURL: "https://project-memory-zach-api.herokuapp.com",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export const createPost = (newPost) => API.post("/posts", newPost);
export const fetchPosts = () => API.get("/posts");
export const updatePost = (id, post) => API.patch(`${"/posts"}/${id}`, post);
export const deletePost = (id) => API.delete(`${"/posts"}/${id}`);
export const likePost = (id) => API.patch(`${"/posts"}/${id}/likePost`);

export const signIn = (authData) => API.post("/users/signin", authData);
export const signUp = (authData) => API.post("/users/signup", authData);
