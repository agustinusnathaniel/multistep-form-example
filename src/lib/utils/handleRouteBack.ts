import type { NextRouter } from "next/router";

export const handleRouteBack =
  (router: NextRouter, to = "/") =>
  () => {
    if (window.history.length > 2 && document.referrer === to) {
      router.back();
      return;
    }

    router.replace(to);
  };
