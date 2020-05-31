import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as hiraganaActions from "../../redux/actions/hiraganaActions";
import PropTypes from "prop-types";
import HiraganaMenuItem from "./HiraganaMenuItem";
import { mapCategoryToHiragana } from "./CategoryMappers";

class HiraganaMenuItemPage extends React.Component {
  componentDidMount() {
    const { categories, actions } = this.props;

    if (categories.length === 0) {
      actions.loadCategories().catch((error) => {
        alert("Loading categories failed" + error);
      });
    }
  }

  render() {
    return (
      <HiraganaMenuItem
        categories={this.props.categories}
        mapCategory={mapCategoryToHiragana}
      />
    );
  }
}

HiraganaMenuItemPage.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    categories: state.hiraganaCategories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCategories: bindActionCreators(
        hiraganaActions.loadCategories,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HiraganaMenuItemPage);
