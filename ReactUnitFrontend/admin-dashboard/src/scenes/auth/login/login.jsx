import React from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel,Checkbox,Link, Paper, Box, Grid, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import UseStyles from "../../../components/auth";

const Login = () => {
  const classes = UseStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {"Built with love by the "}
                    <Link color="inherit" href="https://material-ui.com/">
                        Material-UI
                    </Link>
                    {" team."}
                </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
