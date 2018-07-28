import { services } from './services';
import * as actionTypes from './constants';

const getServerTime = () => ({ type: actionTypes.TIMER_FETCHING});
const getServerTimeSuccess = time => ({ type: actionTypes.TIMER_FETCHING_SUCCESS, payload:{time}});
const getServerTimeError = error => ({ type: actionTypes.TIMER_FETCHING_ERROR, payload:{error}});

const getTotalValue = () => ({ type: actionTypes.SUM_FETCHING});
const getTotalValueSuccess = total => ({ type: actionTypes.SUM_FETCHING_SUCCESS, payload:{total}});
const getTotalValueError = error => ({ type: actionTypes.SUM_FETCHING_ERROR, payload:{error}});

const getTrimText = () => ({ type: actionTypes.TEXT_FETCHING});
const getTrimTextSuccess = text => ({ type: actionTypes.TEXT_FETCHING_SUCCESS, payload:{text}});
const getTrimTextError = error => ({ type: actionTypes.TEXT_FETCHING_ERROR, payload:{error}});

export const fetchTime = (method, params) => (dispatch) => {
  dispatch(getServerTime());
  services.fetchServerResponse(method, params)
  .subscribe(
    (data) => { dispatch(getServerTimeSuccess(data)); },
    (error) => { dispatch(getServerTimeError(error)); },
  )
}

export const fetchTotal = (method, params) => (dispatch) => {
  dispatch(getTotalValue());
  services.fetchServerResponse(method, params)
  .subscribe(
    (data) => { dispatch(getTotalValueSuccess(data)); },
    (error) => { dispatch(getTotalValueError(error)); },
  )
}

export const fetchSpaceFreeText = (method, params) => (dispatch) => {
  dispatch(getTrimText());
  services.fetchServerResponse(method, params)
  .subscribe(
    (data) => { dispatch(getTrimTextSuccess(data)); },
    (error) => { dispatch(getTrimTextError(error)); },
  )
}

export default { fetchTime, fetchTotal, fetchSpaceFreeText };