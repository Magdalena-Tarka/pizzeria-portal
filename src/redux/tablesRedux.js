import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_TABLE_STATUS = createActionName('UPDATE_TABLE_STATUS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updateTableStatus = payload => ({payload, type: UPDATE_TABLE_STATUS});

/* thunk creators */
export const fetchFromAPI = () => {    // Nasz kreator thunka, czyli fetchFromAPI, jest funkcją, która nie przyjmuje żadnych argumentów. Zwraca ona thunka, czyli funkcję. Thunk przyjmuje dwa argumenty – dispatch i getState. Pierwszy z nich, podobnie jak w mapDispatchToProps w kontenerze komponentu, jest funkcją służącą do dispatchowania akcji. Drugi, getState, jest funkcją pozwalającą na pobranie stanu aplikacji.
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
export const updateStatusInAPI = (id, status) => {
  return (dispatch, getState) => {
    console.log('id 1:', id);
    console.log('status 1:', status);
    dispatch(updateTableStatus());
    console.log('id 2:', id);
    console.log('status 2:', status);

    Axios
      .put(`${api.url}/api/${api.tables}/${id}`, {status})
      .then(res => {
        dispatch(updateTableStatus(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_TABLE_STATUS: {
      console.log('action.payload:', action.payload);

      return {
        ...statePart,
        data: statePart.data.map(table => (
          table.id === action.payload.id ?
            { ...table, status: action.payload.status }
            : table
        )),
      };
    }
    default:
      return statePart;
  }
}
