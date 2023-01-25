import React from "react";
// import Login from "./Login";
// import Register from "./Register";
import "./UserForm.css";

// import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";

import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// import Stack from "@mui/material/Stack";

// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const UserForm = () => {
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div>
      {/* <Box
        className="form-card"
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            p: 1,
            width: 120,
            height: 130,
          },
        }}
      >
        <Paper elevation={0} />
      <Paper />
        <Paper elevation={3}>
          <Login />
          <Typography variant="subtitle1" gutterBottom>
            or
          </Typography>
          <Register />
        </Paper>
    </Box> */}

      <Box
        sx={{
          bgcolor: "background.paper",
          maxWidth: 500,
          margin: "auto",
          boxShadow: 10,
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width form"
          >
            <Tab label="Sign In" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        {/*<SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "35ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="standard-required"
                    label="Full Name"
                    // defaultValue="Hello World"
                    variant="standard"
                  />

                  <TextField
                    required
                    id="standard-required"
                    type="email"
                    label="Email ID"
                    // defaultValue="Hello World"
                    variant="standard"
                  />

                  {/*<TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    required={true}
                  />*

                  <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? "text" : "password"}
                      required={true}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <Button type="submit" href="/"
                    sx={{ display: "block", margin: "auto", my: 3, mx: 10 }}
                    variant="contained"
                  >
                    Sign In
                  </Button>
                </div>
              </Box>
            </Stack>
          </TabPanel>


          <TabPanel value={value} index={1} dir={theme.direction}>
            Sign Up
          </TabPanel>
                    </SwipeableViews>*/}
      </Box>
    </div>
  );
};

export default UserForm;
