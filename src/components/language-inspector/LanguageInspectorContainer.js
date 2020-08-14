import { connect } from "react-redux";
import { supportedLocales } from "../../i18n/i18n.config";
import { setLocaleWithFallback } from "../../redux/actions/i18n";

import LanguageInspector from "./LanguageInspector";

const mapStateToProps = state => ({
    currentLocale: state.i18n.locale,
    supportedLocales
});

const mapDispatchToProps = ({ setLocaleWithFallback });

export default connect(mapStateToProps, mapDispatchToProps)(LanguageInspector);