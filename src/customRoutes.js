import React from 'react';
import { Route } from 'react-router-dom';
import { RouteWithoutLayout } from 'react-admin';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import RedirectPage from "./pages/RedirectPage";

export default [
  <RouteWithoutLayout exact path="/" component={HomePage} />,
  <RouteWithoutLayout exact path="/r" component={RedirectPage} />,
  <Route path="/post" component={PostPage} />,
];
