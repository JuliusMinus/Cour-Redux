import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

//Redux
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getPosts());
store.dispatch(getUser());
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById("root"));
