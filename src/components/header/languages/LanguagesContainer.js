import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as languageActions from '../../../redux/actions/language';
import Languages from './Languages';



const mapStateToProps = ({ language }) => ({
  currentLang: language.language,
  languages: language.languages,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(languageActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Languages);