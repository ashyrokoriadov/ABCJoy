import { AbcType } from "../../models/enums/AbcTypes";
import { MenuItemProps } from "../../models/props/MenuItemProps";
import {
  renderKatakanaSubMenuItem,
  renderHiraganaSubMenuItem,
  renderKanjiSubMenuItem,
} from "../common/renderers/LetterRenderer";

export function order(type: AbcType, categories: string[]): MenuItemProps {
  switch (type) {
    case AbcType.KANJI:
      return {
        categories,
        renderSubMenuItem: renderKanjiSubMenuItem,
        abcTypeCss: type.toLowerCase(),
        abcType: type.toLowerCase(),
        subMenuItemHeader: "Kanji",
        menuItemText: "語",
      };
    case AbcType.HIRAGANA:
      return {
        categories,
        renderSubMenuItem: renderHiraganaSubMenuItem,
        abcTypeCss: type.toLowerCase(),
        abcType: type.toLowerCase(),
        subMenuItemHeader: "Hiragana",
        menuItemText: "あ",
      };
    case AbcType.KATAKANA:
      return {
        categories,
        renderSubMenuItem: renderKatakanaSubMenuItem,
        abcTypeCss: type.toLowerCase(),
        abcType: type.toLowerCase(),
        subMenuItemHeader: "Katakana",
        menuItemText: "ア",
      };
  }
}
