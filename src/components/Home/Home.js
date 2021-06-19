import React, { useEffect, useState } from "react";
import { Grow, Container, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Posts, Form } from "..";
import { getPosts } from "../../actions/posts";

const Home = () => {
    const dispatch = useDispatch();
    const [currentId, setcurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
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
    );
};

export default Home;
