import { connect } from 'react-redux';
import Compare from './Compare';
import {bindActionCreators} from "redux";
import * as compareActions from "../../../redux/actions/compare";

const mapStateToProps = ({ compare }) => ({
    compareOpen: compare.open,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(compareActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Compare);