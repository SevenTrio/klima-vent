import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityActions from '../redux/actions/city';
import City from '../components/City';



const mapStateToProps = ({ city }) => ({
    sitiesList: city.sitiesList,
    currentCityId: city.currentCityId,
    currentCity: city.sitiesList[city.currentCityId],
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cityActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(City);