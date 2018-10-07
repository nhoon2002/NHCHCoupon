import React from "react";
import { Route, Router, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store.js";
import App from "./App.jsx";
import Home from "./containers/Home.jsx";
import Category from "./containers/Category.jsx";
import Products from "./containers/Products.jsx";
import Test from "./containers/Test.jsx";
import fire from "./firebase.js"; //Firebase config
import { checkSession } from "./actions/userActions.js";

fire.auth().onAuthStateChanged(firebaseUser => {
  store.dispatch(checkSession());
  if (firebaseUser) console.log("User: %s", firebaseUser.uid);
  else console.log("User: %s", null);
});

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products/:cat" component={Products} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
