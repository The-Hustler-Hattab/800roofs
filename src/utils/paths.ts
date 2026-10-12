const prefix = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix internal links and public assets for the current deployment. */
export function sitePath(path: string): string {
  return `${prefix}/${path.replace(/^\//, '')}`;
}

/** Keep canonical URLs on the production domain, independent of preview hosting. */
export function productionPath(path: string): string {
  if (prefix && (path === prefix || path.startsWith(`${prefix}/`))) {
    return path.slice(prefix.length) || '/';
  }
  return path;
}
