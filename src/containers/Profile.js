import { connect } from 'react-redux';
import Profile from '../components/Profile';
import {bindActionCreators} from "redux";
import * as profileActions from "../redux/actions/profile";

const mapStateToProps = ({ profile }) => ({
    user: profile,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(profileActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);