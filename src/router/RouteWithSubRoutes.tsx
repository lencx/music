/**
 * @author: lencx
 * @create_at: Jul 08, 2020
 */

import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { RouteOption } from './types';

const RouteWithSubRoutes = (routeProps: RouteOption) => {
  /** authenticated flag */
  return (
    // TODO: loading component
    <Suspense fallback={routeProps.fallback || null}>
      <Route
        path={routeProps.path}
        render={(props) => {
          const comp = routeProps.component &&
            <routeProps.component {...props} routes={routeProps.routes} />;

          return routeProps.redirect
            ? <Redirect to={routeProps.redirect}/>
            : comp
        }}
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;