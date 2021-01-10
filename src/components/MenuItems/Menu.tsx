import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../store";
import * as letterActions from "../../store/letterCategories/actions";
import * as menuItemFactory from "./MenuItemPropsFactory";
import JapanFlag from "../JapanFlag";
import MenuItem from "./MenuItem";
import SettingsMenuItem from "./SettingsMenuItem";
import { AbcType } from "../../models/enums/AbcTypes";

const mapState = (state: RootState) => ({
  kanjiSignsCategories: state.letterCategories.kanjiSignsCategories,
  kanjiPhrasesCategories: state.letterCategories.kanjiPhrasesCategories,
  hiraganaCategories: state.letterCategories.hiraganaCategories,
  katakanaCategories: state.letterCategories.katakanaCategories,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      loadCategories: bindActionCreators(
        letterActions.loadCategories,
        dispatch
      ),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Menu = (props: PropsFromRedux) => {
  useEffect(() => {
    props.actions.loadCategories(AbcType.KANJI_PHRASES);
    props.actions.loadCategories(AbcType.KANJI_SIGNS);
    props.actions.loadCategories(AbcType.KATAKANA);
    props.actions.loadCategories(AbcType.HIRAGANA);
  }, []);

  return (
    <div className="nav">
      <JapanFlag />
      <MenuItem
        {...menuItemFactory.order(
          AbcType.KANJI_PHRASES,
          props.kanjiPhrasesCategories
        )}
      />
      <MenuItem
        {...menuItemFactory.order(
          AbcType.KANJI_SIGNS,
          props.kanjiSignsCategories
        )}
      />
      <MenuItem
        {...menuItemFactory.order(AbcType.HIRAGANA, props.hiraganaCategories)}
      />
      <MenuItem
        {...menuItemFactory.order(AbcType.KATAKANA, props.katakanaCategories)}
      />
      <SettingsMenuItem />
    </div>
  );
};

export default connector(Menu);
