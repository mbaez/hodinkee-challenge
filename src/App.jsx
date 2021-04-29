import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import LocalPostList from './components/abm/LocalPostList';
import Home from './components/Home';
import Navbar from './components/navigation/Navbar';
import './sass/App.scss';
import '@fortawesome/fontawesome-free/js/all';
import LocalPosts from './components/posts/LocalPosts';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/posts" />} />
          <Route exact path="/posts" component={Home} />
          <Route exact path="/posts/local" component={LocalPosts} />
          <Route exact path="/admin/posts" component={LocalPostList} />
        </Switch>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
