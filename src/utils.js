// src/utils.js
export function createPageUrl(pageName) {
  switch (pageName) {
    case 'Home':
      return '/';
    case 'Brands':
      return '/brands';
    case 'WallClock':
      return '/wallclock';
    case 'About':
      return '/about';
    default:
      return '/';
  }
}
