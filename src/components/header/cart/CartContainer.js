import { connect } from 'react-redux';
import Cart from './Cart';
// import {bindActionCreators} from "redux";
// import * as cartActions from "../actions/cart";

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = dispatch => ({
    // ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);