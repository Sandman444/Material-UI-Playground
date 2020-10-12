import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  Grid,
} from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './App.css';

const useStyles = makeStyles({
  fancy: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 26,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.fancy}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          input={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2">Welcome to MUI</Typography>
            <Typography variant="subtitle1" component="div">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing={4} justify="center">
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              type="time"
              label="The Time"
            />
            <CheckboxExample />
            <ButtonGroup size="large" variant="contained">
              <Button startIcon={<SaveIcon />} size="large" color="primary">
                Save
              </Button>
              <Button startIcon={<DeleteIcon />} color="secondary">
                Discard
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
