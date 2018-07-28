import { fromJS } from 'immutable';
import * as actionTypes from '../constants';

const initialState = fromJS({
  error: null,
  isFetchingTime: false,
  isFetchingSum: false,
  isFetchingText: false,
  timer: null,
  totalValue: null,
  trimText:null,
});

export default (state = initialState, action = {}) => {
  switch (action.type){
    case actionTypes.TIMER_FETCHING:
      return { ...state, error: null, isFetchingTime: true};
    case actionTypes.TIMER_FETCHING_ERROR:
      return { ...state, error: {name : action.error.name}, isFetchingTime: false};
    case actionTypes.TIMER_FETCHING_SUCCESS:
      return { ...state, error: null, isFetchingTime: false, timer: action.payload.time};
    case actionTypes.SUM_FETCHING:
      return { ...state, error: null, isFetchingSum: true};
    case actionTypes.SUM_FETCHING_ERROR:
      return { ...state, error: {name : action.error.name}, isFetchingSum: false};
    case actionTypes.SUM_FETCHING_SUCCESS:
      return { ...state, error: null, isFetchingSum: false, totalValue: action.payload.total};
    case actionTypes.TEXT_FETCHING:
      return { ...state, error: null, isFetchingText: true};
    case actionTypes.TEXT_FETCHING_ERROR:
      return { ...state, error: {name : action.error.name}, isFetchingText: false};
    case actionTypes.TEXT_FETCHING_SUCCESS:
      return { ...state, error: null, isFetchingText: false, trimText: action.payload.text};
    default:
      return state;
  }
};