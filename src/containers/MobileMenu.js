import { connect } from 'react-redux';
import MobileMenu from '../components/MobileMenu';
// import {bindActionCreators} from "redux";
// import * as mobileMenuActions from "../actions/mobileMenu";

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = dispatch => ({
    // ...bindActionCreators(mobileMenuActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MobileMenu);