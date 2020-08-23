import { connect } from 'react-redux';
import CartButton from './CartButton';
import {bindActionCreators} from "redux";
import * as cartActions from "../../../redux/actions/cart";

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    null,
    mapDispatchToProps,
)(CartButton);