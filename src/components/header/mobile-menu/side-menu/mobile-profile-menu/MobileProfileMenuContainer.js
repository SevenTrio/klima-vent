import { connect } from 'react-redux';
import MobileProfileMenu from './MobileProfileMenu';
import {bindActionCreators} from "redux";
import * as profileActions from "../../../../../redux/actions/profile";

const mapStateToProps = ({ profile }) => ({
    user: profile,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(profileActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MobileProfileMenu);