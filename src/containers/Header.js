// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as languageActions from '../actions/language';
// import Header from '../components/Header';
//
// const mapStateToProps = ({ language }) => ({
//     currentLang: language.language,
//     languages: language.languages,
// });
//
// const mapDispatchToProps = dispatch => ({
//     // ...bindActionCreators(languageActions, dispatch),
// });
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Header);

import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);