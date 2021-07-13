import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Login = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" component="h4" gutterBottom>
        Sing In
      </Typography>
      <form className={styles.wrapper}>
        <TextField
          className={styles.input}
          required
          id="outlined-basic"
          label="Login"
          variant="outlined"
        />
        <TextField
          className={styles.input}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button
          className={styles.button}
          variant="contained"
          component={Link}
          to={`${process.env.PUBLIC_URL}/`}
        >
          Log In
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
