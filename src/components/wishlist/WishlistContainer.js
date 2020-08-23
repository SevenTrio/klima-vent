import { connect } from 'react-redux';
import Wishlist from './Wishlist';
import {bindActionCreators} from "redux";
import * as wishlistActions from "../../redux/actions/wishlist";

const mapStateToProps = ({ wishlist }) => ({
    wishlistOpen: wishlist.open,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(wishlistActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Wishlist);