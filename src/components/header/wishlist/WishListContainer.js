import { connect } from 'react-redux';
import WishList from './WishList';
import {bindActionCreators} from "redux";
import * as wishlistActions from "../../../redux/actions/wishlist";

const mapStateToProps = ({ wishlist }) => ({
    wishlistOpen: wishlist.open,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(wishlistActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishList);