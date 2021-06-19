import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    };

    const handleChange = ({ target }) => {
        setPostData({ ...postData, [target.name]: target.value });
    };

    const clear = () => {};

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.form} ${classes.root}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">Create Memory</Typography>
                <TextField
                    name="creator"
                    label="Creator"
                    variant="outlined"
                    fullWidth
                    value={postData.creator}
                    onChange={handleChange}
                />
                <TextField
                    name="title"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={postData.title}
                    onChange={handleChange}
                />
                <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    value={postData.message}
                    onChange={handleChange}
                />
                <TextField
                    name="tags"
                    label="Tags"
                    variant="outlined"
                    fullWidth
                    value={postData.tags}
                    onChange={handleChange}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
