function globFolders(): [string, Page][] {
  return Object.entries(import.meta.glob(`@/pages/**/*.tsx`, { eager: true }));
}

function generateRoutes() {
  return globFolders().map((page) => {
    return {
      component: page[1].default,
      isAuth: page[1].isAuth,
      path: page[1].path,
    };
  });
}

export const routes = generateRoutes();
