/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Banner from "../img/banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import provideUserDetails from "../redux/dispatchActionProvider";

const Home = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const userDetailsState = useSelector(
    (RootState) => RootState.userDetailsState
  );

  //   state
  const { userName, randomId } = userDetailsState;

  //   actions
  const { setUserName, setRandomId } = provideUserDetails();

  const generateRandomId = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let randomId = userDetailsState.randomId;
    for (let i = 0; i < characters.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
      dispatch(setRandomId(randomId));
    }
    return randomId;
  };

  const handleMeetingId = () => {
    dispatch(setUserName(userName));
    let id = generateRandomId();
    navigateTo(`/room/${id}/`);
  };

  console.log("userName is: ", userName);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <img
              src={Banner}
              alt="Banner Image"
              style={{
                width: "100%",
                height: "100vh",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 28,
                  "& .MuiTextField-root": {
                    marginBottom: 2,
                    width: "100%",
                  },
                  "& .MuiButton-root": {
                    width: "100%",
                    marginTop: 2,
                  },
                }}
              >
                <Typography variant="h5">
                  Want to connect you Loved one?
                </Typography>

                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  required
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleMeetingId}
                >
                  Submit
                </Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
