import { connect } from 'react-redux';
import CompareButton from './CompareButton';
import {bindActionCreators} from "redux";
import * as compareActions from "../../../redux/actions/compare";

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(compareActions, dispatch),
});

export default connect(
    null,
    mapDispatchToProps,
)(CompareButton);