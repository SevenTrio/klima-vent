import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import {bindActionCreators} from "redux";
import * as userActions from "../../redux/actions/user";

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch)
});

export default connect(
    null,
    mapDispatchToProps,
)(LoginForm);