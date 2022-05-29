import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { signup } from "../../Utilities/Api";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const initialValues = { username: "", fullname: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [usernameError, setUsernameError] = useState(null);
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  //   const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    signup(formValues.username, formValues.fullname, formValues.password).then(
      (res) => {
        setUsernameError(null);
        console.log(res);
        if (res.stauts === "failed") {
          setUsernameError(res.message);
        } else {
          window.location.reload();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              margin="normal"
              fullWidth
              id="user"
              label="User Name"
              name="user_name"
              autoComplete="username"
              autoFocus
              {...register("username", { required: "User Name is required." })}
              error={usernameError}
              helperText={usernameError}
              value={formValues.username}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="fullname"
              label="Full Name"
              name="Full_name"
              autoComplete="Full name"
              {...register("fullname", { required: "User Name is required." })}
              helperText={errors.fullname?.message}
              value={formValues.fullname}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              {...register("password", { required: "password is required." })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              value={formValues.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              value="Rgister"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // disabled={true}
              // onClick={() => {
              //   navigate("/home");
              // }}
            >
              Sign Up
            </Button>
            <Grid container></Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
