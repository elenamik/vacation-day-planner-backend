import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Calendar from './Calendar';

function mapStateToProps(state) {
  return {
    events: state.events,
    days_left: state.days_left
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ReduxBoundCalendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default ReduxBoundCalendar;