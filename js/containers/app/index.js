import App from './app';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) { 
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { 
    return {
        anInt: state.anInt,
        aSecondInt: state.aSecondInt
    }
}, mapDispatchToProps)(App);