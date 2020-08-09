import { connect } from 'react-redux';
import WishList from './WishList';
// import {bindActionCreators} from "redux";
// import * as wishListActions from "../actions/wishList";

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = dispatch => ({
    // ...bindActionCreators(wishListActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishList);