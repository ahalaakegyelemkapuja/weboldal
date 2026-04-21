const ROOT_HOST = 'kovacsanikoszertartas.hu';
const WEDDING_SUBDOMAIN = 'eskuvo';
const WEDDING_HOST = `${WEDDING_SUBDOMAIN}.${ROOT_HOST}`;

function isWeddingHost(hostname: string) {
  return hostname === WEDDING_HOST || hostname === `www.${WEDDING_HOST}`;
}

function isCanonicalRootHost(hostname: string) {
  return hostname === ROOT_HOST || hostname === `www.${ROOT_HOST}`;
}

export function getNormalizedPath(pathname?: string, hash?: string, hostname?: string) {
  const resolvedPathname = pathname ?? window.location.pathname;
  const resolvedHash = hash === undefined ? window.location.hash : hash;
  const resolvedHostname = hostname ?? window.location.hostname;

  if (isWeddingHost(resolvedHostname)) {
    return '/eskuvo';
  }

  if (typeof resolvedHash === 'string' && resolvedHash.startsWith('#/')) {
    return resolvedHash.slice(1).replace(/\/+$/, '') || '/';
  }

  return resolvedPathname.replace(/\/+$/, '') || '/';
}

export function getRouteHref(path: string) {
  const currentHost = window.location.hostname;
  const normalizedTarget = getNormalizedPath(path, '', currentHost);

  if (normalizedTarget === '/eskuvo') {
    if (isCanonicalRootHost(currentHost)) {
      return `${window.location.protocol}//${WEDDING_HOST}/`;
    }
    return '/eskuvo';
  }

  if (isWeddingHost(currentHost)) {
    return `${window.location.protocol}//${ROOT_HOST}/`;
  }

  return '/';
}

export function isRouteHref(href: string) {
  return href.startsWith('/');
}

export function navigateToPath(path: string) {
  const nextPath = getNormalizedPath(path, '', window.location.hostname);
  const currentPath = getNormalizedPath(undefined, undefined, window.location.hostname);
  const href = getRouteHref(path);

  if (nextPath !== currentPath || (href.startsWith('http') && href !== window.location.href)) {
    if (href.startsWith('http')) {
      window.location.href = href;
    } else {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}
