/**
 * @author: lencx
 * @create_at: Jul 08, 2020
 */

import { ComponentType, LazyExoticComponent, ReactNode } from 'react';

export interface RouteOption {
  // basic prop
  path: string;
  // basic prop
  exact?: boolean;
  // preloader for lazy loading
  fallback?: NonNullable<ReactNode> | null;
  // lazy loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // sub routes
  routes?: RouteOption[];
  // redirect path
  redirect?: string;
  // if router is private, this is going to be true
  private?: boolean;
}
