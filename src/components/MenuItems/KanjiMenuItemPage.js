import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as kanjiActions from "../../redux/actions/kanjiActions";
import PropTypes from "prop-types";
import KanjiMenuItem from "./KanjiMenuItem";
import { mapCategoryToFa } from "./CategoryMappers";

class KanjiMenuItemPage extends React.Component {
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
      <KanjiMenuItem
        categories={this.props.categories}
        mapCategory={mapCategoryToFa}
      />
    );
  }
}

KanjiMenuItemPage.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    categories: state.kanjiCategories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCategories: bindActionCreators(
        kanjiActions.loadKanjiCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KanjiMenuItemPage);
