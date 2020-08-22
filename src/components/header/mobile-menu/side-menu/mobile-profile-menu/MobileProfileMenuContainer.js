import { connect } from 'react-redux';
import MobileProfileMenu from './MobileProfileMenu';
import {bindActionCreators} from "redux";
import * as userActions from "../../../../../redux/actions/user";
import * as cartActions from "../../../../../redux/actions/cart";
import * as compareActions from "../../../../../redux/actions/compare";
import * as wishlistActions from "../../../../../redux/actions/wishlist";

const mapStateToProps = ({ user }) => ({
    authorized: user.authorized,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch),
    ...bindActionCreators(cartActions, dispatch),
    ...bindActionCreators(compareActions, dispatch),
    ...bindActionCreators(wishlistActions, dispatch),});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MobileProfileMenu);