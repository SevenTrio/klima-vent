import { connect } from 'react-redux';
import Product from './Product';
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cart";

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    null,
    mapDispatchToProps,
)(Product);