import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityActions from '../../../redux/actions/city';
import City from './City';



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
)(City);