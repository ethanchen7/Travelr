import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import SingleImagePage from "./components/SingleImagePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/image/:id">
            <SingleImagePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
