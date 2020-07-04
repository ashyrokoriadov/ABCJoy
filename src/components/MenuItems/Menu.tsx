import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../store/reducers";
import { LetterType } from "../../models/api/LetterType";
import * as kanjiActions from "../../store/kanjiCategories/thunk";
import * as hiraganaActions from "../../store/hiraganaCategories/thunk";
import * as katakanaActions from "../../store/katakanaCategories/thunk";
import * as menuItemFactory from "./MenuItemPropsFactory";
import JapanFlag from "../JapanFlag";
import MenuItem from "./MenuItem";
import SettingsMenuItem from "./SettingsMenuItem";

const mapState = (state: RootState) => ({
  kanjiCategories: state.kanjiCategories,
  hiraganaCategories: state.hiraganaCategories,
  katakanaCategories: state.katakanaCategories,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      loadKanjiCategories: bindActionCreators(
        kanjiActions.loadCategories,
        dispatch
      ),
      loadHiraganaCategories: bindActionCreators(
        hiraganaActions.loadCategories,
        dispatch
      ),
      loadKatakanaCategories: bindActionCreators(
        katakanaActions.loadCategories,
        dispatch
      ),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Menu = (props: PropsFromRedux) => {
  loadCategories(props.kanjiCategories, props.actions.loadKanjiCategories);
  loadCategories(
    props.katakanaCategories,
    props.actions.loadKatakanaCategories
  );
  loadCategories(
    props.hiraganaCategories,
    props.actions.loadHiraganaCategories
  );

  return (
    <div className="nav">
      <JapanFlag />
      <MenuItem
        {...menuItemFactory.order(LetterType.KANJI, props.kanjiCategories)}
      />
      <MenuItem
        {...menuItemFactory.order(
          LetterType.HIRAGANA,
          props.hiraganaCategories
        )}
      />
      <MenuItem
        {...menuItemFactory.order(
          LetterType.KATAKANA,
          props.katakanaCategories
        )}
      />
      <SettingsMenuItem />
    </div>
  );
};

function loadCategories(
  categories: string[],
  loadCategories: () => void | any
): void {
  if (categories.length === 0) {
    loadCategories().catch((error) => {
      alert("Loading categories failed" + error);
    });
  }
}

export default connector(Menu);
