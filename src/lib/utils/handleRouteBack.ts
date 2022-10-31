import type { NextRouter } from "next/router";

export const handleRouteBack = (router: NextRouter) => () => {
  if (window.history.length > 2) {
    router.back();
    return;
  }

  router.push("/");
};
