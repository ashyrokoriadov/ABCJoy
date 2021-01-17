import {
  mapCategoryToFa,
  mapCategoryToKatakana,
  mapCategoryToHiragana,
  mapNumberToJlpt
} from "../../MenuItems/CategoryMappers";

import { renderKanjiSubMenu, renderKanaSubMenu } from "./SubMenuItemRenderers";

export function renderKanjiSubMenuItem(category: string): JSX.Element {
  let symbol = mapCategoryToFa(category);
  return renderKanjiSubMenu(symbol);
}

export function renderKatakanaSubMenuItem(category: string): JSX.Element {
  let symbol = mapCategoryToKatakana(category);
  return renderKanaSubMenu(symbol);
}

export function renderHiraganaSubMenuItem(category: string): JSX.Element {
  let symbol = mapCategoryToHiragana(category);
  return renderKanaSubMenu(symbol);
}

export function renderKanjiSignSubMenuItem(category: string): JSX.Element {
  let symbol = mapNumberToJlpt(category);
  return renderKanaSubMenu(symbol);
}
