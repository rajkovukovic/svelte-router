import { derived, writable } from 'svelte/store';

const { set, subscribe } = writable({});

const remove = () => {
  set({});
};

const activeRoute = {
  subscribe,
  set,
  remove,
};

const activeRouteReadable = derived(activeRoute, route => route);
export { activeRoute, activeRouteReadable };
