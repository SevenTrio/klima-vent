import { connect } from 'react-redux';
import WishlistButton from './WishlistButton';
import {bindActionCreators} from "redux";
import * as wishlistActions from "../../../redux/actions/wishlist";

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(wishlistActions, dispatch),
});

export default connect(
    null,
    mapDispatchToProps,
)(WishlistButton);