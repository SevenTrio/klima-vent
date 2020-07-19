import { connect } from 'react-redux';
import CleanContainer from '../components/CleanContainer';
// import {bindActionCreators} from "redux";
// import * as cleanContainerActions from "../actions/cleanContainer";

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
    // ...bindActionCreators(cleanContainerActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CleanContainer);