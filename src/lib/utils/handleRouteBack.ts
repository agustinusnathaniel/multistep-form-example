import type { NextRouter } from "next/router";

const strategies = ["push", "replace"] as const;
type ReplaceStrategy = (typeof strategies)[number];

interface HandleRouteBackParams {
  router: NextRouter;
  to?: string;
  strategy?: ReplaceStrategy;
}

export const handleRouteBack =
  ({ router, to = "/", strategy = "replace" }: HandleRouteBackParams) =>
  () => {
    const requestedPath = `${window.location.protocol}//${window.location.host}${to}`;
    if (window.history.length > 2 && document.referrer === requestedPath) {
      router.back();
      return;
    }

    if (strategy === "replace") {
      router.replace(to);
      return;
    }

    router.push(to);
  };
