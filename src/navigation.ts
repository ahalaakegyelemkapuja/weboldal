export function getNormalizedPath(pathname = window.location.pathname, hash = window.location.hash) {
  if (typeof hash === 'string' && hash.startsWith('#/')) {
    return hash.slice(1).replace(/\/+$/, '') || '/';
  }

  return pathname.replace(/\/+$/, '') || '/';
}

export function isRouteHref(href: string) {
  return href.startsWith('/');
}

export function navigateToPath(path: string) {
  const nextPath = getNormalizedPath(path);
  const currentPath = getNormalizedPath();

  if (nextPath !== currentPath) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}