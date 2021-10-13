import * as React from "react";
import * as ReactDOM from "react-dom";

import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./api";
import {ActionCreator, reducer} from "./reducer/reducer";

import App from "./components/app";

const onError = (err: Error) => {
  store.dispatch(ActionCreator.changeError(err.message));
};

const api = createAPI(onError);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
