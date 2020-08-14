import { connect } from "react-redux";

import LocalizedLink from "./LocalizedLink";

const mapStateToProps = state => ({
    locale: state.i18n.locale,
});


export default connect(mapStateToProps)(LocalizedLink);