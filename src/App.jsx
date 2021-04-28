import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LocalPostList from "./components/abm/LocalPostList";
import Home from "./components/Home";
import Navbar from "./components/navigation/Navbar";
import "./sass/App.scss";
import "@fortawesome/fontawesome-free/js/all";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={LocalPostList} />
          <Route exact path="/posts/new" component={LocalPostList} />
        </Switch>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
