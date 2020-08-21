import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityActions from '../../../../../redux/actions/city';
import MobileCity from './MobileCity';


const mapStateToProps = ({ city }) => ({
    citiesList: city.citiesList,
    currentCity: city.currentCity,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cityActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MobileCity);