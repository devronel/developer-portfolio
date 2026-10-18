"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => /mac|iphone|ipad/i.test(navigator.userAgent);
const getServerSnapshot = () => false;

/**
 * Whether the visitor is on an Apple platform.
 * `useSyncExternalStore` keeps the server render deterministic (false) and
 * updates after hydration without the usual `useEffect` + `setState` dance.
 */
export function useIsMac(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
