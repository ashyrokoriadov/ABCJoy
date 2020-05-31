import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as katakanaActions from "../../redux/actions/katakanaActions";
import PropTypes from "prop-types";
import KatakanaMenuItem from "./KatakanaMenuItem";
import { mapCategoryToKatakana } from "./CategoryMappers";

class KatakanaMenuItemPage extends React.Component {
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
      <KatakanaMenuItem
        categories={this.props.categories}
        mapCategory={mapCategoryToKatakana}
      />
    );
  }
}

KatakanaMenuItemPage.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    categories: state.katakanaCategories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCategories: bindActionCreators(
        katakanaActions.loadCategories,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KatakanaMenuItemPage);
