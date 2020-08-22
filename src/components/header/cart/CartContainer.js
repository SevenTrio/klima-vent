import { connect } from 'react-redux';
import Cart from './Cart';
import {bindActionCreators} from "redux";
import * as cartActions from "../../../redux/actions/cart";

const mapStateToProps = ({ cart }) => ({
    cartOpen: cart.open,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);