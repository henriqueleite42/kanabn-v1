import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Loading from "./Loading";
import loadRoute from "./loadRoute";

import { useGlobalState } from "../../Redux/state";

const Router: React.FC = () => {
  const GlobalState = useGlobalState();

  return (
    <Suspense fallback={<Loading />}>
      <div data-theme={GlobalState.theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={loadRoute("Home")} />
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default Router;
