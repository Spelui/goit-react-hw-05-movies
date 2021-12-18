import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import Main from "../common/Main/Main";
import MoviesPage from "../MoviesPage/MoviesPage";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route
            path="/goit-react-hw-05-movies"
            render={() => <Redirect to="/homepage" />}
          />
          <Route exact path="/" render={() => <Redirect to="/homepage" />} />

          <Route path="/homepage">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:id">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Main>
    </>
  );
};

export default App;
