/// <reference types="svelte/types/runtime/ambient" />

import { Readable } from 'svelte/store';
import { SpaRouter } from './spa_router';
import { localisedRoute } from './spa_router';
import { navigateTo } from './spa_router';
import { routeIsActive } from './spa_router';
import Route from './components/route';
import Router from './components/router';
import Navigate from './components/navigate';
export const activeRoute: Readable<Route>;

export { SpaRouter, localisedRoute, navigateTo, routeIsActive, Route, Router, Navigate };
