export function isTouchDevice() {
  return Boolean(window.matchMedia("(pointer: coarse)").matches);
}
