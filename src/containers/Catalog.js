import { connect } from 'react-redux';
import Catalog from '../components/Catalog';
import {bindActionCreators} from "redux";
// import * as catalogActions from "../actions/catalog";

const mapStateToProps = ({  }) => ({
    
});

const mapDispatchToProps = dispatch => ({
    // ...bindActionCreators(catalogActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Catalog);