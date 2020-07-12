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
  kanjiCategories: state.letterCategories.kanjiCategories,
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
    props.actions.loadCategories(AbcType.KANJI);
    props.actions.loadCategories(AbcType.KATAKANA);
    props.actions.loadCategories(AbcType.HIRAGANA);
  }, []);

  return (
    <div className="nav">
      <JapanFlag />
      <MenuItem
        {...menuItemFactory.order(AbcType.KANJI, props.kanjiCategories)}
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
