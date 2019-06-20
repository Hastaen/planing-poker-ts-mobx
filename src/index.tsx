import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
// import { observable, action } from "mobx";
// import { Hello } from "./components/Hello";
import EstimationComponent from './modules/estimation/components/estimation-component'

import estimationStore from './modules/estimation/estimation-store';

const stores = {
    estimationStore,
};


ReactDOM.render(
    <Provider {...stores}>
      <EstimationComponent estimationStore={estimationStore}/>
    </Provider>,
    document.getElementById("app")
);