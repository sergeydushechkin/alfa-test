import * as React from "react";
import * as ReactDOM from "react-dom";

import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./api";
import {Operation, reducer} from "./reducer/reducer";

import App from "./components/app";

const onError = (err:Error) => {
  throw err;
};

const api = createAPI(onError);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
    )
);

store.dispatch(Operation.getCardsData());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
