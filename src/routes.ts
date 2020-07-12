/**
 * @author: lencx
 * @create_at: Jul 08, 2020
 */

import { lazy } from 'react';
import { RouteOption } from '/@route/types';

// router config
// export const CONFIG = {};

const routes: RouteOption[] = [
  {
    path: '/music-grid',
    component: lazy(() => import('./views/music_grid'))
  },
];

export default routes;