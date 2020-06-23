// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as testsActions from '../actions/tests';
// import App from '../components/App';
//
//
//
// const mapStateToProps = ({ tests }) => ({
//   testText: tests.text,
//   testNumber: tests.num,
// });
//
// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators(testsActions, dispatch),
// });
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(App);

import { connect } from 'react-redux';
import App from '../components/App';


export default connect(

)(App);
