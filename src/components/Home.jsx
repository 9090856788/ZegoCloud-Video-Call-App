/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Banner from "../img/banner.jpg";

const Home = () => {
  const navigateTo = useNavigate();

  const generateRandomId = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let randomId = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  };

  const handleMeetingId = () => {
    let id = generateRandomId();
    console.log("Id is : ", id);
    navigateTo(`/room/${id}/`);
  };

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

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleMeetingId}
                >
                  Go to meeting Room
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
