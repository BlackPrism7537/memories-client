import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import { Form, Posts } from "./components";
import memories from "./images/memories.png";

import useStyles from "./styles";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setcurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography
                    className={classes.heading}
                    variant="h2"
                    align="center"
                >
                    Memories
                </Typography>
                <img
                    className={classes.image}
                    src={memories}
                    alt="memories"
                    height="60"
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts setcurrentId={setcurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form
                                currentId={currentId}
                                setcurrentId={setcurrentId}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
