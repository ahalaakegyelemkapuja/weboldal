export function getNormalizedPath(pathname?: string, hash?: string) {
  const resolvedPathname = pathname ?? window.location.pathname;
  const resolvedHash = pathname === undefined && hash === undefined ? window.location.hash : (hash ?? '');

  if (typeof resolvedHash === 'string' && resolvedHash.startsWith('#/')) {
    return resolvedHash.slice(1).replace(/\/+$/, '') || '/';
  }

  return resolvedPathname.replace(/\/+$/, '') || '/';
}

export function isRouteHref(href: string) {
  return href.startsWith('/');
}

export function navigateToPath(path: string) {
  const nextPath = getNormalizedPath(path, '');
  const currentPath = getNormalizedPath();

  if (nextPath !== currentPath) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}