import {
  localisedRoute,
  navigateTo,
  routeIsActive,
  SpaRouter,
} from "./spa_router";
import Route from "./components/route.svelte";
import Router from "./components/router.svelte";
import Navigate from "./components/navigate.svelte";
import { activeRouteReadable as activeRoute } from "./store";

console.log({ activeRoute, from: "svelte-router/src/index.js" });

export {
  activeRoute,
  localisedRoute,
  Navigate,
  navigateTo,
  Route,
  routeIsActive,
  Router,
  SpaRouter,
};
