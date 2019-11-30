import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import GalleryPage from 'containers/GalleryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={GalleryPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <CssBaseline />
    </Fragment>
  );
}
