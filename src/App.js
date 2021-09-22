import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../src/contexts/AuthContext';
import Login from './components/login/Login';
import SignUp from './components/Signup/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import PrivateRoute from './components/PrivateRoute';
import ForgotPass from './components/ForgotPass';
import UpdateProfile from './components/Navbar/UpdateProfile';
import NotFound from './components/NotFound';
import Products from './components/static/Products';
import { Provider } from "react-redux";
import {createStore,applyMiddleware } from 'redux'
import reducer from "./redux/productReducers";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// import store from './redux/store'd
function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPass} />
              <PrivateRoute
                exact
                path="/update-profile"
                component={UpdateProfile}
              />
              <Route exact path="/" component={Products} />

              <Route component={NotFound} />
            </Switch>
          </Router>
        </Provider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
