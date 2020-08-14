import { connect } from "react-redux";

import Search from "./Search";

const mapStateToProps = state => ({
    locale: state.i18n.locale,
});

export default connect(mapStateToProps)(Search);