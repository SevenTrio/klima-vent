import { connect } from 'react-redux';
import { setLocaleWithFallback } from "../../../redux/actions/i18n";
import { supportedLocales } from "../../../config/i18n.config";
import LanguageSwitcher from "./LanguageSwitcher";


const mapStateToProps = state => ({
    locale: state.i18n.locale,
    supportedLocales
});

const mapDispatchToProps = { setLocaleWithFallback };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LanguageSwitcher);