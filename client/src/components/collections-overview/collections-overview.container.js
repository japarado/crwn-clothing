import WithSpinner from "components/with-spinner/with-spinner.component";
import {connect} from "react-redux";
import {selectIsCollectionFetching} from "redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";
import CollectionsOverview from "./collections-overview.component";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
