import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityActions from '../../../redux/actions/city';
import CityButton from './CityButton';

const mapStateToProps = ({ city }) => ({
    currentCity: city.currentCity,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cityActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CityButton);