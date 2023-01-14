import { writable } from "svelte/store";
import { persistStore } from "$scripts/persist-store";

const urlParams = new URLSearchParams(window.location.search);

let weekDefault, sceneDefault;

if (urlParams.has("week")) {
  const weekParam = urlParams.get("week");
  weekDefault = parseInt(weekParam);
}

if (urlParams.has("scene")) {
  const sceneParam = urlParams.get("scene");
  sceneDefault = parseInt(sceneParam);
}

export const week = writable(weekDefault ?? 0);
export const scene = writable(sceneDefault ?? 0);

export const gameState = writable("playing");
export const highScore = persistStore("highscore", 0);
