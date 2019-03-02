import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
//import Calendar from './Calendar';
import LandingPage from './LandingPage'

function mapStateToProps(state) {
  return {
    events: state.events,
    days_left: state.days_left,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ReduxBoundApp = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export default ReduxBoundApp;