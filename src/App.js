import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

import Booking from './components/views/subviews/Booking/Booking';
import Event from './components/views/subviews/Event/Event';
import Order from './components/views/subviews/Order/Order';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export const baseURL = process.env.PUBLIC_URL;

const theme = createMuiTheme({
  palette: {
    primary: { main: '#353b48' },
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Switch>
            <Route exact path={`${baseURL}/`} component={Homepage} />
            <Route exact path={`${baseURL}/login`} component={Login} />
            <Route exact path={`${baseURL}/tables`} component={Tables} />
            <Route exact path={`${baseURL}/tables/booking/:id`} component={Booking} />
            <Route exact path={`${baseURL}/tables/booking/new`} component={Booking} />
            <Route exact path={`${baseURL}/tables/event/:id`} component={Event} />
            <Route exact path={`${baseURL}/tables/event/new`} component={Event} />
            <Route exact path={`${baseURL}/waiter`} component={Waiter} />
            <Route exact path={`${baseURL}/waiter/order/:id`} component={Order} />
            <Route exact path={`${baseURL}/waiter/order/new`} component={Order} />
            <Route exact path={`${baseURL}/kitchen`} component={Kitchen} />
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
