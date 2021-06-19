import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { CircularProgress, Grid, Typography } from "@material-ui/core";

const Posts = ({ setcurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid
            container
            className={classes.container}
            alignItems="stretch"
            spacing={2}
        >
            {posts.map((post) => (
                <Grid item xs={12} sm={6} key={post._id}>
                    <Post post={post} setcurrentId={setcurrentId} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
