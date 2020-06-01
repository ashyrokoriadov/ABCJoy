import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as kanjiActions from "../../redux/actions/kanjiActions";
import * as katakanaActions from "../../redux/actions/katakanaActions";
import * as hiraganaActions from "../../redux/actions/hiraganaActions";
import PropTypes from "prop-types";
import JapanFlag from "../JapanFlag";
import MenuItem from "./MenuItem";
import {
  renderKanaSubMenuItem,
  renderKanjiSubMenuItem,
} from "./SubMenuItemRenderers";
import {
  mapCategoryToFa,
  mapCategoryToKatakana,
  mapCategoryToHiragana,
} from "./CategoryMappers";

class Menu extends React.Component {
  componentDidMount() {
    const {
      kanjiCategories,
      katakanaCategories,
      hiraganaCategories,
      actions,
    } = this.props;

    loadCategories(kanjiCategories, actions.loadKanjiCategories);
    loadCategories(katakanaCategories, actions.loadKatakanaCategories);
    loadCategories(hiraganaCategories, actions.loadHiraganaCategories);
  }

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
      </div>
    );
  }
}

Menu.propTypes = {
  kanjiCategories: PropTypes.array.isRequired,
  katakanaCategories: PropTypes.array.isRequired,
  hiraganaCategories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function loadCategories(categories, loadCategories) {
  if (categories.length === 0) {
    loadCategories().catch((error) => {
      alert("Loading categories failed" + error);
    });
  }
}

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

function mapStateToProps(state) {
  return {
    kanjiCategories: state.kanjiCategories,
    katakanaCategories: state.katakanaCategories,
    hiraganaCategories: state.hiraganaCategories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadKanjiCategories: bindActionCreators(
        kanjiActions.loadCategories,
        dispatch
      ),
      loadKatakanaCategories: bindActionCreators(
        katakanaActions.loadCategories,
        dispatch
      ),
      loadHiraganaCategories: bindActionCreators(
        hiraganaActions.loadCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
