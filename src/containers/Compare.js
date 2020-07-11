import { connect } from 'react-redux';
import Compare from '../components/Compare';
// import {bindActionCreators} from "redux";
// import * as compareActions from "../actions/cleanContainer";

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = dispatch => ({
    // ...bindActionCreators(compareActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Compare);