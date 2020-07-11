import { connect } from 'react-redux';
import Search from '../components/Search';
import {bindActionCreators} from "redux";
// import * as searchActions from "../actions/search";

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = dispatch => ({
    // ...bindActionCreators(searchActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);