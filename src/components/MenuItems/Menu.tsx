import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../redux/reducers";
import * as kanjiActions from "../../redux/kanjiCategories/thunk";
import * as hiraganaActions from "../../redux/hiraganaCategories/thunk";
import * as katakanaActions from "../../redux/katakanaCategories/thunk";
import JapanFlag from "../JapanFlag";
import MenuItem from "./MenuItem";
//import SettingsMenuItem from "./SettingsMenuItem";
import {
  renderKanaSubMenuItem,
  renderKanjiSubMenuItem,
} from "./SubMenuItemRenderers";
import {
  mapCategoryToFa,
  mapCategoryToKatakana,
  mapCategoryToHiragana,
} from "./CategoryMappers";

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
        categories={props.kanjiCategories}
        renderSubMenuItem={renderKanjiSubmenuItem}
        abcTypeCss="kanji"
        abcType="kanji"
        menuItemText="語"
        subMenuItemHeader="Kanji"
      />
      <MenuItem
        categories={props.hiraganaCategories}
        renderSubMenuItem={renderHiraganaSubmenuItem}
        abcTypeCss="hiragana"
        abcType="hiragana"
        menuItemText="あ"
        subMenuItemHeader="Hiragana"
      />
      <MenuItem
        categories={props.katakanaCategories}
        renderSubMenuItem={renderKatakanaSubmenuItem}
        abcTypeCss="katakana"
        abcType="katakana"
        menuItemText="ア"
        subMenuItemHeader="Katakana"
      />
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

/*
class Menu extends React.Component {
  //componentDidMount() {
    //const {
      //kanjiCategories,
      //katakanaCategories,
      //hiraganaCategories,
      //actions,
    //} = this.props;

    loadCategories(kanjiCategories, actions.loadKanjiCategories);
    //loadCategories(katakanaCategories, actions.loadKatakanaCategories);
    //loadCategories(hiraganaCategories, actions.loadHiraganaCategories);
  //}

  render() {
    return (
      <div className="nav">
        <JapanFlag />
        <MenuItem
          categories={this.props.kanjiCategories}
          renderSubMenuItem={renderKanjiSubmenuItem}
          abcTypeCss="kanji"
          abcType="kanji"
          menuItemText="語"
          subMenuItemHeader="Kanji"
        />
        {/*
        <MenuItem
          categories={this.props.hiraganaCategories}
          renderSubMenuItem={renderHiraganaSubmenuItem}
          abcTypeCss="hiragana"
          abcType="hiragana"
          menuItemText="あ"
          subMenuItemHeader="Hiragana"
        />
        <MenuItem
          categories={this.props.katakanaCategories}
          renderSubMenuItem={renderKatakanaSubmenuItem}
          abcTypeCss="katakana"
          abcType="katakana"
          menuItemText="ア"
          subMenuItemHeader="Katakana"
        />
        <SettingsMenuItem />
        *
      </div>
    );
  }
}
*/

function renderKanjiSubmenuItem(category) {
  let symbol = mapCategoryToFa(category);
  return renderKanjiSubMenuItem(symbol);
}

function renderKatakanaSubmenuItem(category) {
  let symbol = mapCategoryToKatakana(category);
  return renderKanaSubMenuItem(symbol);
}

function renderHiraganaSubmenuItem(category) {
  let symbol = mapCategoryToHiragana(category);
  return renderKanaSubMenuItem(symbol);
}

export default connector(Menu);
